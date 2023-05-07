import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from "@ethersproject/contracts";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import * as chai from "chai";

const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
import { keccak256 } from "ethers/lib/utils";

const parseEther = (amount: Number) =>
  ethers.utils.parseUnits(amount.toString(), 18);

describe("Vault", () => {
  let owner: SignerWithAddress,
    alice: SignerWithAddress,
    bob: SignerWithAddress,
    carol: SignerWithAddress;

  let vault: Contract;
  let token: Contract;

  beforeEach(async () => {
    await ethers.provider.send("hardhat_reset", []);
    [owner, alice, bob, carol] = await ethers.getSigners();

    const Vault = await ethers.getContractFactory("Vault", owner);
    vault = await Vault.deploy();
    const Token = await ethers.getContractFactory("TADA", owner);
    token = await Token.deploy();

    await vault.setToken(token.address);
  });

  // Happy path
  it.skip("Should deposit into the Vault", async () => {
    await token.transfer(alice.address, parseEther(1 * 10 ** 6));
    await token
      .connect(alice)
      .approve(vault.address, token.balanceOf(alice.address));
    await vault.connect(alice).deposit(parseEther(500 * 10 ** 3));
    let vault_balance = await token.balanceOf(vault.address);
    expect(vault_balance).equal(parseEther(500 * 10 ** 3));
  });

  it.skip("Should withdraw", async () => {
    // grant withdraw role to bob
    let WITHDRAW_ROLE = keccak256(Buffer.from("WITHDRAW_ROLE")).toString();
    await vault.grantRole(WITHDRAW_ROLE, bob.address);

    await vault.setWithdrawEnable(true);
    await vault.setMaxWithdrawAmount(parseEther(1 * 10 ** 6));

    // alice deposit into vault
    await token.transfer(alice.address, parseEther(1 * 10 ** 6));
    await token
      .connect(alice)
      .approve(vault.address, token.balanceOf(alice.address));
    await vault.connect(alice).deposit(parseEther(500 * 10 ** 3));

    // bob withdraw into alice address
    await vault.connect(bob).withdraw(parseEther(300 * 10 ** 3), alice.address);

    expect(await token.balanceOf(vault.address)).equal(
      parseEther(200 * 10 ** 3)
    );
    expect(await token.balanceOf(alice.address)).equal(
      parseEther(800 * 10 ** 3)
    );
  });

  // Unhappy path
  it.skip("Should not deposit. Insufficient account balance", async () => {
    await token.transfer(alice.address, parseEther(1 * 10 ** 6));
    await token
      .connect(alice)
      .approve(vault.address, token.balanceOf(alice.address));
    await expect(
      vault.connect(alice).deposit(parseEther(2 * 10 ** 6))
    ).revertedWith("Insufficient account balance");
  });

  it.skip("Should not withdraw. Withdraw is not available", async () => {
    // grant withdraw role to bob
    let WITHDRAW_ROLE = keccak256(Buffer.from("WITHDRAW_ROLE")).toString();
    await vault.grantRole(WITHDRAW_ROLE, bob.address);

    await vault.setWithdrawEnable(false);
    await vault.setMaxWithdrawAmount(parseEther(1 * 10 ** 6));

    // alice deposit into vault
    await token.transfer(alice.address, parseEther(1 * 10 ** 6));
    await token
      .connect(alice)
      .approve(vault.address, token.balanceOf(alice.address));
    await vault.connect(alice).deposit(parseEther(500 * 10 ** 3));

    // bob withdraw into alice address
    await expect(
      vault.connect(bob).withdraw(parseEther(300 * 10 ** 3), alice.address)
    ).revertedWith("Withdraw is not available");
  });

  it.skip("Should not withdraw. Exceed maximun amount", async () => {
    // grant withdraw role to bob
    let WITHDRAW_ROLE = keccak256(Buffer.from("WITHDRAW_ROLE")).toString();
    await vault.grantRole(WITHDRAW_ROLE, bob.address);

    await vault.setWithdrawEnable(true);
    await vault.setMaxWithdrawAmount(parseEther(1 * 10 ** 3));

    // alice deposit into vault
    await token.transfer(alice.address, parseEther(1 * 10 ** 6));
    await token
      .connect(alice)
      .approve(vault.address, token.balanceOf(alice.address));
    await vault.connect(alice).deposit(parseEther(500 * 10 ** 3));

    // bob withdraw into alice address
    await expect(
      vault.connect(bob).withdraw(parseEther(2 * 10 ** 3), alice.address)
    ).revertedWith("Exceed maximum amount");
  });

  it.skip("Should not withdraw. Caller is not a withdrawer", async () => {
    // grant withdraw role to bob
    let WITHDRAW_ROLE = keccak256(Buffer.from("WITHDRAW_ROLE")).toString();
    await vault.grantRole(WITHDRAW_ROLE, bob.address);

    await vault.setWithdrawEnable(true);
    await vault.setMaxWithdrawAmount(parseEther(1 * 10 ** 6));

    // alice deposit into vault
    await token.transfer(alice.address, parseEther(1 * 10 ** 6));
    await token
      .connect(alice)
      .approve(vault.address, token.balanceOf(alice.address));
    await vault.connect(alice).deposit(parseEther(500 * 10 ** 3));

    // bob withdraw into alice address
    await expect(
      vault.connect(carol).withdraw(parseEther(2 * 10 ** 3), alice.address)
    ).revertedWith("Caller is not a withdrawer");
  });

  it("Should not withdraw. ERC20: transfer amount exceeds balance", async () => {
    // grant withdraw role to bob
    let WITHDRAW_ROLE = keccak256(Buffer.from("WITHDRAW_ROLE")).toString();
    await vault.grantRole(WITHDRAW_ROLE, bob.address);

    await vault.setWithdrawEnable(true);
    await vault.setMaxWithdrawAmount(parseEther(5 * 10 ** 3));

    // alice deposit into vault
    await token.transfer(alice.address, parseEther(1 * 10 ** 6));
    await token
      .connect(alice)
      .approve(vault.address, token.balanceOf(alice.address));
    await vault.connect(alice).deposit(parseEther(2 * 10 ** 3));

    // bob withdraw into alice address
    await expect(
      vault.connect(bob).withdraw(parseEther(3 * 10 ** 3), alice.address)
    ).revertedWith("ERC20: transfer amount exceeds balance");
  });
});

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface TADACrowdSaleInterface extends utils.Interface {
  functions: {
    "_wallet()": FunctionFragment;
    "buyTokenWithBNB()": FunctionFragment;
    "buyTokenWithUSDT(uint256)": FunctionFragment;
    "getAmountBNB(uint256)": FunctionFragment;
    "getAmountUSDT(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "rate_BNB()": FunctionFragment;
    "rate_USDT()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setRateBNB(uint256)": FunctionFragment;
    "setRateUSDT(uint256)": FunctionFragment;
    "setUSDT(address)": FunctionFragment;
    "token()": FunctionFragment;
    "token_USDT()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw()": FunctionFragment;
    "withdrawERC20()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_wallet"
      | "buyTokenWithBNB"
      | "buyTokenWithUSDT"
      | "getAmountBNB"
      | "getAmountUSDT"
      | "owner"
      | "rate_BNB"
      | "rate_USDT"
      | "renounceOwnership"
      | "setRateBNB"
      | "setRateUSDT"
      | "setUSDT"
      | "token"
      | "token_USDT"
      | "transferOwnership"
      | "withdraw"
      | "withdrawERC20"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "_wallet", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buyTokenWithBNB",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyTokenWithUSDT",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountBNB",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountUSDT",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "rate_BNB", values?: undefined): string;
  encodeFunctionData(functionFragment: "rate_USDT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRateBNB",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRateUSDT",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setUSDT",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "token_USDT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawERC20",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "_wallet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyTokenWithBNB",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buyTokenWithUSDT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountBNB",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountUSDT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rate_BNB", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rate_USDT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRateBNB", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRateUSDT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setUSDT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token_USDT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC20",
    data: BytesLike
  ): Result;

  events: {
    "BuyTokenWithBNB(address,uint256)": EventFragment;
    "BuyTokenWithUSDT(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SetRateBNB(uint256)": EventFragment;
    "SetRateUSDT(uint256)": EventFragment;
    "SetUSDT(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BuyTokenWithBNB"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BuyTokenWithUSDT"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetRateBNB"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetRateUSDT"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetUSDT"): EventFragment;
}

export interface BuyTokenWithBNBEventObject {
  buyer: string;
  amount: BigNumber;
}
export type BuyTokenWithBNBEvent = TypedEvent<
  [string, BigNumber],
  BuyTokenWithBNBEventObject
>;

export type BuyTokenWithBNBEventFilter = TypedEventFilter<BuyTokenWithBNBEvent>;

export interface BuyTokenWithUSDTEventObject {
  buyer: string;
  amount: BigNumber;
}
export type BuyTokenWithUSDTEvent = TypedEvent<
  [string, BigNumber],
  BuyTokenWithUSDTEventObject
>;

export type BuyTokenWithUSDTEventFilter =
  TypedEventFilter<BuyTokenWithUSDTEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SetRateBNBEventObject {
  rate: BigNumber;
}
export type SetRateBNBEvent = TypedEvent<[BigNumber], SetRateBNBEventObject>;

export type SetRateBNBEventFilter = TypedEventFilter<SetRateBNBEvent>;

export interface SetRateUSDTEventObject {
  rate: BigNumber;
}
export type SetRateUSDTEvent = TypedEvent<[BigNumber], SetRateUSDTEventObject>;

export type SetRateUSDTEventFilter = TypedEventFilter<SetRateUSDTEvent>;

export interface SetUSDTEventObject {
  tokenAddress: string;
}
export type SetUSDTEvent = TypedEvent<[string], SetUSDTEventObject>;

export type SetUSDTEventFilter = TypedEventFilter<SetUSDTEvent>;

export interface TADACrowdSale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TADACrowdSaleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _wallet(overrides?: CallOverrides): Promise<[string]>;

    buyTokenWithBNB(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    buyTokenWithUSDT(
      amountUSDT: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAmountBNB(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAmountUSDT(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    rate_BNB(overrides?: CallOverrides): Promise<[BigNumber]>;

    rate_USDT(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRateBNB(
      rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRateUSDT(
      rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setUSDT(
      tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    token_USDT(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawERC20(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _wallet(overrides?: CallOverrides): Promise<string>;

  buyTokenWithBNB(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  buyTokenWithUSDT(
    amountUSDT: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAmountBNB(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAmountUSDT(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  rate_BNB(overrides?: CallOverrides): Promise<BigNumber>;

  rate_USDT(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRateBNB(
    rate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRateUSDT(
    rate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setUSDT(
    tokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  token_USDT(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawERC20(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _wallet(overrides?: CallOverrides): Promise<string>;

    buyTokenWithBNB(overrides?: CallOverrides): Promise<void>;

    buyTokenWithUSDT(
      amountUSDT: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAmountBNB(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountUSDT(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    rate_BNB(overrides?: CallOverrides): Promise<BigNumber>;

    rate_USDT(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setRateBNB(
      rate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRateUSDT(
      rate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setUSDT(
      tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    token_USDT(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<void>;

    withdrawERC20(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "BuyTokenWithBNB(address,uint256)"(
      buyer?: null,
      amount?: null
    ): BuyTokenWithBNBEventFilter;
    BuyTokenWithBNB(buyer?: null, amount?: null): BuyTokenWithBNBEventFilter;

    "BuyTokenWithUSDT(address,uint256)"(
      buyer?: null,
      amount?: null
    ): BuyTokenWithUSDTEventFilter;
    BuyTokenWithUSDT(buyer?: null, amount?: null): BuyTokenWithUSDTEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "SetRateBNB(uint256)"(rate?: null): SetRateBNBEventFilter;
    SetRateBNB(rate?: null): SetRateBNBEventFilter;

    "SetRateUSDT(uint256)"(rate?: null): SetRateUSDTEventFilter;
    SetRateUSDT(rate?: null): SetRateUSDTEventFilter;

    "SetUSDT(address)"(tokenAddress?: null): SetUSDTEventFilter;
    SetUSDT(tokenAddress?: null): SetUSDTEventFilter;
  };

  estimateGas: {
    _wallet(overrides?: CallOverrides): Promise<BigNumber>;

    buyTokenWithBNB(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    buyTokenWithUSDT(
      amountUSDT: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAmountBNB(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountUSDT(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    rate_BNB(overrides?: CallOverrides): Promise<BigNumber>;

    rate_USDT(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRateBNB(
      rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRateUSDT(
      rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setUSDT(
      tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    token_USDT(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawERC20(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _wallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyTokenWithBNB(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    buyTokenWithUSDT(
      amountUSDT: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAmountBNB(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmountUSDT(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rate_BNB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rate_USDT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRateBNB(
      rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRateUSDT(
      rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setUSDT(
      tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token_USDT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawERC20(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
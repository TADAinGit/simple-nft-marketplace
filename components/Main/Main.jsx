import React, { useContext, useEffect } from "react";
import Header from "../Header/Header.jsx";
// import { AmazonContext } from '../context/AmazonContext'

// import Cards from "./Cards";
// import Featured from "./Featured";

const Main = () => {
  const styles = {
    container: `h-full w-full flex flex-col mt-[50px] pr-[50px] overflow-hidden`,
    recentTitle: `text-2xl font-bold text-center mb-[20px] text-center mt-[40px]`,
    recentTransactionsList: `flex flex-col`,
    transactionCard: `flex justify-between mb-[20px] p-[30px] bg-[#42667e] text-white rounded-xl shadow-xl font-bold gap-[20px] text-xl`,
  };
  //   const { recentTransactions } = useContext(AmazonContext)
  const recentTransactions = [
    {
      attributes: {
        from_address: "0x0...0",
        to_address: "0x0...0",
        hash: "0x123456890987sfhdsd",
        gas: 100000,
      },
    },
  ];
  return (
    <div className={styles.container}>
      <Header />
      {/* <Featured /> */}
      {/* <Cards /> */}
      {recentTransactions.length > 0 && (
        <h1 className={styles.recentTitle}>Recent Transaction</h1>
      )}
      {recentTransactions &&
        recentTransactions.map((transaction, index) => {
          console.log(transaction);
          return (
            <div key={index} className={styles.recentTransactionsList}>
              <div className={styles.transactionCard}>
                <p>From: {transaction.attributes.from_address}</p>
                <p>To: {transaction.attributes.to_address} </p>
                <p>
                  Hash:{" "}
                  <a
                    target={"_blank"}
                    rel="noopener noreferrer"
                    href={`https://testnet.bscscan.com/tx/${transaction.attributes.hash}`}
                  >
                    {transaction.attributes.hash.slice(0, 10)}
                  </a>
                </p>
                <p>Gas: {transaction.attributes.gas}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Main;

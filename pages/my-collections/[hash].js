import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const DetailNFT = (props) => {
  const router = useRouter();
  // const { nftTx } = router.query;
  const { hash, session } = props;

  useEffect(() => {
    console.log("Session: ", session);
  }, [session]);

  return <p>Hash: {hash}</p>;
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { hash } = params;

  const session = await getSession(context);

  return {
    props: {
      hash,
      session,
    },
  };
}
export default DetailNFT;

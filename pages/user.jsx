import { getSession, signOut } from "next-auth/react";
import { useContext } from "react";
import { MarketplaceContext } from "../context/MarketplaceContext";

// gets a prop from getServerSideProps
function User({ user }) {
  const { disconnectWallet } = useContext(MarketplaceContext);
  return (
    <div>
      <h4>User session:</h4>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={disconnectWallet()}>Sign out</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context).then((s) => {
    console.log(s);
  });

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
}

export default User;

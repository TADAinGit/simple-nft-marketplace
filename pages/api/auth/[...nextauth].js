import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import Moralis from "moralis";
import connectDB from "../../../lib/connectDB";
import Users from "../../../lib/models/userSchema";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "MoralisAuth",
      credentials: {
        message: {
          label: "Message",
          type: "text",
          placeholder: "0x0",
        },
        signature: {
          label: "Signature",
          type: "text",
          placeholder: "0x0",
        },
      },
      async authorize(credentials) {
        try {
          // "message" and "signature" are needed for authorization
          // we described them in "credentials" above
          const { message, signature } = credentials;

          await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

          const { address, profileId } = (
            await Moralis.Auth.verify({ message, signature, network: "evm" })
          ).raw;

          await connectDB();
          let dbUser = await Users.findOne({ profileId: profileId });

          if (!dbUser) {
            const newUser = new Users({
              profileId: profileId,
              address: address,
              role: "user",
            });
            await newUser.save();
            dbUser = newUser;
          }

          console.log(dbUser.role);

          const user = {
            address,
            username: dbUser.username,
            role: dbUser.role || "user",
            profileId,
            signature,
          };
          return user;
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
  ],
  // adding user info to the user session object
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});

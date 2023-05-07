import Image from "next/image";
import React from "react";
import { Button, Box, TextField } from "@mui/material";
import amongus from "../../assets/amongus.png";

const isAuthenticated = false;
const username = "TADA";

const Sidebar = () => {
  const styles = {
    container: `h-full w-[300px] flex flex-col bg-[#fff] static`,
    profile: ` w-full py-4 flex flex-col justify-center items-center rounded-r-3xl bg-[#000000] mt-[40px] mb-[50px] border-2 border-[#1DB954]`,
    profilePicContainer: `flex  rounded-xl items-center justify-center w-full h-full mb-3`,
    profilePic: `rounded-3xl object-cover`,
    welcome: ` text-md mb-2 font-bold text-2xl text-white`,
    username: `flex items-center w-full justify-center`,
    usernameInput: `bg-transparent border-white border-2 rounded-lg w-[80%] py-2 px-4 text-lg mt-[20px] placeholder:text-white focus:outline-none flex justify-center items-center text-white`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        {isAuthenticated ? (
          <Box>
            <Box
              sx={{ padding: "20px" }}
              className={styles.profilePicContainer}
            >
              <Image
                src={amongus}
                alt="profile"
                className={styles.profilePic}
                height={100}
                width={100}
              />
            </Box>
            {!username ? (
              <Box>
                <Box display="flex" flexDirection="column">
                  <TextField
                    id="user-name"
                    label="Username"
                    variant="outlined"
                    className={styles.usernameInput}
                    // onChange={e => setNickName(e.target.value)}
                  />
                  <Button variant="contained">Set Username</Button>
                </Box>
              </Box>
            ) : (
              <Box>
                <div className={styles.welcome}>Hello {username}</div>
              </Box>
            )}
          </Box>
        ) : (
          <Box>
            <Button>Connect</Button>
          </Box>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

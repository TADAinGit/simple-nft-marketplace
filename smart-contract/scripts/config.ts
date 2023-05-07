import { promises as fs } from "fs";

var config: any;

export const initConfig = async () => {
  console.log("*init");
  config = JSON.parse((await fs.readFile("./config.json")).toString());
  return config;
};

export const getConfig = () => config;

export const setConfig = (path: string, val: string) => {
  console.log("*config");
  const splitPath = path.split(".").reverse();

  let ref = config;
  while (splitPath.length > 1) {
    let key = splitPath.pop();
    if (key) {
      if (!ref[key]) {
        ref[key] = {};
      }
      ref = ref[key];
    } else return;
  }
  let key = splitPath.pop();
  if (key) ref[key] = val;
};

export const updateConfig = async () => {
  console.log("write: ", JSON.stringify(config, null, 2));
  return fs.writeFile("./config.json", JSON.stringify(config, null, 2));
};

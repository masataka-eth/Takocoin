import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    // settings: {
    //   optimizer: {
    //     enabled: true,
    //     runs: 200
    //   },
    //   viaIR: true,
    // }
  },
  networks: {
    hardhat: {},
  },
};
if (process.env.PRIVATE_KEY) {
  config.networks!.astarZkEvm = {
    url: `https://rpc.startale.com/astar-zkevm`,
    accounts: [`${process.env.PRIVATE_KEY}`],
  }
  config.networks!.zKatana = {
    url: `https://rpc.zkatana.gelato.digital`,
    accounts: [`${process.env.PRIVATE_KEY}`],
  }
}

export default config;


const CaverExtKAS = require("caver-js-ext-kas");
require('dotenv').config()

const caver = new CaverExtKAS();
caver.initKASAPI(process.env.CHAIN_ID, process.env.ACCESS_KEY, process.env.SECRET_ACCESS_KEY);

async function test() {
  const account = await caver.kas.wallet.getAccountList();
  console.log(account);
}

test();
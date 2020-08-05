const path = require('path');
const fs = require('fs');
const decode = require('nodejs-sdk/packages/api/decoder');
const { Configuration, Web3jService } = require('nodejs-sdk/packages/api');


const config = new Configuration(path.join(__dirname, '../../conf/config.json'));
const web3jService = new Web3jService(config);
const abi_dir = path.join(__dirname, '../contracts');
const DeployedContract = require('../server/contracts/deployed_contract')


function call(contract_name, func_name, func_params){
  const func_abi = getABI(contract_name, func_name, func_params);

  return web3jService.call(DeployedContract.contractAddress, func_abi, func_params).then((result) => {
    const { status, output } = result.result;

    let ret = {
      status
    };

    if (output !== '0x') {
      const decoder = decode.createMethodDecoder(func_abi, null);
      ret.output = decoder.decodeOutput(output);
    }
    return ret;
  });
}

function sendRawTransaction(contract_name, func_name, func_params) {
  const func_abi = getABI(contract_name, func_name, func_params);

  return web3jService.sendRawTransaction(DeployedContract.contractAddress, func_abi, [func_params]).then((result) => {
    let { transactionHash, status, output} = result;

    let ret = {
      transactionHash,
      status
    };
    if (output !== '0x') {
      let decoder = decode.createMethodDecoder(func_abi, null);
      ret.output = decoder.decodeOutput(output);
    }
    return ret;
  });
}


function getABI(contractName, functionName, inputs) {
  let abiPath = path.join(abi_dir, `${path.basename(contractName)}.abi`);

  if (!fs.existsSync(abiPath)) {
      return null;
  }

  let abi = JSON.parse(fs.readFileSync(abiPath));
  if (functionName) {
      if (inputs && inputs.length > 0) {
          return abi.find((item) => {
              return item.type === 'function' && item.name === functionName && compareInputs(item.inputs, inputs);
          });
      } else {
          return abi.find((item) => {
              return item.type === 'function' && item.name === functionName;
          });
      }
  }

  return abi;
}

function compareInputs(inputsAbi, inputs) {
  if (inputsAbi.length !== inputs.length) {
      return false;
  }

  for (let i = 0; i < inputsAbi.length; ++i) {
      if (inputs[i] !== inputsAbi[i].type) {
          return false;
      }
  }

  return true;
}

module.exports = { call, sendRawTransaction }

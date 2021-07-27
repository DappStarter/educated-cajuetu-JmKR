require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remain history heavy private fringe twin'; 
let testAccounts = [
"0x9e91e36aa28fdf67c2d78ec18f218505df8b88eee2476a08ae314b2a1e45c13e",
"0xd581d551c4aa4387be8142e95724b0907769b9cc0340db12d9614851fcd0f9f5",
"0x8de059bafc59973ee354856b3f8a7023e25328b06c5748f574d87d4665f2dec7",
"0x3217696587f792bba17eed65a8308565fa57c9f176f7ed13d78305f003728e66",
"0x4e2ee36810c6f4d767b8a26e33a159ea65883b7f7235be6f4496d1352bee0d57",
"0x250408106a15988af10fd737bbe623584733e34a746c75037d0ba1495327e60e",
"0x3cac53ab1af3a34e48341a848afd3dbf7db2aad8923e83fd68c32c083ad63801",
"0xdd873f110ae3b72803c78b0e5cd54fcb761a99c32353a88dd284e2714f1f8e2a",
"0x5da86c14db3644fbc0fd1b19bd7f918d711313b3067e7a989ffe5e1241d7686e",
"0x019029adbe3252903a4224706fd9b650e85bb39b07c54e3f9a83dc7fffa85101"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


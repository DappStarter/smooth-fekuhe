require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hidden swift trip lizard rebel noble huge half civil army genuine'; 
let testAccounts = [
"0xff11ff883f17d23b0ba2f6272e217e289ba0c4721a76af0ebb61c96f07e5d90f",
"0xd9adf39bf414a871758e3f555388796ecd76aaedeb1b18d46fdc3bfe139cbfac",
"0xb683b50f15d6cb071329b31e5242595b5958fbc5f4c4a52f69e1f49524f53d34",
"0xa824be9475880a379cc859fd1842e21f1c64a345397790257a540552c09a80bb",
"0x6e88d4f492386949612b55e0b2c6bf71c391b2e84dc8791c47da755c6ee53166",
"0x4e69fb14ff75e45587a54a02cb3b79a4392eee1dae7670e1471b4eb0780f54b6",
"0x3f11eed103baa02a6ebdf246ede1de88db9b7d2108567a4fb3ca52bb112aeaf7",
"0x97670d5f0b7d086b5459fb5324d57821fc6ecb26eff0fadf8717ff83311891ca",
"0x57dbb88eb2cb3406cc464ee95458b5cac1f6ec79925f81e673a9a6a8fb9e1902",
"0x849f7d21dbff2c9b0afc04647292658927df51598725645b89db994413dc13ed"
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
            version: '^0.5.11'
        }
    }
};

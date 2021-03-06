const EC = require('elliptic').ec;
const SHA256 = require('crypto-js/sha256');
const uuidV1 = require('uuid/v1');
const ec = new EC('secp256k1'); // not sure the security of this as I am not a crytographer. This is what Bitcoin uses and is often the center of controversy and conspiracy. Could be an NSA backdoor coupdetat for all we know.
class ChainUtil {
  static genKeyPair() {
    return ec.genKeyPair();
  }
  static id() {
    return uuidV1();
  }

  static hash(data) {
    return SHA256(JSON.stringify(data)).toString();
  }
}

module.exports = ChainUtil;
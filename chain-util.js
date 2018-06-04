const EC = require('elliptic').ec;
const ec = new EC('secp256k1'); // not sure the security of this as I am not a crytographer. This is what Bitcoin uses and is often the center of controversy and conspiracy. Could be an NSA backdoor coupdetat for all we know.
class ChainUtil {
  static genKeyPair() {
    return ec.genKeyPair();
  }
}

module.exports = ChainUtil;
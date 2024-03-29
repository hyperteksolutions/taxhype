const axios = require("axios");

class TaxHype {
  constructor(key, secret) {
    this.key = key;
    this.secret = secret;
    this.instance = axios.create({
      baseURL: "https://api.taxhype.com",
      timeout: 15000,
      headers: { key: this.key, secret: this.secret },
    });
  }
  getAccount = async () => {
    let x = await this.instance.get("/client/getAccount");
    return Promise.resolve(x.data);
  };

  nexusStatus = async () => {
    let x = await this.instance.get("/client/nexusStatus");
    return Promise.resolve(x.data);
  };

  calculateTax = async (amount, zipCode) => {
    let x = await this.instance.post("/client/calculateTax", {
      amount,
      zipCode,
    });
    return Promise.resolve(x.data);
  };

  taxRate = async (amount, zipCode) => {
    let x = await this.instance.post("/client/taxRate", {
      amount,
      zipCode,
    });
    return Promise.resolve(x.data);
  };
}

var _old = TaxHype;
TaxHype = function (...args) {
  return new _old(...args);
};

module.exports = TaxHype;
module.exports.default = TaxHype;

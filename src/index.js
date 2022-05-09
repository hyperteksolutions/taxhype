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
    let x = await this.instance.post("/client/nexusStatus", {
      amount,
      zipCode,
    });
    return Promise.resolve(x.data);
  };
}

// module.exports = class TaxHype {
//   constructor(api_key, api_secret) {
//     this.api_key = api_key;
//     this.api_secret = api_secret;
//     this.instance = axios.create({
//       baseURL: "https://api.taxhype.com/",
//       timeout: 15000,
//       headers: { key: this.api_key, secret: this.api_secret },
//     });
//   }
//   getAccount = async () => {
//     if (this.api_key === "" || this.api_secret === "") {
//       return Promise.reject("API key and secret are required");
//     } else {
//       try {
//         let x = await this.instance.get("/client/getAccount");
//         return Promise.resolve(x.data);
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     }
//   };
//   nexusStatus = async () => {
//     if (this.api_key === "" || this.api_secret === "") {
//       return Promise.reject("API key and secret are required");
//     } else {
//       try {
//         let x = await this.instance.get("/client/nexusStatus");
//         return Promise.resolve(x.data);
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     }
//   };
// };

var _old = TaxHype;
TaxHype = function (...args) {
  return new _old(...args);
};

module.exports = TaxHype;
module.exports.default = TaxHype;

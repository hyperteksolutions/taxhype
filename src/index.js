const axios = require("axios");

module.exports = class TaxHype {
  constructor(api_key, api_secret) {
    this.api_key = api_key;
    this.api_secret = api_secret;
    this.instance = axios.create({
      baseURL: "https://api.taxhype.com/",
      timeout: 15000,
      headers: { key: this.api_key, secret: this.api_secret },
    });
  }
  getAccount = async () => {
    if (this.api_key === "" || this.api_secret === "") {
      return Promise.reject("API key and secret are required");
    } else {
      try {
        let x = await this.instance.get("/client/getAccount");
        return Promise.resolve(x.data);
      } catch (error) {
        return Promise.reject(error);
      }
    }
  };
  nexusStatus = async () => {
    if (this.api_key === "" || this.api_secret === "") {
      return Promise.reject("API key and secret are required");
    } else {
      try {
        let x = await this.instance.get("/client/nexusStatus");
        return Promise.resolve(x.data);
      } catch (error) {
        return Promise.reject(error);
      }
    }
  };
};

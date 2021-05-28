const  axios = require("axios");

class ApiService {
    async post(url, data){
        return await axios.post(url, data);
    }
}
module.exports = new ApiService();
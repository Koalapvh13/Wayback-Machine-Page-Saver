const axios = require("axios");
module.exports = async link => {
    const url = "https://web.archive.org/save/" + link;

    try {
        const response = await axios.get(url);
        const data = response.headers['content-location'];
        return "https://web.archive.org" + data;
    } catch (error) {
        throw error
    }
}
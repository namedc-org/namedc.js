const axios = require('axios').default;

class HistoryApi {
    constructor(apiToken) {
        this.apiToken = apiToken;
        this.baseUrl = "https://api.namedc.org";
    }

    checkToken() {
        if (!this.apiToken) {
            throw new Error('API token is missing');
        }
    }

    search(userId) {
        this.checkToken();
        return axios({
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${this.apiToken}`
            },
            url: `${this.baseUrl}/search`,
            params: {
                query: userId
            }
        }).then(res => res.data)
        .catch(err => {
            console.error(err);
            throw err;
        });
    }

    getAccountInfo() {
        this.checkToken();
        return axios({
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${this.apiToken}`
            },
            url: `${this.baseUrl}/account`
        }).then(res => res.data)
        .catch(err => {
            console.error(err);
            throw err;
        });
    }
}

module.exports = HistoryApi;

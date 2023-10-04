# namedc.js
A wrapper for namedc.org

Methods:

```js
const HistoryApi = require('namedc.js');

const api = new HistoryApi('your-api-token');

const userId = "";

api.search(userId).then(data => {
    console.log(data);
}).catch(err => {
    console.error(err);
});

```

```js
const HistoryApi = require('namedc.js');

const api = new HistoryApi('your-api-token');

api.getAccountInfo().then(data => {
    console.log(data);
}).catch(err => {
    console.error(err);
});

```
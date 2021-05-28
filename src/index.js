const api = require("./api");

async function send(url, data) {
    await api.post(url, data)
}

const urlEndpoint = process.argv[2];
const numOfRepettions = process.argv[3];
const data = JSON.stringify(process.argv[4]);

console.log(`Robô irá executar ${numOfRepettions} chamada para ${urlEndpoint}`);

for (let i = 0; i < numOfRepettions; i++) {
    send(urlEndpoint, data);
}
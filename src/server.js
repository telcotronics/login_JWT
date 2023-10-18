const app = require('./app');
require('./database');

async function init() {
	await app.listen(7000);
	console.log('Server on port', 7000);
}
init();
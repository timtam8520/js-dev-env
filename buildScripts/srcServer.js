import express from "express";
import { join } from "path";
import open from "open";

const port = 3000;
const app = express();

app.get('/', (req, res) => {
	res.sendFile(join(__dirname, '../src/index.html'));
});

app.listen(port, err => {
	if (err) {
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});

console.log('Listening on port:', port);


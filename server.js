import express from "express";
import axios from "axios";

const app = express();

app.listen(3000, (req, res) => {
	console.log("Listening for requests");
});

var api_key = 'at_KXvB8kd3iZcLJM45cUOmI1MRmLeg1';
var api_url = 'https://geo.ipify.org/api/v1?';


app.get("/", async (req, res) => {
        try {
		console.log("Request made");
		const ip = req.socket.remoteAddress;
        	var url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip;
		const response = await axios.get(url);
		console.log(ip)
		console.log(response.data.location);
	} catch (e) {
		console.log(e);
		res.send("An error occured");
	}
});

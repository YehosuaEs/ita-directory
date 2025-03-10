const path = require("path");
let envFile = process.env.NODE === "development" ? ".env.development" : ".env";
require("dotenv").config({path: path.join(__dirname, `/./../${envFile}`)});
const app = require("./app/app.js");
const socketio = require("socket.io");
const http = require("http");
const handlerError = require("./app/middleware/handler-errors");
const client = require("./app/utils/initRedis");
// Create IO server
const server = http.createServer(app);
const io = socketio(server, {
	cors: {
		origin: process.env.CORS,
		methods: ["GET", "POST"],
	},
});
require("./app/config/sockets")(io);

//No route found handler
app.use(handlerError.routeFoundHandler);

//Error handler
app.use(handlerError.errorHandler);

//Redis connect
(async () => {
	await client.connect();
})();

server.listen(process.env.PORT, () => {
	console.log(`Server is running on port and working ${process.env.PORT}.`);
	console.log(`Visit: http://localhost:${process.env.PORT}/`);
});

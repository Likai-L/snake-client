// establishes a connection with the game server
const net = require("net"); // without this net would be undefined even if it's also defined in play.js
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to the 🐍danger noodle colony🐍!");
    conn.write("Name: kk");
    // conn.write("Move: up");
  })

  // prints data on receiving it
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
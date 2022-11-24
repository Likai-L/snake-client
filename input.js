let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up")
  };

  if (key === "a") {
    connection.write("Move: left")
  };

  if (key === "s") {
    connection.write("Move: down")
  };

  if (key === "d") {
    connection.write("Move: right")
  };

  if (key === "1") {
    connection.write("Say: nom nom")
  }

  if (key === "2") {
    connection.write("Say: no step on snek")
  }

  if (key === "3") {
    connection.write("Say: me nope rope")
  }

  if (key === "4") {
    connection.write("Say: me danger noodle")
  }

  if (key === "5") {
    connection.write("Say: me judgy shoe lace")
  }
};

module.exports = {
setupInput,
handleUserInput
};
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  //check for exit command
  if (key === '\u0003') {
    process.exit();
  }

  switch (key) {
  case 'w':
    connection.write("Move: up");
    break;
  case 'a':
    connection.write("Move: left");
    break;
  case 's':
    connection.write("Move: down");
    break;
  case 'd':
    connection.write("Move: right");
    break;
  case '4':
    connection.write("Say: AAaaH!");
    break;
  case '2':
    connection.write("Say: Hahaha! I got this");
    break;
  case '6':
    connection.write("Say: Sssssss .... snake");
    break;
  }
};

module.exports = {setupInput};
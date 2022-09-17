const socket = require('socket.io');
const socketEvents = require('./events');

function setupSocket(server) {
  const io = socket(server, {
    cors: {
      origin: [
        'http://localhost:3000'
      ]
    }
  });

  io.on('connection', (socket) => {
    global.io = io;
    global.socket = socket;

    socket.on(socketEvents.Telestrations.JOIN_LOBBY, lobbyId => {
      socket.join(lobbyId);
    });

    socket.on(socketEvents.Telestrations.UPDATE_LOBBY, async lobbyId => {
      if (!lobbyId)
        return;

      // const lobby = await TelestrationsService.getLobby(lobbyId);

      // io.in(lobbyId).emit(socketEvents.Telestrations.UPDATE_LOBBY, lobby);
    });
  });
}

module.exports = setupSocket;
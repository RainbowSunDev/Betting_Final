let io;

module.exports = {
  init: (httpServer, setting) => {
    io = require('socket.io')(httpServer, setting)
    return io
  },
  getIo: () => {
    if(!io) {
      throw new Error('Socket.io not initialized')
    }
    return io
  }
}
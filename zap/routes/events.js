/**
 * Created by jahansj on 13/12/2016.
 */
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('A new user connected.');
    
    socket.on('zapMessage', (data) => {
      console.log(`- ${data}`);

      socket.emit('zapMessageRelay', data);
    });
  });
};
import { Server as SocketIOServer } from 'socket.io'
export default (server) => {
  const io = new SocketIOServer(server, {
    transports: ['websocket'],
  })

  io.on('connection', () => {
    console.log('Client connected!!')
  })

  return io
}

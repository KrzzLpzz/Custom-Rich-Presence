import express from 'express';
const server = express();
 
server.all('/', (_req, res) => {
  res.send(`Server n Account ONLINE`)
})
 
function keepAlive() {
  console.clear();
  server.listen(3000, () => { console.log("Server is Ready!!") });
}
 
export default keepAlive;
const { server } = require("./app");
const { printLog } = require("./utils/log");

const port = process.env.PORT || 4000;

server.listen(port, () =>
  // eslint-disable-next-line no-console
  printLog(`server is running http://localhost:${port}`)
);

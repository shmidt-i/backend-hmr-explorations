import http from "http";
import { app } from "./app";

// This timestamp will be preserved between HMR
let timestamp = Date.now();
app.set("data", timestamp);

const server = http.createServer(app);
server.listen(3000, () =>
  console.log(`Example app listening at http://localhost:3000`)
);

if ((module as any).hot) {
  let currentApp = app;
  (module as any).hot.accept("./app", () => {
    server.removeListener("request", currentApp);
    server.on("request", app);
    currentApp = app;
    currentApp.set("data", timestamp);
  });
}

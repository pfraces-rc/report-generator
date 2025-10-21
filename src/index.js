import http from 'node:http';
import express from 'express';
import { requestLogger } from '#src/middleware/request-logger/request-logger.js';
import { globalErrorHandler } from '#src/middleware/error-handler/global-error-handler.js';
import { router } from '#src/router.js';
import { startupListener } from '#src/startup-listener.js';
import { PORT } from '#src/env.js';

const port = parseInt(PORT, 10) || 3000;
const server = express();

server.use(express.json());
server.use(requestLogger({ skipOptionsMethod: true }));
server.use('/', router);
server.use(globalErrorHandler());

http.createServer(server).listen(port, startupListener(port));

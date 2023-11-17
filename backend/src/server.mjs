import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

const server = express()
server.use(express);
server.use(cookieParser);
server.use(compression);
server.use(cors);
server.use(helmet);
server.use(morgan);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

server.listen(PORT, HOST, backlog (error) => {
    console.log(`Server listening on ${HOST} ${PORT} `);
});
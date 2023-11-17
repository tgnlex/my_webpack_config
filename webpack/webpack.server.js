const serverConfig = {
    target: 'node',
    entry: './backend/src/server.js'  ||
           './backend/src/server.ts'  || 
           './backend/src/server.mjs' || 
           './backend/src/server.cjs' ||
           './backend/src/server.mts' ||
           './backend/src/server.cts',

}

export default serverConfig;
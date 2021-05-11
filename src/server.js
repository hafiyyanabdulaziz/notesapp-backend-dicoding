import { server as _server } from '@hapi/hapi';


const init = async () => {
    const server = _server({
        port: 5000,
        host: 'localhost',
    });


    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};


init();
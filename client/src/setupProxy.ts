import { createProxyMiddleware } from 'http-proxy-middleware';

const port = 3334;

module.exports = function (app: any) {
    app.use('/auth/**', 
        createProxyMiddleware({ 
            target: `http://localhost:${port}`
        })
    );
};

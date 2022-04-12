const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const express = require("express");

const app = express();

const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: []
});

const router = AdminJSExpress.buildRouter(adminJS)

app.use(adminJS.options.rootPath, router);

app.listen(5000, () => {
    console.log(`AdminJs is runing on http://localhost:${5000}/admin`);
});
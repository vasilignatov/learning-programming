const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const { auth } = require('../middlewares/authMiddleware');

module.exports = (app) => {
    app.use(express.static(path.resolve(__dirname, '../static')));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(auth);
}
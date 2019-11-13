const express = require('express')();
const setup = require('./src/config/config')

setup(express)

express.listen(3000, () => {
    console.log("subiu");
});
require('dotenv').config()

const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');

const PORT = 7777

const { format } = require('date-fns');
const { required } = require('nodemon/lib/config');
const { v4: uuid } = require('uuid');
console.log(uuid())

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))
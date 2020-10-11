const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.addListener('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('Calling \'log\' function from the logger.js');
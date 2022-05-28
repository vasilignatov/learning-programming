const eventBus = require('./eventBus.js');


let unsubscribe = eventBus.subscribe('arewethereyet', (town) => {
    console.log('Yeee we are in ' + town);
});

eventBus.subscribe('customEvent', (...params) => {
    console.log([...params].join(' '));
});

eventBus.publish('arewethereyet', 'Sofiq');
eventBus.publish('customEvent', 'Vasil', 'Nikolai', 'Mitko');

unsubscribe();
eventBus.publish('arewethereyet', 'Ruse');



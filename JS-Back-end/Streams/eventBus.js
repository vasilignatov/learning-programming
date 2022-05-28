const subscribers = {};

function subscribe(evntType, callback) {
    if(!subscribers[evntType]) {
        subscribers[evntType] = [];
    }

    subscribers[evntType].push(callback);

    return function() {
        subscribers[evntType] = subscribers[evntType].filter(f => f != callback);
    }
}

function publish(eventType, ...params) {
    if(!subscribers[eventType]) {
        return;
    }

    subscribers[eventType].forEach(f => f.apply(null, params));
}

const eventBus = {
    subscribe,
    publish
} 

module.exports = eventBus;
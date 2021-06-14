function pow(num, power) {
    return num ** power;
}

const sqr = pow.bind(null, 2);

console.log(sqr(5));


function e(type, ...content) {
    const result = document.createElement(type);

    content.forEach(e => {
        if (typeof e == 'string') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    })

    return result;
}


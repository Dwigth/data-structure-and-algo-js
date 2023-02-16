/**
 * Javascript sigue el patrón de herencia prototípica
 */

function Information(data) {
    console.log(data);
}

const info = new Information({ salute: 'hello world'});

info.constructor({ salute: 'goodbye world'});
Information({ salute: 'function execution'})
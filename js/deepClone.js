function deepClone(object) {
    if (typeof object !== 'object' || object === null) return object;

    let c = object.constructor();
    for (let i in object) {
        c[i] = deepClone(object[i]);
    }

    return c;
}

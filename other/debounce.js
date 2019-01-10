/**
 * Creates a debounced function that delays invoking func 
 * until after wait milliseconds have elapsed 
 * since the last time the debounced function was invoked.
 * @param func (Function): The function to debounce.
 * @param [wait=0] (number): The number of milliseconds to delay.
 * @return (Function): Returns the new debounced function.
 */

const debounce = function(func, wait) {
    return helper(func, wait, true);
}

const helper = function(func, wait, debounce) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;

        const throttler = function() {
            timeout = null;
            func.apply(context, args);
        };

        if (debounce) clearTimeout(timeout);
        if (debounce || !timeout) timeout = setTimeout(throttler, wait);
    }
}

const throttle = function(func, wait) {
    return helper(func, wait, false);
}

export default {debounce, throttle};
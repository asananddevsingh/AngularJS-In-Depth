function add(x, y) {
    function parseArg(n) {
        if (Array.isArray(n)) return add.apply(this, n); // Array is converted into argument list.
        if (typeof n === 'function') return parseArg(n());
        return isNaN(n) ? 0 : parseInt(n);
    }
    return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments, 1));
}

//Should be able to treat non numeric string as zero
function add(x, y) {
    x = isNaN(x) ? 0 : parseInt(x, 10);
    y = isNaN(y) ? 0 : parseInt(y, 10);
    return x + y;
}

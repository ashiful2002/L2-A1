// type FormatValueTypes = {
// }
// : string | number | boolean
function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "boolean") {
        return !value;
    }
    else {
        return value;
    }
}

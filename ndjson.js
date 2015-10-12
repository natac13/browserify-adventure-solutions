export function parse(str) {
    return str.split('\n').map((line) => {
        return JSON.parse(line);
    });
};

export function stringify(arr) {
    return arr.map((line) => {
        return JSON.stringify(line);
    }).join('\n');
}
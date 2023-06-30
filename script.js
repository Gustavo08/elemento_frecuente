/*
    Función para encontrar el elemento más frecuente en un array
*/

function findFrecuent ( array ) {
    return array.reduce( (a, b) => (
        array.filter( i => i === a).length >= array.filter(i => i === b).length ? a : b
    ));
}

let response = findFrecuent(["a", "b", "c", "a", "b", "a"]) // a
console.log("🚀 ~ file: script.js:12 ~ response:", response)

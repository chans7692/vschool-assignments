function stringifyUrl(url, query) {
    // return url + '?color=' + query.color + '&species=' + query.species
    return `${url}?color=${query.color}&species=${query.species}`
}

const url = "http://localhost:8080/monkeys"
const query = {
    color: "black",
    species: "howler"
}

console.log(stringifyUrl(url, query))
// returns "http://localhost:8080/monkeys?color=black&species=howler"

const urlString = stringifyUrl(url, query)

const parseUrl = url => {
    return
}

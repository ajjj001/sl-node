
class GoogleAPI {

    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com/todos'
    }

    async get() {
        const response = await fetch(this.url)
        let data = await response.json()

        return data
    }
}

module.exports = GoogleAPI;
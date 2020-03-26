// async & await

const getTodos = async () => {

    const response = await fetch('todos/momu.json')
    const data = await response.json()
    return data
}

getTodos()
.then(data => console.log('resolved', data))
.catch(err => console.log('rejected', err))

// fetch('todos/momu.json').then(response => {
//     console.log('resolved', response)
//     return response.json()
// }).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log('rejected',  err)
// })

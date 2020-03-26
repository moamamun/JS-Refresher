const getToDos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest() //send rquest from browser

        request.addEventListener('readystatechange', () => {
            //console.log(request, request.readyState)
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText) // js object array
                resolve(data)
            } else if(request.readyState === 4) {
                reject('could not fetch data')
            }
        }) // everytime it has a ready state change. 

        request.open('GET', resource) //setup request

        request.send() // send request 
    })

}

getToDos('todos/momu.json').then(data => {
    console.log('promise 1 resolved:', data)
    return getToDos('todos/nami.json')
}).then(data => {
    console.log('promise 2 resolved:', data)
    return getToDos('todos/shaun.json')
}).then(data => {
    console.log('promise 3 resolved:', data)
}).catch(err => {
    console.log('promise rejected:', err)
})

// promise example

// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         //fetch something
//         //resolve('some data')
//         reject('some err')
//     })
// }

// getSomething().then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })

// getSomething().then(data => {
//  console.log(data)
// }).catch(err => {
//     console.log(err)
// })
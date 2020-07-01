const submitData = (name, email) => {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(resp => resp.json())
    .then(object => {
        document.body.innerHTML = object.id
    })
    .catch(error => {
        document.body.innerHTML = error.message
    })
}


// 

// const submitData = (name, email) => {
//     const headersObj = {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     }
    
//     const bodyObj = {
//         name,
//         email
//     }
    

//     const configObj = {
//         method: "POST",
//         headers: headersObj,
//         body: JSON.stringify(bodyObj)
//     }
    
    
//     return fetch('http://localhost:3000/users', configObj)
//     .then(resp => resp.json())
//     .then(object => {
//         document.body.innerHTML = object.id
//     })
//     .catch(error => {
//         document.body.innerHTML = error.message
//     })
// }



// const submitData = (name, email) => {
//     return fetch('http://localhost:3000/users',{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             name,
//             email
//         })
//     })
//     .then(resp => resp.json())
//     .then(object => {
//         document.body.innerHTML = object.id
//     })
//     .catch(error => {
//         document.body.innerHTML = error.message
//     })
// }

// const submitData = (name, email) => {
//     const methodObj = { method: "POST" }
//     const headersObj = {
//         headers: {
//             "Content-Type": "application/json",
//             "Action": "application/json"
//         }
//     }
//     const bodyObj = {
//         body: JSON.stringify({
//             name,
//             email
//         })
//     }

//     const configObj = {
//         methodObj,
//         headersObj,
//         bodyObj
//     }

//     return fetch(URL, configObj)
//         .then(resp => resp.json())
//         .then(object => {
//             document.body.innerHTML = object.id
//         })
//         .catch(error => {
//             document.body.innerHTML = error.message
//         })
// }


// URL = "http://localhost:3000/users"

// const submitData = (name, email) => {
//     const methodObj = {method: "POST"}
//     const headersObj = {
//         headers: {
//             "Content-Type": "application/json",
//             "Action": "application/json"
//         }
//     }
//     const bodyObj = {
//         body: JSON.stringify({
//             name,
//             email
//         })
//     }

//     const configObj = {
//         methodObj,
//         headersObj,
//         bodyObj
//     }

//     return fetch(URL, configObj)
//     .then(resp => resp.json())
//     .then(object => {
//         document.body.innerHTML = object.id
//     })
//     .catch(error => {
//         document.body.innerHTML = error.message
//     })
// }
// Add your code here

const submitData = (name, email) => {
   return fetch('http://localhost:3000/users', {method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name, email
        })
})
    .then(resp => resp.json())
    .then(resp => {
       document.body.innerHTML = resp.id
    // const body = document.querySelector("body")

    
    // let p = document.createElement("p")
    // body.append(p)
    // p.innerText = resp.id
    })
    .catch(error => {
        document.body.innerHTML = error
    })
    
    


}
// Add your code here



function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: 'Post',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(response => response.json())
    .then(data => {
        document.body.innerHTML = data.id
    })
    .catch(function(error){
        document.body.innerHTML = error
        
    })
    
}

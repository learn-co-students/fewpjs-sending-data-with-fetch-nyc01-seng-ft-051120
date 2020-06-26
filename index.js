// Add your code here
function submitData(name, email){
    let obj={
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify({
            name,
            email
        })
    }
fetch('http://localhost:3000/users', obj)
.then(resp => resp.json())
.then(json=>{
    console.log(json.id)
document.body.innerHTML=json['id']
})
.catch(error =>{
    document.body.innerHTML=error.message
})
}
// submitData('tsering', 'tsering@tserin.com')
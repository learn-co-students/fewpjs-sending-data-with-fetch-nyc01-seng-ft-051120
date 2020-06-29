function submitData(name, email) {

    // Test 1 - Send Data
        // In submitData, write a valid POST request to http://localhost:3000/users using fetch(). This request should include:
            // The destination URL
            // Headers for 'Content-Type' and 'Accept' set to 'application/json'
            // A body with the name and email passed in as arguments to submitData. These should be assigned to name and email keys within an object. This object should then be stringified.

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

    // Test 2 - Handle the Response
        // On a successful POST request, expect the server to respond with a [Response][response] object. Just like we saw earlier in the dog example, the body property of this response will contain the data from the POST request along with a newly assigned id.
        // Use a then() call to access the Response object and use its built in json() method to parse the contents of the body property. Use a second then() to access this newly converted object. From this object, find the new id and append this value to the DOM.
        // Using index.html and the JSON server, if your code is successful, calling submitData in the console should cause an id number to appear on the page.

      .then(function(response) {
        return response.json()
      })
      
      .then(function(object) {
        //   ^object refers to the return value of the first then() --- the object is the response from the server
        document.body.innerHTML = object[ "id" ]
      })
      
    //  Test 3 - Handle Errors
        //  For this final test, after the two then() calls on your fetch() request, add a catch().
        //  When writing the callback function for your catch(), expect to receive an object on error with a property, message, containing info about what went wrong. Append this message to the DOM when catch() is called.

      .catch(function(error) {
        document.body.innerHTML = error.message
      })

    // Test 4 - Return the Fetch Chain: *see 'return' on line 9.

  }


// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
// });
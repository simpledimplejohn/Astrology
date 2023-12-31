// hitting a test api end point with fetch

/* most basic form of fetch, gives a response object, then converts to json
fetch('https://reqres.in/api/users/1')
    .then(res => res.json()) //returns an async response object
    .then(data => console.log(data))
*/    

// same thing as above but with error catching 
/*
fetch('https://reqres.in/api/users/1')
    .then(res => {
        if (res.ok) {
            console.log('SUCCESS')
        } else {
            console.log('Not Successful')
        }
        
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR')) //this error is only for connection issues 
*/

fetch('https://reqres.in/api/users/1', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({  //need this to send a json string up
        name: 'User 1'
    })
})
    .then(res => {
        return res.json()        
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR')) //this error is only for connection issues 

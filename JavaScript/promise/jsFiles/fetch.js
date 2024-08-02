//  Javascript Nuggets

// Fetch API -  Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

const url = 'https://www.course-api.com/react-tours-projects'

// console.log(fetch(url))

// fetch(url)
//   .then((resp) => resp.json())
// .json() function again returns a promise
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

const getTours = async () => {
//   try {
//     const resp = await fetch(url)

//     return resp.json()
//     // console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// console.log(getTours().then())



    try {
        const resp = await fetch(url);
        if(!resp.ok){
            const msg = `There was an error ${resp.status} ${resp.statusText}`
            throw new Error(msg);
        }
    } catch (error) {
        console.log(error)
    }
}

getTours();

// The `catch` block in JavaScript is designed to handle exceptions that are thrown within the corresponding `try` block. However, not all issues are exceptions that can be caught using `try...catch`. 

// In the above code, the `catch` block is designed to catch exceptions thrown during the asynchronous operation, particularly those related to the HTTP request using the `fetch` function. For example, network issues, failed requests, or unexpected responses could lead to exceptions that are caught by the `catch` block.

// However, certain issues, like HTTP response status indicating an unsuccessful request (e.g., 404 Not Found or 500 Internal Server Error), are not necessarily exceptions in the JavaScript sense. The `fetch` function considers a broader range of HTTP status codes as successful, such as 404 or 500, so it's up to the code to handle these cases explicitly. That's why the code checks `if (!resp.ok)` and throws a custom `Error` in those cases.

// In summary, the `try...catch` block is useful for catching exceptions in the JavaScript runtime, while specific logic within the `try` block, like checking HTTP response status, allows you to handle other types of issues that might not be exceptions but are still important for your application logic. The combination of these approaches provides a comprehensive error-handling strategy for asynchronous operations.
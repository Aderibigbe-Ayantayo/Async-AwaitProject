/* Task 01:

Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs. 
*/
async function iterateWithAsyncAwait(arr) {
    for (const value of arr) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
   iterateWithAsyncAwait([1, 2, 3, 4, 5, 'Happy', 'Birthday', 'Clementina', 'Ayantayo']);

/*   Task 02:

   Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.   
*/
 async function awaitCall() {
    try {
      const response = await fetch('(link unavailable)');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
 // awaitCall();
 
/* Task 03:

Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.
*/
 async function awaitCall() {
    try {
      const response = await fetch('(link unavailable)');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      console.log('Please try again later.');
    }
  }
 /* Chaining Async/Await: Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.
 */
  async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
  }
  
  async function asyncFunction1() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("asyncFunction1 executed");
        resolve();
      }, 1000);
    });
  }
  
  async function asyncFunction2() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("asyncFunction2 executed");
        resolve();
      }, 1000);
    });
  }
  
  async function asyncFunction3() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("asyncFunction3 executed");
        resolve();
      }, 1000);
    });
  }
  chainedAsyncFunctions();
  

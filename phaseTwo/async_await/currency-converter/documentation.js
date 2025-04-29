// Challenge 1 04-28-2025
//  POSITIONING ASYNC FETCH 
  // putting event listeners inside the fetch, would now just fetch the default value of the select element instead of whatever the user chooses
  // how do I acknowledge the change to original and foreign currency select and amount input  without making too many fetches inside event listenerrs? Does that mean I have to write event listeners before doing one fetch only?

// solution: for every change in the currencies, store the values in a variable. only create a fetch function when the user
// enters an amount in the input box and create a fetch with `` and variables. 

// solution #2: created a button for one event listener and defined values for currencies inside and using api to do the conversions instead of creating a function for it 

// final solution 
// create a button to tie the event listener 'CLICK'
// defined variables inside event listener before fetching API
// changed API to string literal
// use API to convert , no need to create a function
// show results dynamically
// created if statement to make sure inner html is cleared when user converts again
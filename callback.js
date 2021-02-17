function executeCallback( callback ) {
  callback();
}

// Print Hello
/*executeCallback(function () {
    console.log('Hello');
});
*/

executeCallback(() => console.log('Hello'));

// Print Goodbye
executeCallback(function () {
    console.log('Goodbye');
});

// Need to import React in each component
import React from 'react';

// This is our Component
// Create a class - use capital first letter and it 'extends' the Component method of React
class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   console.log('Gonna create a component');
  //   //Binds this so we can call this in goToStore
  //   this.goToStore = this.goToStore.bind(this);
  // }

  handleClick() {
    alert('Hey');
  }

  // Create a reference to the myInput field
  myInput = React.createRef();

  // This syntax binds the method and gives us access to 'this' which is the StorePicker
  // This is better than using the constructor
  goToStore = event => {
    event.preventDefault();
    console.log('go to store');
    // Get the text from input
    console.log(this.myInput.current.value);
    const storeName = this.myInput.current.value;

    // Go to new page
    this.props.history.push(`/store/${storeName}`);
  };

  // Calls render
  render() {
    // JSX uses className not class
    return (
      // Put stuff in () so we can put on separate line
      // And go only return one element, so if have multiple elements you must wrap in a div or React.Fragment tag or empty <>
      //! Looks like normal commenting is working
      <>
        {/* Curly brackets in jsx means this is javascript */}
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a Store</h2>
          {/* Don't put () after handleClick so it doesn't run the function on load  */}
          <button onClick={this.handleClick}>Click Me</button>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
          />
          <button type="submit">Visit Store</button>
        </form>
      </>
    );
  }
}

// Export so it is available in other files
export default StorePicker;

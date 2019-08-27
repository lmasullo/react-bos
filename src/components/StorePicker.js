// Need to import React in each component
import React from 'react';

// This is our Component
// Create a class - use capital first letter and it 'extends' the Component method of React
class StorePicker extends React.Component {
  // Calls render
  render() {
    // JSX uses className not class
    return (
      // Put stuff in () so we can put on separate line
      // And go only return one element, so if have multiple elements you must wrap in a div or React.Fragment tag or empty <>
      //! Looks like normal commenting is working
      <>
        <p>Test</p>
        {/* Curly brackets in jsx means this is javascript */}
        <form className="store-selector">
          <h2>Please Enter a Store</h2>
          <input type="text" required placeholder="Store Name" />
          <button type="submit">Visit Store</button>
        </form>
      </>
    );
  }
}

// Export so it is available in other files
export default StorePicker;

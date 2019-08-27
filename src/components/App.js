import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        {/* These props get passed to the header component and displayed */}
        {/* App.js is the parent, Header is a child */}
        {/* index.js renders app to the the main div on index.html */}
        <Header tagline="Fresh Seafood Market" />
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;

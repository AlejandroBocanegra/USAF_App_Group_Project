import React, { Fragment } from 'react';
import './App.css';


//Components

import AddNewAmn from "./Components/AddNewAmn";
import ViewAmn from "./Components/viewAmn";

function App() {
  return (
    <Fragment>
      <div>
        <AddNewAmn />
        <ViewAmn />
      </div>
    </Fragment>
  );
}

export default App;

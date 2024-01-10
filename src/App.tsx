import React from 'react';
import LandingPage2 from './containers/landingpage2';

class App extends React.Component {
  render(){
    return (
      /* @ts-expect-error Server Component */
      <LandingPage2 />
    );
  }
}

export default App;

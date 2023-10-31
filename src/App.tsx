import React from 'react';
import ComingSoon from './containers/comingsoon';

class App extends React.Component {
  render(){
    return (
      /* @ts-expect-error Server Component */
      <ComingSoon />
    );
  }
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignIn } from './';

function Home() {
  return <div>Home</div>;
}

function Some() {
  return <div>Some</div>;
}
function App() {
  return (
    <div>
      {/* Switch only renders one components depending on the url , that is why we
      specify "exact" with path */}
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/some" component={Some} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/navbar';
import Hotels from './components/hotelList';
import HotelDetail from './components/HotelDetail';
function App() {
  return (
    <Provider store= {store}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Hotels />
          </Route>
          <Route path="/detail" component={HotelDetail} />
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}
export default App;



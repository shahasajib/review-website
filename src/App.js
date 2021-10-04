import './App.css';
// react route
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Service from './Component/Service/Service';
import Teachers from './Component/Teachers/Teachers';
import About from './Component/About/About';
import Error from './Component/NotFound/Error';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/teachers">
            <Teachers></Teachers>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

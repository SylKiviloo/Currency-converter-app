import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

/*const Testing = () => {
  return <h2>Testing</h2>;
}

const App = () => {
  return (
    <Testing />
  )
}*/

const Home = () => {
  return <h2>Home</h2>;
}

const About = () => {
  return <h2>About</h2>;
}

const Contact = () => {
  return <h2>Contact</h2>;
}

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}


const App = () => {
  return (
    <Router>
      <header>
        <div className="container-fluid bg-success text-white">
          <div className="row justify-content-center mb-4">

              <img className="img-fluid col-2 align-middle" id="logo"/>
              {/*<p className="col-4 align-middle">Image by Tanrica from Pixabay</p>*/}
            
              <h1 className="col-4 align-middle">Divisa Currency Converter</h1>
            
          </div>
        </div>
      </header>

      <main>
        {/*<div className="bg-container border border-dark rounded mb-4">
          <div className="row">
            <div className="col-sm border">
              One of three columns
            </div>
            <div className="col-sm border">
              One of three columns
            </div>
            <div className="col-sm border">
              One of three columns
            </div>
          </div>
        </div>*/}

        <div className="bg-container container border border-dark rounded mb-4">
          <div id="currency-pair" className="row">

            <div className="box col-sm">
              <select>
                <option>CDN</option>
                <option>USD</option>
                <option>MXN</option>
              </select>
              <div class="input">
                <img class="currency-icon"/>
                <input placeholder="1"/>
              </div>
            </div>

            <div className="col-sm" id="center">
              <img id="reverse-icon" />
              <img id="equals" />
            </div>

            <div className="box col-sm">
              <select>
                <option>USD</option>
                <option>CDN</option>
                <option>AUD</option>
              </select>
              <div class="input">
                <img class="currency-icon"/>
                <input placeholder="1" />
              </div>
            </div>

          </div>
          <p>Image by Uwe Baumann from Pixabay</p>
        </div>
      </main>

      <footer className="border bg-dark text-white text-center pt-3 pb-2">
        <p>Copyright &copy; Skiviloo 2024</p>
      </footer>




        {/*<Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />

        <hr />
        <p>Using Switch</p>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
          <Route component={NotFound} />
        </Switch>*/}

      
    </Router>
  );
}

export default App;
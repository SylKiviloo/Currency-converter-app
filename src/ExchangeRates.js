import React from 'react'
import './index.css'
//import './App.css'

import reverse from './images/reverse-icon.png';
import coins from './images/coins.jpg';
import equals from './images/equals.png';
import dollar from './images/dollar.png';

{/*const ExchangeRates = () => { */}

class ExchangeRates extends React.Component {

//all the class component definition stuff

//constructor() {
  //super();
  //this.state = {
  //baseCurrency:'USD',
  //convertToCurrency:'AUD',
  //baseAmount: 1,
  //rates: [],
  //currencies: [],
  //historicData: [],
  //pastDates: [],
  //};



  
  render () {

  //all the const variables for rendering




    return (
   
      <main>
        <div className="bgr-box container d-flex flex-column justify-content-sm-start border border-dark rounded mb-4" 
          style={{ backgroundImage: `url(${coins})` }}>
         
          <div className="row" id="top-row">

            <div className="col-sm-5 d-flex flex-column justify-content-sm-center align-items-sm-center">
              <p className="bg-white px-2 border border-dark">From:</p>
              <select>
                <option>CDN</option>
                <option>USD</option>
                <option>MXN</option>
              </select>
            </div>
          
            <div className="col-sm-2 d-flex justify-content-sm-center align-items-sm-center">
              <img src={reverse} className="img-fluid" id="reverse-icon" />
            </div>

            <div className="col-sm-5 d-flex flex-column justify-content-center align-items-sm-center">
              <p className="bg-white px-2 border border-dark">To:</p>
              <select>
                <option>USD</option>
                <option>CDN</option>
                <option>AUD</option> 
              </select>
            </div>

          </div>
          
          <div className="row"> 

            <div className="col-sm-5 d-flex justify-content-center align-items-sm-center gap-2">
              <img src={dollar} className="currency-icon img-fluid" />
              <input placeholder="1"/>
            </div>

            <div className="col-sm-2 d-flex justify-content-center align-items-sm-center">
              <img src={equals} alt="equals sign" />
            </div>

            <div className="col-sm-5 d-flex justify-content-center align-items-sm-center gap-2">
              <img src={dollar} className="currency-icon img-fluid"/>
              <input placeholder="1"/>
            </div>
  
          </div>  

        </div>
      </main> 

    )
  }
}; 

export default ExchangeRates;
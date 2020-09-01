import React from 'react';
import './App.css';
import { FiArrowUp, FiChevronDown, FiBell } from "react-icons/fi"
import Chart from './components/Chart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        🇨🇦 <text className="App-header-part1">COVID-19</text> 😷 <text className="App-header-part2">LIVE</text>
      </header>
      <body className="App-body">
        <div className="App-updates">
          <div className="App-updates-notification-icon">
            <FiBell/>
          </div>
          <div className="App-updates-chevron-icon">
            <FiChevronDown/>
          </div>
        </div>
        <div className="App-quantity">
          <div className="App-quantity-infected">
            <div className="App-quantity-total-cases">
              <text className="App-quantity-total-cases-header">
                Total Confirmed Cases
              </text>
              <div className="App-quantity-total-cases-information">
                <text className="App-quantity-total-cases-information-count">
                  128,948
                </text>
                <div className="App-quantity-total-cases-information-increase">
                  <div className="App-quantity-total-cases-information-increase-icon">
                    <FiArrowUp/>
                  </div>
                  <div className="App-quantity-total-cases-information-increase-count">
                    498
                  </div>
                </div>
              </div>
            </div>
            <div className="App-quantity-total-active">
              <text className="App-quantity-total-active-header">
                Total Active Cases 
              </text>
              <div className="App-quantity-total-active-information">
                <text className="App-quantity-total-active-information-count">
                  5,595
                </text>
                <div className="App-quantity-total-active-information-increase">
                  <div className="App-quantity-total-active-information-increase-icon">
                    <FiArrowUp/>
                  </div>
                  <div className="App-quantity-total-active-information-increase-count">
                    498
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="App-quantity-results">
            <div className="App-quantity-results-recovered">
              <text className="App-quantity-total-recovered-header">
                Total Recovered Cases
              </text>
              <div className="App-quantity-total-recovered-information">
                <text className="App-quantity-total-recovered-information-count">
                  114,227
                </text>
                <div className="App-quantity-total-recovered-information-increase">
                  <div className="App-quantity-total-recovered-information-increase-icon">
                    <FiArrowUp/>
                  </div>
                  <div className="App-quantity-total-recovered-information-increase-count">
                    497
                  </div>
                </div>
              </div>
            </div>
            <div className="App-quantity-results-deaths">
              <text className="App-quantity-total-deaths-header">
                Total Deaths
              </text>
              <div className="App-quantity-total-deaths-information">
                <text className="App-quantity-total-deaths-information-count">
                  9,126 
                </text>
                <div className="App-quantity-total-deaths-information-increase">
                  <div className="App-quantity-total-deaths-information-increase-icon">
                    <FiArrowUp/>
                  </div>
                  <div className="App-quantity-total-deaths-information-increase-count">
                    9
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="App-chart">
          <Chart/>
        </div>
        <div className="App-vaccine">

        </div>
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;

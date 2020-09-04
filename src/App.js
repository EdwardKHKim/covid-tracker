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
                  129,924
                </text>
                <div className="App-quantity-total-cases-information-increase">
                  <div className="App-quantity-total-cases-information-increase-icon">
                    <FiArrowUp/>
                  </div>
                  <div className="App-quantity-total-cases-information-increase-count">
                    504
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
                  5,494
                </text>
                <div className="App-quantity-total-active-information-increase">
                  <div className="App-quantity-total-active-information-increase-icon">
                    <FiArrowUp/>
                  </div>
                  <div className="App-quantity-total-active-information-increase-count">
                    52
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
                  115,289
                </text>
                <div className="App-quantity-total-recovered-information-increase">
                  <div className="App-quantity-total-recovered-information-increase-icon">
                    <FiArrowUp/>
                  </div>
                  <div className="App-quantity-total-recovered-information-increase-count">
                    443
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
                  9,135
                </text>
                <div className="App-quantity-total-deaths-information-increase">
                  <div className="App-quantity-total-deaths-information-increase-icon">
                    <FiArrowUp/>
                  </div>
                  <div className="App-quantity-total-deaths-information-increase-count">
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="App-chart">
          <Chart/>
        </div>
        <div className="App-province">
          <div className="App-province-header">
            <text className="App-province-header-names">Province/Territory</text>
            <text className="App-province-header-cases">Confirmed Cases</text>
          </div>
          <div className="App-province-british-columbia">
            <text className="text-british-columbia">
              BC
            </text>
            <text className="text-british-columbia-divider">
              |
            </text>
            <div className="stats-british-columbia">
              <text className="stats-british-columbia-number">
                5,952
              </text>
              <div className="stats-british-columbia-figure">
                <div className="stats-british-columbia-figure-increase-icon">
                  <FiArrowUp/>
                </div>
                <div className="stats-british-columbia-figure-increase-count">
                    104
                </div>
              </div>
            </div>
          </div>
          <div className="App-province-alberta">
            <text className="text-alberta">
              AB
            </text>
            <text className="text-alberta-divider">
              |
            </text>
            <div className="stats-alberta">
              <text className="stats-alberta-number">
                14,180
              </text>
              <div className="stats-alberta-figure">
                <div className="stats-alberta-figure-increase-icon">
                  <FiArrowUp/>
                </div>
                <div className="stats-alberta-figure-increase-count">
                    114
                </div>
              </div>
            </div>
          </div>
          <div className="App-province-saskatchewan">
            <text className="text-saskatchewan">
              SK
            </text>
            <text className="text-saskatchewan-divider">
              |
            </text>
            <div className="stats-saskatchewan">
              <text className="stats-saskatchewan-number">
                1,624
              </text>
              <div className="stats-saskatchewan-figure">
                <div className="stats-saskatchewan-figure-increase-icon">
                  <FiArrowUp/>
                </div>
                <div className="stats-saskatchewan-figure-increase-count">
                    2
                </div>
              </div>
            </div>
          </div>
          <div className="App-province-manitoba">
            <text className="text-manitoba">
              MB
            </text>
            <text className="text-manitoba-divider">
              |
            </text>
            <div className="stats-manitoba">
              <text className="stats-manitoba-number">
                1,245
              </text>
              <div className="stats-manitoba-figure">
                <div className="stats-manitoba-figure-increase-icon">
                  <FiArrowUp/>
                </div>
                <div className="stats-manitoba-figure-increase-count">
                    13
                </div>
              </div>
            </div>
          </div>
          <div className="App-province-ontario">
            <text className="text-ontario">
              ON
            </text>
            <text className="text-ontario-divider">
              |
            </text>
            <div className="stats-ontario">
              <text className="stats-ontario-number">
                42,554
              </text>
              <div className="stats-ontario-figure">
                <div className="stats-ontario-figure-increase-icon">
                  <FiArrowUp/>
                </div>
                <div className="stats-ontario-figure-increase-count">
                    133
                </div>
              </div>
            </div>
          </div>
          <div className="App-province-quebec">
            <text className="text-quebec">
              QC
            </text>
            <text className="text-quebec-divider">
              |
            </text>
            <div className="stats-quebec">
              <text className="stats-quebec-number">
                62,746
              </text>
              <div className="stats-quebec-figure">
                <div className="stats-quebec-figure-increase-icon">
                  <FiArrowUp/>
                </div>
                <div className="stats-quebec-figure-increase-count">
                    132
                </div>
              </div>
            </div>
          </div>
          <div className="App-province-new-brunswick">
            <text className="text-new-brunswick">
              NB
            </text>
            <text className="text-new-brunswick-divider">
              |
            </text>
            <div className="stats-new-brunswick">
              <text className="stats-new-brunswick-number">
                192
              </text>
              <div className="stats-new-brunswick-figure">
                <div className="stats-new-brunswick-figure-increase-icon">
                  <FiArrowUp/>
                </div>
                <div className="stats-new-brunswick-figure-increase-count">
                    1
                </div>
              </div>
            </div>
          </div>
          <div className="App-province-nova-scotia">
            <text className="text-nova-scotia">
              NS
            </text>
            <text className="text-nova-scotia-divider">
              |
            </text>
            <div className="stats-nova-scotia">
              <text className="stats-nova-scotia-number">
                1085
              </text>
              <div className="stats-nova-scotia-figure">
                <div className="stats-nova-scotia-figure-increase-icon">
                  <FiArrowUp/>
                </div>
                <div className="stats-nova-scotia-figure-increase-count">
                    0
                </div>
              </div>
            </div>
          </div>
          <div className="App-province-prince-edward-island">
            <text className="text-prince-edward-island">
              PE
            </text>
            <text className="text-prince-edward-island-divider">
              |
            </text>
            <div className="stats-prince-edward-island">
              <text className="stats-prince-edward-island-number">
                44
              </text>
              <div className="stats-prince-edward-island-figure">
                <div className="stats-prince-edward-island-figure-increase-icon">
                  <FiArrowUp/>
                </div>
                <div className="stats-prince-edward-island-figure-increase-count">
                    0
                </div>
              </div>
            </div>
          </div>
          <div className="App-province-new-foundland-and-labrador">
            <text className="text-new-foundland-and-labrador">
              NL
            </text>
            <text className="text-new-foundland-and-labrador-divider">
              |
            </text>
            <div className="stats-new-foundland-and-labrador">
              <text className="stats-new-foundland-and-labrador-number">
                269
              </text>
              <div className="stats-new-foundland-and-labrador-figure">
                <div className="stats-new-foundland-and-labrador-figure-increase-icon">
                  <FiArrowUp/>
                </div>
                <div className="stats-new-foundland-and-labrador-figure-increase-count">
                    0
                </div>
              </div>
            </div>
          </div>
          <div className="App-province-yukon">
            <text className="text-yukon">
              YT
            </text>
            <text className="text-yukon-divider">
              |
            </text>
            <div className="stats-yukon">
              <text className="stats-yukon-number">
                15
              </text>
              <div className="stats-yukon-figure">
                <div className="stats-yukon-figure-increase-icon">
                  <FiArrowUp/>
                </div>
                <div className="stats-yukon-figure-increase-count">
                    0
                </div>
              </div>
            </div>
          </div>
          <div className="App-province-northwest-territories">
            <text className="text-northwest-territories">
              NT
            </text>
            <text className="text-northwest-territories-divider">
              |
            </text>
            <div className="stats-northwest-territories">
              <text className="stats-northwest-territories-number">
                5
              </text>
              <div className="stats-northwest-territories-figure">
                <div className="stats-northwest-territories-figure-increase-icon">
                  <FiArrowUp/>
                </div>
                <div className="stats-northwest-territories-figure-increase-count">
                    0
                </div>
              </div>
            </div>
          </div>
          <div className="App-province-nunavut">
            <text className="text-nunavut">
              NU
            </text>
            <text className="text-nunavut-divider">
              |
            </text>
            <div className="stats-nunavut">
              <text className="stats-nunavut-number">
                0
              </text>
              <div className="stats-nunavut-figure">
                <div className="stats-nunavut-figure-increase-icon">
                  <FiArrowUp/>
                </div>
                <div className="stats-nunavut-figure-increase-count">
                    0
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      <footer className="App-footer">
        <text className="App-description">
          The data shown on this website is from https://www.theglobeandmail.com/canada/article-coronavirus-cases-canada-world-map-explainer/ 
          as of 2020/09/02. <br /> <br /> Data presented in this webpage may not be accurate. <br /> <br /> The webpage and its data is not maintained as of 2020/09/02
          <br /> <br /> Using/sharing any information from this webpage is at your own expense and you are soley liable, the author/developer of this webpage will 
          take no responsibility. <br /> <br /> Hopefully, this Covid-19 🦠 ends soon. 
        </text>
      </footer>
    </div>
  );
}

export default App;

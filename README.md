This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Covid-tracker
This is a webpage that provides Covid-19 information for Canada and each province. The demo for this webpage can be found https://covid-19-live-canada.herokuapp.com/. 

## Tech Stack
- React
- CSS/HTML/JavaScript
- Chart JS for line graph. 

## Installation
1. Install Homebrew (Skip this step if you rater download Node.js)
```
mkdir homebrew && curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C homebrew
```
2. Install Node.js and npm (from terminal)
```
brew update 
brew install node
```
3. Or install Node.js (download)
[Node.js](https://nodejs.org/en/download/)

4. Clone this repository and go to its root folder. 
```
mkdir react-covid
cd react-covid
git clone https://github.com/EdwardKHKim/covid-tracker.git
```
5. Install the dependencies (in root directory)
```
npm i chartjs-node
npm i react-icons
```

## Data
Canada does not have a data api. Therefore, data had to be manually inputed using Globe and Mail's data. 

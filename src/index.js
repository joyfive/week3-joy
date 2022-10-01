import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App () {
  const [index, setIndex] = React.useState("xx")
  const onSelect = (event) => {
    setIndex(event.target.value)
  }
      return (
          <div>
              <h1>Super Converter</h1>
              <select value={index} onChange={onSelect}>
                <option value="xx">Selcet your units</option>
                <option value="0">Minutes & Hours</option>
                <option value="1">Km & Miles</option>
              </select>
              {index === "xx" ? <h3>Please select your units 👆</h3> : null}
              {index === "0" ? <MinutesToHours /> : null}
              {index === "1" ? <KmToMiles /> : null}
          </div>
      );
  
}
function KmToMiles() {
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);
  const onChange = (event) => {
      setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onInvert = () => {
      reset();
      setInverted((current) => !current);
  }
  return (
  <div>
  <h3>Killometers to Miles Converter</h3>
  <div>
  <label htmlFor="km">KM</label>
  <input 
      value={inverted ? amount * 1.60934 : amount}
      id="km"
      placeholer="KM"
      type="numer"
      disabled={inverted}
      onChange={onChange}
      />
  </div>
  <div>
      <label htmlFor="mile">Miles</label>
      <input 
      value={inverted ? amount : amount * 0.621371}
      id="mile"
      placeholer="Mile"
      type="number"
      disabled={!inverted}
      onChange={onChange}
      />
  </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
  </div>
  );
}

function MinutesToHours() {
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);
  const onChange = (event) => {
      setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onInvert = () => {
      reset();
      setInverted((current) => !current);
  }
  return (
  <div>
  <h3>Minutes to Housrs Converter</h3>
  <div>
  <label htmlFor="minutes">Minutes</label>
  <input 
      value={inverted ? amount * 60 : amount}
      id="minutes"
      placeholer="Minutes"
      type="number"
      disabled={inverted}
      onChange={onChange}
      />
  </div>
  <div>
      <label htmlFor="hours">Hours</label>
      <input 
      value={inverted ? amount : Math.round(amount / 60)}
      id="hours"
      placeholer="Hours"
      type="number"
      disabled={!inverted}
      onChange={onChange}
      />
  </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
  </div>
  );
}
// const root = document.getElementById("root");
// ReactDOM.render(<App />, root);

export default App;
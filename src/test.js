// // import { render } from '@testing-library/react';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './test.css';

// function App () {
//     MinutesToHours(); 
//         return (
//             <div>
//                 <h1>Super Converter</h1>
//                 <MinutesToHours />
//             </div>
//         );
    
// }

// function MinutesToHours() {
//     const [amount, setAmount] = React.useState(0);
//     const [inverted, setInverted] = React.useState(false);
//     const onChange = (event) => {
//         setAmount(event.target.value);
//     }
//     const reset = () => setAmount(0);
//     const onInvert = () => {
//         reset();
//         setInverted((current) => !current);
//     }
//     return (
//     <div>
//     <h3>Minutes to Housrs Converter</h3>
//     <div>
//     <label htmlFor="minutes">Minutes</label>
//     <input 
//         value={inverted ? amount : Math.round(amount * 60)}
//         id="minutes"
//         placeholer="Minutes"
//         type="number"
//         disabled={!inverted}
//         onChange={onChange}
//         />
//     </div>
//     <div>
//         <label htmlFor="hours">Hours</label>
//         <input 
//         value={inverted ? amount : Math.round(amount / 60)}
//         id="hours"
//         placeholer="Hours"
//         type="number"
//         disabled={!inverted}
//         onChange={onChange}
//         />
//     </div>
//         <button onClick={reset}>Reset</button>
//         <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
//     </div>
//     );
// }
// const root = document.getElementById("root");
// ReactDOM.render(<App />, root);

// export default App;
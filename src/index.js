import App from 'components/App/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

// 進入點
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function tick() {
    root.render(<App />);

}

// setInterval(tick, 1000);
import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Doughnut data={{
          datasets:
            [{
              backgroundColor: ["#f00", "#0f0"],
              data: [1, 2, 3]
            }
            ],
          labels: ["foo", "bar"]
        }}
          options={{
            elements: {

              //@ts-ignore
              center: {
                text: "hello",
                color: '#ffffff',
                minFontSize: 20 // Default is 20 (in px), set to false and text will not wrap.
              }
            },

          }}
        />
      </header>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(Filler);

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [chart, setChart] = useState({});
  var baseUrl = 'https://api.coinranking.com/v2/coins/?limit=12';
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  var apiKey = 'coinrankingf94be80616bac2ca8911497c5f9d48806688d0e4788432e4';

  useEffect(() => {
    const fetchCoins = async () => {
      await fetch(`${proxyUrl}${baseUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': `${apiKey}`,
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              console.log(json.data);
              setChart(json.data);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCoins();
  }, [baseUrl, proxyUrl, apiKey]);

  console.log('chart', chart);
  // type chart = {
  //   coins: {};
  // };
  const data = {
    labels: chart?.coins?.map((x) => x.name),
    // labels: ['Janurary', 'Feburary', 'March', 'June', 'May', 'July'],
    datasets: [
      {
        label: '',
        data: chart?.coins?.map((x) => x.price),
        // data: [65, 59, 80, 81, 56, 55, 40],
        borderWidth: [2, 1],
        fill: true,
        tension: 0.3,
        borderColor: 'rgb(75, 192, 192)',
        background: 'rgba(0, 127, 130, 0.2)',
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        display: true,
        grid: {
          borderDash: [5, 5],
          drawBorder: false,
        },
      },
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <Line data={data} height={300} options={options} />
    </>
  );
};

export default LineChart;

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';

function Graph(props) {
  const [data, setData] = useState({ labels: ['', '', '', ''] });
  const [options, setOptions] = useState({});

  useEffect(() => {
    setData({
      labels: ['', '', '', ''],
      datasets: [{
        label: '',
        data: props.data
      }]
    })
  }, [props.data]);

  useEffect(() => {
    setOptions(
      {
        plugins: {
          legend: {
            display: false,
            title: {
              display: false
            },
            labels: {
              display: false
            }
          },
        }
      }
    );
  }, []);

  if (!data.datasets) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <>
      <h1 className="text-base text-gray-500">Temperature</h1>
      <div className="flex justify-center w-full">
        <Line className="w-32" data={data} options={options} />
      </div>
    </>
  );
}

export default Graph;
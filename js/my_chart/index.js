import Chart from 'chart.js/auto';

export const lineChart = (ctx, labels, datapoints1, datapoints2) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: '最高溫度',
        data: datapoints1,
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
      },
      {
        label: '最低溫度',
        data: datapoints2,
        borderColor: 'rgb(54, 162, 235)',
        fill: false,
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: '臺北市未來1週逐12小時天氣預報',
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: '溫度(攝氏)',
          },
          suggestedMin: 0,
          suggestedMax: 40,
        },
      },
    },
  };

  return new Chart(ctx, config);
};

export const barChart = (ctx, labels, datapoints) => {};

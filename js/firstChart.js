      const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
      ];

      const data = {
        labels: labels,
        datasets: [{
          label: 'Estadisticas',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      };

      const config = {
        type: 'line',
        data: data,
        options: {}
      };


  const myChart = new Chart(
    document.getElementById('myfirstChart'),
    config
  );


$(function () {
    //-------------
    //- DONUT CHART -
    //-------------
    // Get context with jQuery - using jQuery's .get() method.
    var donutChartCanvas = $('#donutChart').get(0).getContext('2d')
    var donutChartCanvas2 = $('#donutChart2').get(0).getContext('2d')
    var donutData        = {
      labels: [
          'Bangkalan',
          'Sampang',
          'Pamekasan',
          'Sumenep',
      ],
      datasets: [
        {
          data: [400,200,400,200],
          backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef'],
        }
      ]
    }
    var donutData2        = {
      labels: [
          'gratis',
          '1000',
          '5000',
          '9000',
          '10000',
          '15000',
          '25000',
      ],
      datasets: [
        {
          data: [200,100,300,100,100,300,100],
          backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef','#88e5ef','#ffa3ef','#f4i8ef'],
        }
      ]
    }
    var donutOptions     = {
      maintainAspectRatio : false,
      responsive : true,
    }
    var donutOptions2     = {
      maintainAspectRatio : false,
      responsive : true,
    }
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    new Chart(donutChartCanvas, {
      type: 'doughnut',
      data: donutData,
      options: donutOptions
    })
    new Chart(donutChartCanvas2, {
      type: 'doughnut',
      data: donutData2,
      options: donutOptions2
    })
  })
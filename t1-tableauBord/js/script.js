// in this script i used Moriss js

// the chart bar
Morris.Bar({
    element: 'myChart1',  // ID of the target element
    data: [
        { label: '1', value: 30 },
        { label: '2', value: 45 },
        { label: '3', value: 25 },
        { label: '4', value: 25 },
    ],                      // Data
    xkey: 'label',          // X-axis
    ykeys: ['value'],       // Y-axis
    labels: ['Value'],      // Labels for Y-axis
    barColors: ['#3498db'], // bar colors
    barSize: [10],           // bar width
    fontSize: [10]
});


// the chart line
new Morris.Line({
    element: 'myChart2',
    data: [
      { year: '2020', value: 2502000 },
      { year: '2021', value: 2056000 },
      { year: '2022', value: 2007000 },
      { year: '2023', value: 1958000 },
      { year: '2024', value: 1824000 }
    ],
    xkey: 'year',
    ykeys: ['value'],
    labels: ['Value'],
});

// the chart have 3 bar 
new Morris.Bar({
    element: 'myChart3',
    data: [
        { xkey: '2023-01', value1: 30, value2: 25.4, value3: 40 },
        { xkey: '2023-02', value1: 10, value2: 16, value3: 28 },
        { xkey: '2023-03', value1: 34, value2: 23, value3: 18 },
        { xkey: '2023-04', value1: 30, value2: 33, value3: 22 },
        { xkey: '2023-05', value1: 10, value2: 33, value3: 22 },
    ],
    xkey: 'xkey',
    ykeys: ['value1', 'value2', 'value3'],
    labels: ['Series A', 'Series B', 'Series C'],
    barColors: ['#007bff', '#ffe407', '#cd3948'],
    barSize: [5]
});

Morris.Donut({
    element: 'myChart4',
    data: [ 
        { label: 'Server A', value: 30 },
        { label: 'Server B', value: 50 },
        { label: 'Server C', value: 20 }
    ],
    colors: ['#5f8dbf', '#fff200', '#119f2b'],
    formatter: function (y) { return y + "%"; },
});
  
Morris.Donut({
    element: 'myChart5',
    data: [
        { label: 'Data', value: 80 },
        { label: 'Empty Space', value: 20 }
    ],
    colors: ['#3498db', '#f0f0f8', '#959799'],
    lineWidth: [8],
    goalLineColors: ['#0b62a4'],
    formatter: function (y) { return y +"%"; }
});

// the chart line
new Morris.Line({
    element: 'myChart6',
    data: [
        { x: 1, y1: 5, y2: 10, y3: 0 },
        { x: 2, y1: 22, y2: 18, y3: 10 },
        { x: 3, y1: 24, y2: 9, y3: 18 },
        { x: 4, y1: 20, y2: 5, y3: 13 },
        { x: 5, y1: 24, y2: 11, y3: 16 },
    ],
    xkey: 'x',
    ykeys: ['y1', 'y2', 'y3'],
    labels: ['Line 1', 'Line 2', 'Line 3'],
    lineColors: ['#959799', '#3498db', '#119f2b'],
    ymax: 40
});


Morris.Bar({
    element: 'myChart7',
    data: [
        { label: '1', value: 30000 },
        { label: '2', value: 45000 },
        { label: '3', value: 25000 },
        { label: '4', value: 18450 },
    ],
    xkey: 'label',
    ykeys: ['value'],
    labels: ['Sales'],
    preUnits: '$',
    barSize: 10,
    /* xLabelAngle: 90, */
});
/* $('#myChart7').css({'transform': 'rotate(90deg)'}); */


new Morris.Line({
  element: 'myChart8',
  data: [
    { label: '1', value: 3256000 },
    { label: '2', value: 2141000 },
    { label: '3', value: 2848000 },
    { label: '4', value: 4089000 },
    { label: '5', value: 3404000 }
  ],
  xkey: 'label',
  ykeys: ['value'],
  labels: ['Value'],
  barColors: ['#3498db'],
  preUnits: 'KJ',
  fontSize: [9]
});


Morris.Donut({
  element: 'myChart9',  // ID of the container element
  data: [
    { label: 'Category 1', value: 30 },
    { label: 'Category 2', value: 45 },
    { label: 'Category 3', value: 25 }
  ],
  colors: ['#3498db', '#2ecc71', '#e74c3c'],
  formatter: function (y, data) { return y + '%' },
  resize: true,
  formatter: function (y, data) { return y + '%' },
  resize: true, 
  donutWidth: 0.6
});





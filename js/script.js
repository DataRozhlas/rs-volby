import "./byeie"; // loučíme se s IE
import { data } from "./stats";
import { qu } from "./qu";
import { ans } from "./ans"

const colors = ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a']

function drawChart(q, divid) {
  let qans = [ // univerzalni 5b skala
    'Rozhodně ano',
    'Spíše ano',
    'Spíše ne',
    'Rozhodně ne',
    'Nevím',
  ]

  if (q in ans) { // pokud mame jinou skalu nez 5b
    qans = ans[q]
  }

  // generovani kategorii
  let vals = [...Array(qans.length)].map(e => Array())
  const d = data[q]
  d.forEach(x => {
    [...Array(qans.length).keys()].forEach(i => {
      vals[i].push(x[i])
    })
  });

  // generovani hotovych series pro graf
  let ser = []
  qans.forEach((q, i) => {
    ser.push({
      "name": q,
      "color": colors[i],
      "index": i,
      "data": vals[i]
    })
  })

  Highcharts.chart(divid, {
    chart: {
        type: 'column',
        events: {
          render: function() {
            this.series.forEach(
              function(s) {
                s.dataLabelsGroup.hide();
              }
            )
          }
        }        
    },
    credits: {
      enabled: false
    },
    title: {
        text: qu[q]
    },
    xAxis: {
        categories: [
          'Zajištěná střední třída',
          'Nastupující kosmopolitní třída',
          'Tradiční pracující třída',
          'Třída místních vazeb',
          'Ohrožená třída',
          'Strádající třída',
      ]
    },
    yAxis: {
      min: 0,
      max: 1,
      title: {
          text: 'podíl odpovědí',
      },
      labels: {
        formatter: function() {
          return Math.abs(this.value) * 100 + ' %';
        }
      }
    },
    legend: {
        align: 'center',
        verticalAlign: 'top',
        itemDistance: 10,
        shadow: false,
        symbolHeight: 10,
        symbolWidth: 10,
        symbolRadius: 0,
        x: -15
    },
    tooltip: {
          formatter: function() {
          return '<b>' + this.series.name + '</b>' 
        }
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                allowOverlap: true,
                padding: 0,
                formatter: function() {
                  return Math.abs(Math.round(this.y * 1000) / 10) + ' %';
                }
            }
        },
        series: {
          animation: false,
          events: {
            mouseOver: function() {
              this.dataLabelsGroup.show();
            },
            mouseOut: function() {
              this.dataLabelsGroup.hide();
            }
          }
        }
    },
    series: ser
  });  
};

drawChart('4', '1'); // id otázky, pak id divu
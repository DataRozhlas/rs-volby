import "./byeie"; // loučíme se s IE
import { data } from "./stats";
import { qu } from "./qu";
import { ans } from "./ans"

const partyColors = ['#08519c','#3182bd','black', '#d95f0e', '#de2d26','#fd8d3c','#f768a1','#810f7c','#31a354','#bdbdbd']
const demoColors = ['#2b8cbe', '#a6bddb', '#de2d26', '#bdbdbd']
const colors = ['#2b8cbe', '#a6bddb', '#de2d26', '#fb6a4a', '#bdbdbd']
const hateColors = ['#bdbdbd', '#de2d26', '#3182bd', 'black']

function drawChart(q, divid) {
  let cols = colors;
  if (q === '5') {
    cols = partyColors;
  } else if (q === '7') {
    cols = hateColors;
  } else if (q === '1') {
    cols = demoColors;
  }

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
      "color": cols[i],
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
      visible: true,
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
            stacking: ((q === '7') ? false : 'normal'),
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

Array.from(document.getElementsByClassName("chart")).forEach(ch => {
  drawChart(ch.id.replace('ch', ''), ch.id)
});
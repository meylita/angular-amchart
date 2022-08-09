import { Component, OnInit } from '@angular/core';
import { REF_COLOR } from 'src/app/core/necessary.config';
import { am4charts, am4core } from "../../core/exporting-necessary.class";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public chartRender: any
  public ID_GENERATOR: string = 'ini_id'
  public finalizing: any
  public styleTemplate = {
    "events": {},
    "background": {
      "disabled": true,
      "fill": "red",
      "opacity": 0.8
    },
    "legend": {
      "disabled": false,
      "useDefaultMarker": false,
      "position": "bottom",
      "type": "Legend",
      "labels": {
        "fill": "#000"
      }
    },
    "scrollbarX": {
      "disabled": true,
      "type": "Scrollbar"
    },
    "cursor": {
      "disabled": false,
      "behavior": "none",
      "type": "XYCursor"
    },
    "responsive": {
      "enabled": true
    },
    "width": "100%",
    "height": "100%",
    "colors": {
      "disabled": false,
      "list": [
        "#f94144",
        "#f3722c",
        "#f8961e",
        "#f9844a",
        "#f9c74f",
        "#90be6d",
        "#43aa8b",
        "#4d908e",
        "#577590",
        "#277da1"
      ]
    },
  }

  public yAxes = {
    extraMin: 0.3,
    extraMax: 0.3,
    "title": {
      "disabled": true,
      "text": "{name}",
      "rotation": 270,
      "fontWeight": "bold",
      "fill": "#000",
      "fontSize": 14,
      "dx": -15

    },
    "renderer": {
      "opposite": false,
      "minGridDistance": 30,
      "grid": {
        "disabled": false,
        "stroke": "#000"
      },
      "labels": {
        "disabled": false,
        "fontSize": 12,
        "fontWeight": "normal",
        "fill": "#000"
      }
    }
  }

  public xAxes = {
    "title": {
      "disabled": true,
      "text": "{name}",
      "rotation": 0,
      "fontWeight": "bold",
      "fill": "#000",
      "fontSize": 14,
    },
    "renderer": {
      "opposite": false,
      "minGridDistance": 10,

      "grid": {
        "disabled": false,
        "stroke": "#000"
      },
      "labels": {
        "disabled": false,
        "fontSize": 12,
        "rotation": 315,
        "fontWeight": "normal",
        "fill": "#000",
        "verticalCenter": "middle",
        "horizontalCenter": "middle",
      }
    }
  }

  public series = {
    "strokeWidth": 1,
    "strokeDasharray": "0,0",
    "strokeOpacity": 1,
    "tensionX": 0.8,
    "tensionY": 0.8,
    "stroke": "#ff0000",
    "fill": "#ff0000",
    "tooltip": {
      "disabled": false,
      "pointerOrientation": "horizontal"
    },
    "segments": {
      "template": {
        "interactionsEnabled": true,
        "events": {}
      }
    },
    "tooltipText": "{name}: [bold]{valueY}", // area tooltip
    "bullets": [ // wajib ada bullet dan label
      {
        "disabled": false,
        "type": "CircleBullet",
        "circle": {
          "strokeWidth": 1,
          "strokeOpacity": 1,
          "radius": 5,
          "fill": "#fff",
          "fillOpacity": 1,
          "events": {},
          // "tooltipText": "{name}: [bold]{valueY}", // not sharing tooltip
        },
        "tooltipText": "{name}: [bold]{valueY}" // sharing tooltip
      },
      {
        "disabled": false,
        "type": "LabelBullet",
        "label": {
          "text": "{valueY}",
          "fill": "#000",
          "fontWeight": "100",
          "stroke": "#000",
          "strokeWidth": 1,
          "strokeOpacity": 1,
          "verticalCenter": "top",
          "horizontalCenter": "middle",
          "y": 10,
          "fontSize": 13
        }
      }
    ],
    "fillOpacity": 0,
    "stacked": false,
    // "temp_tooltipText": "{name}: [bold]{valueY}",
  }



  // ini response service
  public chartData = {
    "config": {
      "series": [
        {
          "dataFields": {
            "dateX": "date",
            "valueY": "positive"
          },
          "information": {  // custom, tambahan event click
            "dataFields": {
              "dateX": [
                "created_at"
              ],
              "valueY": ["ann_sentiment"]
            }
          },
          "name": "positive",
          "type": "LineSeries"
        },
        {
          "dataFields": {
            "dateX": "date",
            "valueY": "neutral"
          },
          "information": {
            "dataFields": {
              "dateX": [
                "created_at"
              ],
              "valueY": ["ann_sentiment"]
            }
          },
          "name": "neutral",
          "type": "LineSeries"
        },
        {
          "dataFields": {
            "dateX": "date",
            "valueY": "negative"
          },
          "information": {
            "dataFields": {
              "dateX": [
                "created_at"
              ],
              "valueY": ["ann_sentiment"]
            }
          },
          "name": "negative",
          "type": "LineSeries"
        }
      ],
      "xAxes": [
        {
          "id": "1",
          "type": "DateAxis"
        }
      ],
      "yAxes": [
        {
          "id": "2",
          "type": "ValueAxis"
        }
      ]
    },
    "data": [
      {
        "negative": 1.9057573422821303,
        "date": 1643778000000,
        "neutral": 56174.3984375,
        "positive": 86174.3984375
      },
      {
        "negative": 1.6644828742855877,
        "date": 1643781600000,
        "neutral": 79469.3984375,
        "positive": 59469.3984375
      },
      {
        "negative": 0.9838672390094784,
        "date": 1643785200000,
        "neutral": 17599.05078125,
        "positive": 67599.05078125
      },
      {
        "negative": 0.9805219806414981,
        "date": 1643788800000,
        "neutral": 27136.80078125,
        "positive": 57136.80078125
      },
      {
        "negative": 0.37343244901128264,
        "date": 1643792400000,
        "neutral": 7029.75,
        "positive": 17029.75,
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.chart()
    }, 0);
  }


  chart() {

    const seriesArr: any[] = []
    let yAxesArr: any[] = []
    let xAxesArr: any[] = []

    this.chartData.config.series.map(_item => {
      const tmp = {
        ..._item,
        ...this.series
      }

      seriesArr.push(tmp)
    })

    this.chartData.config.xAxes.map(_item => {
      const tmp = {
        ..._item,
        ...this.xAxes
      }

      xAxesArr.push(tmp)
    })

    this.chartData.config.yAxes.map(_item => {
      const tmp = {
        ..._item,
        ...this.yAxes
      }

      yAxesArr.push(tmp)
    })

    this.finalizing = {
      ...this.styleTemplate,
      "series": seriesArr,
      "xAxes": xAxesArr,
      "yAxes": yAxesArr,
      events: {
        beforedatavalidated: (ev: any) => {
          // const raw = ev.target.data;
          const raw = ev.target.series.values
          const exception = ev.target.colors.list

          let arr = [];
          raw.map((val: any, i: any) => {
            // const color = REF_COLOR[val.name] || exception[i].hex
            // const obj = { ...val, fill: color, stroke: color }
            // arr.push(obj)
            ev.target.series.values[i].stroke = REF_COLOR[raw[i].name] || exception[i].hex
            ev.target.series.values[i].fill = REF_COLOR[raw[i].name] || exception[i].hex

          })

          // console.log(arr);
          // ev.target.series.values = arr;
        }
      }
    }

    console.log(this.finalizing);


    this.chartRender = am4core.createFromConfig(this.finalizing, this.ID_GENERATOR, am4charts.XYChart)
    this.chartRender.data = this.chartData.data;
    return this.chartRender
  }

}

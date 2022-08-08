import { Component, OnInit } from '@angular/core';
import { REF_COLOR } from 'src/app/core/necessary.config';
import { am4charts, am4core } from "../../core/exporting-necessary.class";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  public chartRender: any
  public ID_GENERATOR: string = 'bar_id'
  public finalizing: any
  public styleTemplate = {
    "events": {},
    "background": {
      "disabled": true,
      "fill": "red",
      "opacity": 0.8
    },
    "legend": {
      "disabled": true,
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
    }
  }

  public yAxes = {
    "type": "CategoryAxis",
    "dataFields": { "category": "platform" },
    "title": {
      "disabled": true,
      "text": "{name}",
      "rotation": 270,
      "fontWeight": "bold",
      "fill": "#fff",
      "fontSize": 14,
      "dx": -15

    },
    "renderer": {
      "opposite": false,
      "minGridDistance": 10,

      "grid": {
        "disabled": false,
        "stroke": "#000",
        "template": {
          "location": 0
        }
      },
      "labels": {
        "disabled": false,
        "fontSize": 12,
        // "rotation": 270,
        "fontWeight": "normal",
        "fill": "#000",
        // "verticalCenter": "middle",
        // "horizontalCenter": "right",
      }
    }
  }

  public xAxes = {
    "type": "ValueAxis",
    "title": {
      "disabled": true,
      "text": "{name}",
      "rotation": 0,
      "fontWeight": "bold",
      "fill": "#fff",
      "fontSize": 14,
    },
    "renderer": {
      "opposite": false,
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

  public series = {
    // "stacked": false,
    "color": "color",
    "tooltip": {
      "disabled": false,
      "pointerOrientation": "horizontal"
    },
    "sequencedInterpolation": true,
    "bullets": [
      {
        "type": "LabelBullet",

        "label": {
          "disabled": false,
          "text": "{valueX}",
          "fill": "#fff",
          "fontWeight": "900",
          "stroke": "#333",
          "strokeWidth": 1,
          "strokeOpacity": 1,
          "verticalCenter": "top",
          "horizontalCenter": "middle",
          "truncate": true,
        }
      }
    ],
    "columns": {

      "template": {
        "adapter": {
          "fill": function (fill: any, target: any) {
            console.log(target.dataItem.dataContext, 'dataitem');
            return am4core.color(REF_COLOR[target.dataItem.dataContext.platform]) || fill

            //   if (target.dataItem && (target.dataItem.dataContext.platform)) {
            //     return am4core.color("#000");
            //   }
            //   else {
            //     return fill;
            //   }
          }
        },
        "column": {
          "cornerRadiusTopRight": 3,
          // "propertyFields": {
          //   "fill": "color",
          // },

          "cornerRadiusBottomRight": 3,
          "opacity": 0.36,
          "width": '50%',
          "maxWidth": 66,
          "tooltipText": "{name}: [bold]{valueX}{valueY}[/]",
          // "cornerRadiusTopLeft": 10,
          // "strokeOpacity": 1,
          // "fillOpacity": 0.8,
          "events": {}
        }
      }
    },
    "tooltipText": "[bold]{categoryY}[/] : {valueX}"
  }

  // ini response service
  public chartData = {
    "config": {
      "series": [
        {
          "dataFields": {
            "categoryY": "platform",
            "valueX": "value"
          },
          "information": {
            "dataFields": {
              "categoryY": [
                "platform"
              ],
              "valueX": [
                "value"
              ]
            }
          },
          "name": "platform",
          "type": "ColumnSeries"
        },
        // {
        //   "dataFields": {
        //     "categoryY": "platform",
        //     "valueX": "twitter"
        //   },
        //   "information": {
        //     "dataFields": {
        //       "categoryY": [
        //         "platform"
        //       ],
        //       "valueX": [
        //         "value"
        //       ]
        //     }
        //   },
        //   "name": "twitter",
        //   "type": "ColumnSeries"
        // },
        // {
        //   "dataFields": {
        //     "categoryY": "platform",
        //     "valueX": "instagram"
        //   },
        //   "information": {
        //     "dataFields": {
        //       "categoryY": [
        //         "platform"
        //       ],
        //       "valueX": [
        //         "value"
        //       ]
        //     }
        //   },
        //   "name": "instagram",
        //   "type": "ColumnSeries"
        // },
        // {
        //   "dataFields": {
        //     "categoryY": "platform",
        //     "valueX": "youtube"
        //   },
        //   "information": {
        //     "dataFields": {
        //       "categoryY": [
        //         "platform"
        //       ],
        //       "valueX": [
        //         "value"
        //       ]
        //     }
        //   },
        //   "name": "youtube",
        //   "type": "ColumnSeries"
        // },
        // {
        //   "dataFields": {
        //     "categoryY": "platform",
        //     "valueX": "tiktok"
        //   },
        //   "information": {
        //     "dataFields": {
        //       "categoryY": [
        //         "platform"
        //       ],
        //       "valueX": [
        //         "value"
        //       ]
        //     }
        //   },
        //   "name": "tiktok",
        //   "type": "ColumnSeries"
        // },
      ],
      "xAxes": [
        {
          "id": "1",
          "type": "ValueAxis"
        }
      ],
      "yAxes": [
        {
          "id": "2",
          "type": "CategoryAxis",
          "dataFields": {
            "category": "platform"
          },
        }
      ]
    },
    "data": [
      // {
      //   "facebook": 48196083,
      //   "twitter": 69640297,
      //   "instagram": 62744173,
      //   "youtube": 39640297,
      //   "tiktok": 52744173,
      // }
      {
        platform: "facebook",
        value: 2025,
        color: 'blue'

        // "facebook": 48196083,
        // "twitter": 69640297,
        // "instagram": 62744173,
        // "youtube": 39640297,
        // "tiktok": 52744173,
      }, {
        platform: "twitter",
        value: 1882,
        color: 'blue'

        // "facebook": 48196083,
        // "twitter": 69640297,
        // "instagram": 62744173,
        // "youtube": 39640297,
        // "tiktok": 52744173,
      }, {
        platform: "instagram",
        value: 1809

        // "facebook": 48196083,
        // "twitter": 69640297,
        // "instagram": 62744173,
        // "youtube": 39640297,
        // "tiktok": 52744173,
      }, {
        platform: "youtube",
        value: -1322,

        // "facebook": 48196083,
        // "twitter": 69640297,
        // "instagram": 62744173,
        // "youtube": 39640297,
        // "tiktok": 52744173,
      }, {
        platform: "tiktok",
        value: 1122

        // "facebook": 48196083,
        // "twitter": 69640297,
        // "instagram": 62744173,
        // "youtube": 39640297,
        // "tiktok": 52744173,
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

    let seriesArr: any = []
    let yAxesArr: any = []
    let xAxesArr: any = []

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

    }

    console.log('finalize => ', this.finalizing);

    this.chartRender = am4core.createFromConfig(this.finalizing, this.ID_GENERATOR, am4charts.XYChart)
    this.chartRender.data = this.chartData.data;

    console.log(this.chartRender, 'datas');

    return this.chartRender
  }


}

import { Component, OnInit } from '@angular/core';
import { REF_COLOR } from 'src/app/core/necessary.config';
import { am4charts, am4core } from "../../core/exporting-necessary.class";
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  public chartRender: any
  public ID_GENERATOR: string = 'pie_id'
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
        "fill": "#fff"
      },
      "valueLabels": {
        "fill": "#fff"
      }
    },
    "innerRadius": 10,
    "radius": 50,
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
    "responsive": { "enabled": true },
    "width": "100%",
    "height": "100%",
    "series": {
      "tooltip": {
        "disabled": false,
        "pointerOrientation": "horizontal"
      },
      "labels": {
        "disabled": false,
        // "text": "{value}",
        "fill": "#fff",
        // "fontWeight": "900",
        // "stroke": "#333",
        // "strokeWidth": 1,
        // "strokeOpacity": 1,
        // "verticalCenter": "top",
        // "horizontalCenter": "middle"
        // "template": {
        //     "fill": 'white'
        // }
      },
      "colors": {
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
        ],
        "type": "ColorSet",
        "passOptions": {},
        "reuse": true
      },
      "slices": {
        "template": {
          "stroke": '#fff',
          "strokeWidth": 1,
          "strokeOpacity": 1,
          "tooltipText": "{category}: {value}",
          "propertyFields": {
            "fill": "color",
          }
        }
      }
    }
  }

  public background = {
    "disabled": true,
    "fill": "red",
    "opacity": 0.8
  }
  public legend = {
    "disabled": false,
    "useDefaultMarker": false,
    "position": "bottom",
    "type": "Legend",
    "labels": {
      "fill": "#fff"
    },
    "valueLabels": {
      "fill": "#fff"
    }
  }

  public cursor = {
    "disabled": true,
    "behavior": "none",
    "type": "XYCursor"
  }

  public series = {
    "background": {
      ...this.background,
    },
    "legend": {
      ...this.legend
    },
    "cursor": {
      ...this.cursor
    },
    "innerRadius": "10%",
    "radius": "50%",
    "series": {
      "tooltip": {
        "disabled": false,
        "pointerOrientation": "horizontal"
      },
      "labels": {
        "disabled": false,
        // "text": "{value}",
        "fill": "#fff",
        // "fontWeight": "900",
        // "stroke": "#333",
        // "strokeWidth": 1,
        // "strokeOpacity": 1,
        // "verticalCenter": "top",
        // "horizontalCenter": "middle"
        // "template": {
        //     "fill": 'white'
        // }
      },
      "colors": {
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
        ],
        "type": "ColorSet",
        "passOptions": {},
        "reuse": true
      },
      "propertyFields": {
        "fill": "customColor"
      },
      "slices": {
        "propertyFields": {
          "fill": "customColor"
        },
        "template": {
          "stroke": '#fff',
          "strokeWidth": 1,
          "strokeOpacity": 1,
          "tooltipText": "{category}: {value}",
          "events": {
            "hit": function (ev: any) {
              console.log(ev.target.dataItem);

              // var slice = ev.target.dataItem.dataContext.slice;
              // slice.isActive = !slice.isActive;
              // alert("Clicked on " + ev.target.dataItem.category + ": " + ev.target.dataItem.value);
            }
          },
        }
      }
    }
  }

  // ini response service
  public chartData = {
    "config": {
      "series": [
        {
          "dataFields": {
            "category": "sentiment",
            "information": ["ann_sentiment"],
            "value": "jumlah"
          },
          "name": "category",
          "type": "PieSeries"
        }
      ]
    },
    "data": [
      {
        "jumlah": 28848,
        "sentiment": "neutral"
      },
      {
        "jumlah": 24693,
        "sentiment": "positive"
      },
      {
        "jumlah": 16390,
        "sentiment": "negative"
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
    console.log(this.series, 'series');

    let seriesArr: any = []
    // let yAxesArr: any = []
    // let xAxesArr: any = []

    // let chart = {
    //   ...this.series,
    //   ...this.background,
    //   ...this.cursor,
    //   ...this.legend
    // }

    this.chartData.config.series.map(_item => {
      const tmp = {
        ..._item,
        ...this.series,
      }

      seriesArr.push(tmp)
    })

    // this.chartData.config.xAxes.map(_item => {
    //   const tmp = {
    //     ..._item,
    //     ...this.xAxes
    //   }

    //   xAxesArr.push(tmp)
    // })

    // this.chartData.config.yAxes.map(_item => {
    //   const tmp = {
    //     ..._item,
    //     ...this.yAxes
    //   }

    //   yAxesArr.push(tmp)
    // })


    this.finalizing = {
      ...this.styleTemplate,
      "series": seriesArr,
      // "xAxes": xAxesArr,
      // "yAxes": yAxesArr,

    }

    console.log('finalize => ', this.finalizing);

    this.chartRender = am4core.createFromConfig(this.finalizing, this.ID_GENERATOR, am4charts.PieChart)
    this.chartRender.data = this.chartData.data;

    console.log(this.chartRender, 'datas');

    return this.chartRender
  }


}
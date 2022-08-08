import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export * as am4core from "@amcharts/amcharts4/core";
export * as am4charts from "@amcharts/amcharts4/charts";
// export * as am4maps from "@amcharts/amcharts4/maps";
// export * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";
// export * as am4plugins_sunburst from "@amcharts/amcharts4/plugins/sunburst";
export * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
export * as am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
am4core.addLicense("ch-custom-attribution")


// export class ExportingChart {

//     constructor(chartRender, identity) {
//         chartRender.exporting.menu = new am4core.ExportMenu();
//         chartRender.exporting.menu.items = [
//             {
//                 "label": "...",
//                 "menu": [
//                     {
//                         "label": "Image",
//                         "menu": [
//                             { "type": "png", "label": "PNG" },
//                             { "type": "jpg", "label": "JPG" },
//                             { "type": "svg", "label": "SVG" },
//                             { "type": "pdf", "label": "PDF" }
//                         ]
//                     }, {
//                         "label": "Data",
//                         "menu": [
//                             { "type": "json", "label": "JSON" },
//                             { "type": "csv", "label": "CSV" },
//                             { "type": "xlsx", "label": "XLSX" },
//                             { "type": "pdfdata", "label": "PDF" }
//                         ]
//                     }
//                 ]
//             }
//         ]
//         chartRender.exporting.filePrefix = identity
//     }
// }

// export class EventClick {
//     private result;
//     constructor(ev) {
//         console.log(ev.target.dataItem.properties.category);
//         console.log(ev.target.dataItem.component.dataFields.information);
//         const dataItem = ev.target.dataItem
//         const obj = {}
//         obj[dataItem.component.dataFields.information] = dataItem.properties.category
//         console.log(obj);
//         return this.result
//     }
// }
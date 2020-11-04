import React, { useEffect } from "react";
import c3 from "c3";

const BarChart = () => {

  useEffect(() => {
    c3.generate({
      bindto: "#bar_chart",
      size: {
        height: 400,
        width: 600
      },
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'bar'
      },
      bar: {
        width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
      }
    });
  }, [])


  return <div id="bar_chart" />;
};

export default BarChart
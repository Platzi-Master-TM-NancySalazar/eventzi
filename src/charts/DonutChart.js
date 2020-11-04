import React, { useEffect } from "react";
import c3 from "c3";

const DonutChart = () => {

  useEffect(() => {
    c3.generate({
      bindto: "#donut_chart",
      size: {
        height: 400,
        width: 600
      },
      data: {
        columns: [
          ['data1', 30],
          ['data2', 120],
        ],
        type: 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
        title: "Iris Petal Width"
      }
    });
  }, [])


  return <div id="donut_chart" />;
};

export default DonutChart
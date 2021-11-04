import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
function DonutChart() {
  const containerRef = useRef(null);
  const [label, setLabel] = useState("Kredit");
  const [statistics, setStatistics] = useState(undefined);

  const [data, setData] = useState(undefined);
  const [options, setOptions] = useState(undefined);

  useEffect(() => {
    axios
      .get("/chart.json")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (data) {
      const donut = data.donut;
      const total = donut.reduce((acc, item) => acc + item, 0);
      let [a1, a2, a3] = donut;
      setStatistics(data.donut[0]);

      a1 = (a1 / total) * 100;
      a2 = (a2 / total) * 100;
      a3 = (a3 / total) * 100;

      // "donut": [2302, 1132, 1090],
      // "label" :["Kredit", "Ipoteka", "Satilib"]
      const [a1Label, a2Label, a3Label] = data.label;

      const displayOptions = [
        { stats: data.donut[0], label: a1Label, color: "#5d44a2", width: "55" },
        { stats: data.donut[1], label: a2Label, color: "#b7a3e4", width: "50" },
        { stats: data.donut[2], label: a3Label, color: "#e1dbf5", width: "40" },
      ];

      setOptions(displayOptions);

      containerRef.current.style.setProperty("--a1", a1);
      containerRef.current.style.setProperty("--a2", a2);
      containerRef.current.style.setProperty("--a3", a3);
    }
  }, [data]);

  return (
    <>
    <div className="donut-container" ref={containerRef}>
      {!data ? (
        "Loading..."
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" id="svg">
          {options?.map((o, index) => (
            <circle
              key={index}
              cx="150"
              cy="150"
              className="donut"
              r="75"
              strokeWidth={o.width}
              stroke={o.color}
              fill="none"
              
              onMouseEnter={(e) => {
                setLabel(o.label);
                setStatistics(o.stats);
              }}
            />
          ))}
          <circle
            cx="150"
            cy="150"
            r="35"
            strokeWidth="10"
            stroke="#f5f2fe"
            fill="none"
          />
          <text x="150" y="150" textAnchor="middle" fill="#1E265E">
            {label}
          </text>
          {statistics && (
            <text x="150" y="170" textAnchor="middle" fill="black">
              {Math.round(statistics) + '$'}
            </text>
          )}
        </svg>
      )}
    </div>

    </>
  );
}

export default DonutChart;

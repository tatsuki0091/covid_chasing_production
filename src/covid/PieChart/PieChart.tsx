import React from "react";
import { Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import { useSelector } from "react-redux";
import { selectDaily } from "../covidSlice";

const PieChart = () => {
  const daily = useSelector(selectDaily);
  const motality =
    (100 * daily[daily.length - 1].Deaths) / daily[daily.length - 1].Confirmed;

  const pieChart = daily[0] && (
    <Doughnut
      data={{
        labels: ["infected", "Recovered", "Deths"],
        datasets: [
          {
            data: [
              daily[daily.length - 1].Confirmed,
              daily[daily.length - 1].Recovered,
              daily[daily.length - 1].Deaths,
            ],
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "#008080",
              "rgba(255,0,0,0.5)",
            ],
            hoverBackgroundColor: ["transparent", "transparent", "transparent"],
          },
        ],
      }}
      options={{
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 15,
          },
        },
      }}
    />
  );
  return (
    <>
      <Typography align="center" color="textSecondary" gutterBottom>
        Motality {motality.toFixed(2)}[%]
      </Typography>
      {pieChart}
    </>
  );
};

export default PieChart;

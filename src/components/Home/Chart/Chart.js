import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import "./Chart.css";

function Chart() {
  const graphdata = useSelector((state) => state.products.graphdata);

  const Times = graphdata.map((value) => value.date);

  const SaleCount = graphdata.map((value) => value.saleCount);

  const Quantity = graphdata.map((value) => value.quantity);

  const Equity = graphdata.map((value) => value.equity);

  return (
    <div className="Line-Chart d-flex align-items-center justify-content-center ">
      <Line
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                gridLines: false,
              },
            ],
          },
        }}
        height={400}
        data={{
          labels: Times,
          datasets: [
            {
              label: "Sale Count",
              data: SaleCount,
              borderColor: "#2d89ef",
            },
            {
              label: "Quantity",
              data: Quantity,
              borderColor: "#ffc40d",
            },
            {
              label: "Equity",
              data: Equity,
              borderColor: "#ee1111",
            },
          ],
        }}
      />
    </div>
  );
}

export default Chart;

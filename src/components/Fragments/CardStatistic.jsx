import React from "react";
import Card from "../Elements/Card";
import BarsDataset from "../Elements/BardData";
import { expensesStatistics } from "../../data";

function CardStatistic(props) {
  const { data } = props;

  const dataset =
    data ?? {
      data: expensesStatistics,
      dataKey: "date",
      series: [
        { dataKey: "amountThisWeek", label: "This Week" },
        { dataKey: "amountLastWeek", label: "Last Week" },
      ],
    };

  return (
    <>
      <Card
        title="Statistics"
        desc={
          <>
            <select className="font-bold text-2xl ">
              <option>Weekly Comparison</option>
            </select>
            <BarsDataset dataset={dataset} />
          </>
        }
      />
    </>
  );
}

export default CardStatistic;
import "./index.scss";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import CircularProgress from "./CircularProgress";
import Graph from "./Graph";
import { specialColors } from "../../../data/constants";
import { IStore } from "../../../interfaces/store";

const Index: FunctionComponent = () => {
  const state = useSelector((state: IStore) => state);

  return (
    <div className="index">
      <h1 className="index__header">Welcome to dashboard</h1>
      <p className="index__breadcrumbs">Home - Dashboard</p>
      <div className="index__cards">
        <Card
          colors={specialColors.red}
          icon={"like"}
          value={"$58,947"}
          title={"Total revenue"}
        />
        <Card
          colors={specialColors.aqua}
          icon={"cart"}
          value={"$58,947"}
          title={"Total revenue"}
        />
        <Card
          colors={specialColors.blue}
          icon={"chart"}
          value={"$58,947"}
          title={"Total revenue"}
        />
        <Card
          colors={specialColors.orange}
          icon={"view"}
          value={"$58,947"}
          title={"Total revenue"}
        />
      </div>
      <div className="index__additional">
        <CircularProgress progress={68} />
        <Graph isNightMode={state.appInterface.isNightMode} />
      </div>
    </div>
  );
};

export default Index;

import "./index.scss";
import { FunctionComponent } from "react";
import { specialColors } from "../../../data/constants";
import Card from "./Card";
import CircularProgress from "./CircularProgress";

const Index: FunctionComponent = () => {
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
        <div style={{ flexGrow: 6 }}>graph</div>
      </div>
    </div>
  );
};

export default Index;

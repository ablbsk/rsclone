import { FunctionComponent } from "react";

import img from "../../assets/images/jpg/error.jpg";

const ErrorMessage: FunctionComponent = () => {
  return (
    <img
      style={{
        display: "block",
        width: "250px",
        height: "250px",
        objectFit: "contain",
        margin: "0 auto",
      }}
      src={img}
      alt="Error"
    />
  );
};

export default ErrorMessage;

import "./home.scss";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Home: FunctionComponent = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link className="text-link" to="/dashboard">
          Open DASHBOARD (temporary link)
        </Link>
      </div>
      <div>
        <Link className="text-link" to="/sign-in">
          Open SIGN-IN (temporary link)
        </Link>
      </div>
    </div>
  );
};
export default Home;

import { FunctionComponent, useEffect, useState } from "react";
import "./infoblock.scss";
import classNames from "classnames";

const InfoBlock: FunctionComponent = () => {
  const [pointActive, setPointActive] = useState<boolean>(false);
  return (
    <section className="section-space">
      <div className="section-space__banner">
        <div className="container-section">
          <div className="row-points-wrapper">
            <div className="points-wrapper">
              <div className="custom-tab">
                <ul className="custom-tab__nav_list">
                  <li
                    className="custom-tab__item "
                    // onClick={() => setPointActive(pointActive)}
                  >
                    <a>
                      <h5
                        className={classNames("tab-title", {
                          active:
                            pointActive === true
                              ? !pointActive
                              : pointActive === false,
                        })}
                        onClick={() => setPointActive(true)}
                      >
                        Blok Information 1
                      </h5>
                    </a>
                  </li>
                  <li
                    className="custom-tab__item"
                    // onClick={() => setPointActive(pointActive)}
                  >
                    <a>
                      <h5
                        className={classNames("tab-title ", {
                          active:
                            pointActive === true
                              ? !pointActive
                              : pointActive === false,
                        })}
                        onClick={() => setPointActive(true)}
                      >
                        Blok Information 2
                      </h5>
                    </a>
                  </li>
                  <li
                    className="custom-tab__item"
                    // onClick={() => setPointActive(pointActive)}
                  >
                    <a>
                      <h5
                        className={classNames("tab-title ", {
                          active:
                            pointActive === true
                              ? !pointActive
                              : pointActive === false,
                        })}
                        onClick={() => setPointActive(true)}
                      >
                        Blok Information 3
                      </h5>
                    </a>
                  </li>
                  <li
                    className="custom-tab__item"
                    // onClick={() => setPointActive(pointActive)}
                  >
                    <a>
                      <h5
                        className={classNames("tab-title ", {
                          active:
                            pointActive === true
                              ? !pointActive
                              : pointActive === false,
                        })}
                        onClick={() => setPointActive(true)}
                      >
                        Blok Information 4
                      </h5>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="points-info-block">
              <div className="tab-pane">
                <div className="tab-pane-content">
                  <h3 className="tab-pane__title">Title of information</h3>
                  <p className="tab-pane__text">
                    Our Ties is very best.Choose us because:
                  </p>
                  <ul className="tab-pane__list">
                    <li className="tab-pane__list_item">
                      <i className="check-circle"></i>
                      Advance Advisory Team
                    </li>
                    <li className="tab-pane__list_item">
                      <i className="check-circle"></i>
                      Professional Consulting Services
                    </li>
                    <li className="tab-pane__list_item">
                      <i className="check-circle"></i>
                      24/7 Support Help Center
                    </li>
                    <li className="tab-pane__list_item">
                      <i className="check-circle"></i>
                      Customer Service &amp; Operations
                    </li>
                    <li className="tab-pane__list_item">
                      <i className="check-circle"></i>
                      There are many variations of passages.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InfoBlock;

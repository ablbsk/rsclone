import { FunctionComponent, useState } from "react";
import "./infoblock.scss";
import classNames from "classnames";
import { nightTheme } from "../../../data/constants";
import { InfoBlockType } from "../../../types/home";

const InfoBlock: FunctionComponent<InfoBlockType> = ({
  accentColor,
  isNavbarNightMode,
}: InfoBlockType) => {
  const [tab, setTab] = useState<number>(1);
  const backgroundColor = nightTheme.background.element;
  return (
    <section className="section-space">
      <div className="section-space__banner">
        <div className="container">
          <div className="row-points-wrapper">
            <div className="points-wrapper">
              <div className="custom-tab">
                <ul className="custom-tab__nav_list">
                  <li className="custom-tab__item">
                    <h5
                      className={classNames("tab-title ", {
                        select: tab === 1,
                      })}
                      style={{
                        backgroundColor: isNavbarNightMode
                          ? backgroundColor
                          : tab === 1
                          ? accentColor
                          : "",
                      }}
                      onClick={() => setTab(1)}
                    >
                      CUSTOMISED PRODUCTS
                    </h5>
                  </li>
                  <li className="custom-tab__item">
                    <h5
                      className={classNames("tab-title ", {
                        select: tab === 2,
                      })}
                      style={{
                        backgroundColor: isNavbarNightMode
                          ? backgroundColor
                          : tab === 2
                          ? accentColor
                          : "",
                      }}
                      onClick={() => setTab(2)}
                    >
                      CAN I ORDER A READY-MADE PRODUCT OFF THE SHELF?
                    </h5>
                  </li>
                  <li className="custom-tab__item">
                    <h5
                      className={classNames("tab-title ", {
                        select: tab === 3,
                      })}
                      style={{
                        backgroundColor: isNavbarNightMode
                          ? backgroundColor
                          : tab === 3
                          ? accentColor
                          : "",
                      }}
                      onClick={() => setTab(3)}
                    >
                      HOW ARE YOU ABLE TO OFFER QUANTITIES FROM ONE AT SUCH
                      AFFORDABLE PRICES?
                    </h5>
                  </li>
                  <li className="custom-tab__item">
                    <h5
                      className={classNames("tab-title ", {
                        select: tab === 4,
                      })}
                      style={{
                        backgroundColor: isNavbarNightMode
                          ? backgroundColor
                          : tab === 4
                          ? accentColor
                          : "",
                      }}
                      onClick={() => setTab(4)}
                    >
                      HOW LONG DO I HAVE TO WAIT FOR MY CUSTOM PRODUCTS?
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="points-info-block">
              {tab === 1 && (
                <div className="tab-pane-content">
                  <p className="tab-pane__text">
                    A custom product simply means that you design your tie,
                    novelty tie or scarf just as you want, no compromises.
                  </p>
                  <p className="tab-pane__text">
                    Choose a canvas, apply colours, add logos and then select
                    your size. The limitless options allow you to create designs
                    as individual as your company brand, values, event or even
                    your personality. We specialise in woven and printed ties,
                    novelty ties, and ladies neck and head-scarves. Even apply
                    your unique message onto your tie or scarf sleeve.
                  </p>
                </div>
              )}
              {tab === 2 && (
                <div className="tab-pane-content">
                  <p className="tab-pane__text">
                    No – we are a “made to order” company so all of our products
                    are made exactly to your design and size specifications.
                  </p>

                  <p className="tab-pane__text">
                    TieCreators is all about custom-made neckwear. Using our
                    wide range of canvases you can create any design you want.
                  </p>
                </div>
              )}
              {tab === 3 && (
                <div className="tab-pane-content">
                  <p className="tab-pane__text">
                    TieCreators are able to offer affordable prices because you
                    are the designer.
                  </p>
                  <p className="tab-pane__text">
                    This coupled with the right business model allows you to
                    enjoy our high quality custom ties, scarves and sleeves at
                    competitive prices.
                  </p>
                  <p className="tab-pane__text">
                    We hope you are delighted with our products and service so
                    much you will trust us with all your custom neckwear…
                  </p>
                </div>
              )}
              {tab === 4 && (
                <div className="tab-pane-content">
                  <p className="tab-pane__text">
                    With the best production facilities available today, we aim
                    to fulfil your order as per your delivery option, standard
                    (4 weeks) or express (3 weeks).
                  </p>
                  <p className="tab-pane__text">
                    In some instances, we will seek your approval of a Final
                    Production Sheet before we begin manufacturing.
                  </p>
                  <p className="tab-pane__text">
                    If you require your order earlier than this, please enquire
                    with us as we can often fulfil orders in very short
                    timescales.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InfoBlock;

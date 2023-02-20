import { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import "./infoblock.scss";
import classNames from "classnames";
import { nightTheme } from "../../../data/constants";
import { InfoBlockType } from "../../../types/home";
import infoSection from "../../../data/infoSection";
import { ILangReducer } from "../../../interfaces/langReducer";

const InfoBlock: FunctionComponent<InfoBlockType> = ({
  accentColor,
  isNavbarNightMode,
}: InfoBlockType) => {
  const [tab, setTab] = useState<number>(1);
  const backgroundColor = nightTheme.background.element;
  const { lang } = useSelector((state: ILangReducer) => state.langReducer);
  const list = infoSection.find((c) => c.lang === lang)!;

  return (
    <section className="section-space">
      <div className="section-space__banner">
        <div className="container">
          <div className="row-points-wrapper">
            <div className="points-wrapper">
              <div className="custom-tab">
                <ul className="custom-tab__nav_list">
                  {list.data.map((item, index) => (
                    <li className="custom-tab__item" key={item.question}>
                      <h5
                        className={classNames("tab-title", {
                          "tab-title-select": tab === index + 1,
                        })}
                        style={{
                          backgroundColor: isNavbarNightMode
                            ? backgroundColor
                            : tab === index + 1
                            ? accentColor.static
                            : "",
                        }}
                        onClick={() => setTab(index + 1)}
                      >
                        {item.question}
                      </h5>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="points-info-block">
              {tab === 1 && (
                <div className="tab-pane-content">
                  {list.data[0].answer.map((answer) => (
                    <p className="tab-pane__text" key={answer}>
                      {answer}
                    </p>
                  ))}
                </div>
              )}
              {tab === 2 && (
                <div className="tab-pane-content">
                  {list.data[1].answer.map((answer) => (
                    <p className="tab-pane__text" key={answer}>
                      {answer}
                    </p>
                  ))}
                </div>
              )}
              {tab === 3 && (
                <div className="tab-pane-content">
                  {list.data[2].answer.map((answer) => (
                    <p className="tab-pane__text" key={answer}>
                      {answer}
                    </p>
                  ))}
                </div>
              )}
              {tab === 4 && (
                <div className="tab-pane-content">
                  {list.data[3].answer.map((answer) => (
                    <p className="tab-pane__text" key={answer}>
                      {answer}
                    </p>
                  ))}
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

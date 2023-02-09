import { FunctionComponent, useState, useEffect } from "react";
import configurator from "../../data/configurator";
import Categories from "./Categories";
import SubCategories from "./SubCategories";
import View from "./View";
import { IConfigurator } from "../../interfaces/configurator";
import "./configurator.scss";

const Configurator: FunctionComponent = () => {
  const lang = "ru";
  const [tieList, setTieList] = useState<IConfigurator>({} as IConfigurator);
  const [type, setType] = useState<string>("");

  useEffect(() => {
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    setTieList(configurator.find((c) => c.lang === lang)!);
  }, []);

  const typeCategory = tieList?.data?.find((tie) => tie.type === type);
  const subCategories = typeCategory?.subCategories;
  const hasSubCategories = !!typeCategory?.subCategories?.length;

  return (
    <div className="configurator">
      <div className="container">
        <div className="tie-category">
          {!type && !hasSubCategories ? (
            <Categories tieList={tieList} setType={setType} type={type} />
          ) : type && hasSubCategories ? (
            <SubCategories
              setType={setType}
              type={type}
              subCategories={subCategories!}
            />
          ) : (
            <View type={type} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Configurator;

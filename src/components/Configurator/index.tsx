import { FunctionComponent, useState, useEffect } from "react";
import configurator from "../../data/configurator";
import Categories from "./Categories";
import SubCategories from "./SubCategories";
import { IStore } from "../../interfaces/store";
import { useSelector } from "react-redux";
import View from "./View";
import Header from "../Header";
import Profile from "../Profile";
import Footer from "../Footer";
import { IConfigurator } from "../../interfaces/configurator";
import "./configurator.scss";

const Configurator: FunctionComponent = () => {
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const { accentColor, isNavbarNightMode, isProfileShow } = interfaceSettings;

  const lang = "ru";
  const [type, setType] = useState<string>("");

  const tieList = configurator.find((c) => c.lang === lang)!;
  const typeCategory = tieList.data.find((tie) => tie.type === type)!;
  const subCategories = typeCategory?.subCategories;
  const hasSubCategories = !!typeCategory?.subCategories?.length;

  // console.log("typeCategory", typeCategory);

  return (
    <>
      <Header
        accentColor={accentColor}
        isNavbarNightMode={isNavbarNightMode}
        isButtonVisible={false}
      />
      <Profile accentColor={accentColor} isProfileShow={isProfileShow} />
      <div className="configurator-wrapper">
        <div className="tie-category-banner">
          <div className="container">
            <div className="tie-category">
              {!type && !hasSubCategories ? (
                <Categories
                  tieList={tieList}
                  setType={setType}
                  type={type}
                  accentColor={accentColor}
                  isNavbarNightMode={isNavbarNightMode}
                />
              ) : type && hasSubCategories ? (
                <SubCategories
                  setType={setType}
                  type={type}
                  price={typeCategory?.price}
                  subCategories={subCategories!}
                  accentColor={accentColor}
                  isNavbarNightMode={isNavbarNightMode}
                />
              ) : (
                <View
                  type={type}
                  price={typeCategory?.price}
                  accentColor={accentColor}
                  isNavbarNightMode={isNavbarNightMode}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer accentColor={accentColor} isNavbarNightMode={isNavbarNightMode} />
    </>
  );
};

export default Configurator;

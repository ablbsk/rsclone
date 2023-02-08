import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import "./homelanding.scss";
import { IStore } from "../../interfaces/store";
import Header from "../Header";
import Profile from "../Profile";
import InfoBlock from "../InfoBlock";
import AudioPlayer from "../AudioPlayer";
import Footer from "../Footer";
import Сarousel from "../Carousel";

const Home: FunctionComponent = () => {
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const { accentColor, isNavbarNightMode, isProfileShow } = interfaceSettings;

  return (
    <>
      <Header
        accentColor={accentColor}
        isNavbarNightMode={isNavbarNightMode}
        renderLinks={true}
      >
        <nav className="nav-wrapper">
          <div className="list-wrapper">
            <ul className="list-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/configurator">
                  Configurator
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Tie Market
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Header>
      <Profile accentColor={accentColor} isProfileShow={isProfileShow} />
      <AudioPlayer />
      <main className="main">
        <div className="nav-block">
          <div className="container-fluid">
            <div className="row"></div>
          </div>
        </div>
        <div className="video-block">
          <div className="service-first">
            <div className="service-second"></div>
          </div>
        </div>

        <InfoBlock />
        <Сarousel
          accentColor={accentColor}
          isNavbarNightMode={isNavbarNightMode}
        />
        <div className="banner-wrapper"></div>
        <Footer
          accentColor={accentColor}
          isNavbarNightMode={isNavbarNightMode}
        />
      </main>
    </>
  );
};
export default Home;

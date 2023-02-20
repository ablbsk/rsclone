import { FunctionComponent, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";
import FormSignIn from "../FormSignIn";

import "./tiemarket.scss";
import { IStore } from "../../interfaces/store";
import { nightTheme } from "../../data/constants";
import useOnClickOutside from "../../hook/useOnClickOutside";
import Hover from "../Hover";
import tieMarketLang from "../../data/tieMarket";

import {
  tieFetching,
  tieFetched,
  tieFetchingError,
} from "../../actions/tieMarket/index";
import {
  buyTieFetching,
  buyTieFetched,
  buyTieFetchingError,
} from "../../actions/buyTie/index";
import { getTies } from "../../services/apiTies";
import { ITiesReducer, ITie } from "../../interfaces/tie";
import { ILangReducer } from "../../interfaces/langReducer";
import Spinner from "../Spinner";
import { IOrder } from "../../interfaces/order";
import { createOrder } from "../../services/apiOrders";

const TieMarket: FunctionComponent = () => {
  const backgroundColor = nightTheme.background.element;

  const saved = localStorage.getItem("favouriteTie");
  const [favouriteTies, setFavouriteTie] = useState<ITie[]>(
    saved ? JSON.parse(saved) : []
  );

  const [openPopup, setOpenPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(popupRef, () => setOpenPopup(!openPopup), openPopup);

  const { lang } = useSelector((state: ILangReducer) => state.langReducer);
  const tiesStore = useSelector((state: ITiesReducer) => state.tiesReducer);
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const { accentColor, isNavbarNightMode } = interfaceSettings;
  const { tieLoadingStatus, ties } = tiesStore;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const listLang = tieMarketLang.find((c) => c.lang === lang)!;
  const dispatch = useDispatch();

  const buyTie = async (
    formData: Pick<IOrder, "userId" | "image" | "price" | "sellerId">
  ) => {
    try {
      dispatch(buyTieFetching());
      const login = localStorage.getItem("login");
      const user = login ? JSON.parse(login) : [];
      if (!user.user._id) {
        setOpenPopup(!openPopup);
      } else {
        const user = login ? JSON.parse(login) : [];
        const body = {
          ...formData,
          userId: user.user._id,
        };
        const resp = await createOrder(body);
        if (resp.userId) {
          dispatch(buyTieFetched(resp));
        }
      }
    } catch (e) {
      dispatch(buyTieFetchingError());
    }
  };

  const getTieList = async () => {
    try {
      dispatch(tieFetching());
      const ties = await getTies();
      dispatch(tieFetched(ties));
    } catch {
      dispatch(tieFetchingError());
    }
  };
  useEffect(() => {
    getTieList();
  }, []);

  const addFavouriteTie = (tie: ITie): void => {
    const favourite = favouriteTies.filter(
      (favouriteTie: ITie) => favouriteTie._id === tie._id
    );
    if (favourite.length > 0) {
      setFavouriteTie(
        favouriteTies.filter(
          (favouriteTie: ITie) => favouriteTie._id !== tie._id
        )
      );
    } else {
      setFavouriteTie([...favouriteTies, tie]);
    }
  };

  useEffect(() => {
    localStorage.setItem("favouriteTie", JSON.stringify(favouriteTies));
  }, [favouriteTies]);

  const spinner = tieLoadingStatus === "loading" ? <Spinner /> : null;

  return (
    <>
      <main className="main-market">
        <div className="tiemarket-wrapper">
          <div className="container">
            <div className="tiemarket__banner-wrapper">
              <div className="market-block">
                <div className="market-block__title_wrapper">
                  <h4 className="market-block__title">{listLang.data.title}</h4>
                  <div className="link-link-block">
                    <Link className="linkinlike" to={"/favourite-tie"}></Link>
                  </div>
                </div>
                <div className="market-block__products">
                  {spinner}
                  <div className="row__products">
                    {ties?.map((tie) => (
                      <div className="tie__product" key={tie.name}>
                        <div className="tie__products_img">
                          <img
                            className="products_img"
                            src={tie.image}
                            alt=""
                          />
                        </div>
                        <div className="tie__products_discription">
                          <p className="tie__products_name">{tie.name}</p>
                          <p className="tie__products_price">
                            {listLang.data.price} {tie.price}$
                          </p>
                          <div className="tie__products_wrapper">
                            <Hover>
                              <button
                                className="tie__products_btn"
                                onClick={() =>
                                  buyTie({
                                    ...tie,
                                    sellerId: tie.userId,
                                  })
                                }
                                style={{
                                  backgroundColor: isNavbarNightMode
                                    ? backgroundColor
                                    : accentColor.static,
                                }}
                              >
                                {listLang.data.btn}
                              </button>
                            </Hover>
                            <button
                              className={classNames("btn__like", {
                                nolike:
                                  favouriteTies.filter(
                                    (favouriteTie: ITie) =>
                                      favouriteTie._id === tie._id
                                  ).length !== 0,
                              })}
                              onClick={() => addFavouriteTie(tie)}
                            ></button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames("popup-overlay", { overlay: openPopup })}>
          <div
            className={classNames("popup", { openpopup: openPopup })}
            ref={popupRef}
          >
            <FormSignIn />
          </div>
        </div>
      </main>
    </>
  );
};
export default TieMarket;

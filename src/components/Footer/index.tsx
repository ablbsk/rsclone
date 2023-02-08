import { FunctionComponent } from "react";
import "./footer.scss";
import { FooterType } from "../../types/home";
import { nightTheme } from "../../data/constants";

const Footer: FunctionComponent<FooterType> = ({
  accentColor,
  isNavbarNightMode,
}: FooterType) => {
  const backgroundColor = nightTheme.background.element;

  return (
    <div
      className="footer"
      style={{
        backgroundColor: isNavbarNightMode ? backgroundColor : accentColor,
      }}
    >
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer__columns_section">
            <div className="section__logo">
              <span className="footer-logo"></span>
              <p className="section__logo_text">Thank you for choosing us</p>
              <ul className="footer__section__list">
                <li className="footer__list_item">
                  <a className="item-link_sci" href=""></a>
                </li>
                <li className="footer__list_item">
                  <a className="footer__list_item-link" href=""></a>
                </li>
                <li className="footer__list_item">
                  <a className="footer__list_item-link" href=""></a>
                </li>
              </ul>
            </div>
            <div className="section__menu">
              <h3 className="footer-title">Menu</h3>
              <ul className="footer__section__list">
                <li className="footer__list_item">Home</li>
                <li className="footer__list_item">Blog</li>
                <li className="footer__list_item">Careers</li>
                <li className="footer__list_item">Clients</li>
                <li className="footer__list_item">Service</li>
              </ul>
            </div>
            <div className="section__about">
              <h3 className="footer-title">About us</h3>
              <ul className="footer__section__list">
                <li className="footer__list_item">Home</li>
                <li className="footer__list_item">Blog</li>
                <li className="footer__list_item">Careers</li>
                <li className="footer__list_item">Clients</li>
                <li className="footer__list_item">Service</li>
              </ul>
            </div>
            <div className="section__contact">
              <h3 className="footer-title">Contact us</h3>
              <ul className="footer__section__list">
                <li className="footer__list_item">
                  <a className="section__contact_link" href="">
                    +0123456789
                  </a>
                </li>
                <li className="footer__list_item">
                  <a className="section__contact_link" href="">
                    <span>TieConfigSupport@.com</span>
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright-footer">
          <div className="copyright-wrapper">
            <span className="copyright-text">Copyright 2023 by</span>
            <a className="copyright-footer__link" href=""></a>
            <a className="copyright-footer__link" href=""></a>
            <a className="copyright-footer__link" href=""></a>
            <a className="logo-link" href=""></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

import "./orderprocess.scss";

const OrderProcess = () => {
  return (
    <div className="order-process__wrapper">
      <div className="banner-top"></div>
      <div className="order-process__banner">
        <div className="title-block">
          <h2 className="order-title">
            Order
            <strong className="strong-title">Process</strong>
          </h2>
          <p className="order-title-text">
            We have made our design capabilities available to you, the real
            designer so that you can customise your own tie, scarf and even
            packaging – enjoy!
          </p>
        </div>
        <div className="order-instruction-block">
          <div className="image-order__wrapper">
            <span className="image-order first"></span>
            <div className="text-order__wrapper">
              <p className="instruction-block__text">CHOOSE </p>
              <strong className="strong-text">CANVAS</strong>
            </div>
          </div>

          <div className="image-order__wrapper">
            <span className="image-order second"></span>
            <div className="text-order__wrapper">
              <p className="instruction-block__text">APPLY</p>
              <strong className="strong-text">COLOURS</strong>
            </div>
          </div>

          <div className="image-order__wrapper">
            <span className="image-order third"></span>

            <div className="text-order__wrapper">
              <p className="instruction-block__text">FINISH</p>
              <strong className="strong-text">YOUR CREATION</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderProcess;

/* eslint-disable no-console */
import React from "react";

import "./mainLayout.scss";
import "../../components/OrderSummary/OrderSummary.scss";

import ShoppingLayout from "../../hoc/ShoppingLayout";
import ProgressBar from "../../components/ProgressBar";
import OrderSummary from "../../components/OrderSummary";
import FormShopping from "../../components/FormShopping";

function Step1({ cartItems, ...routeProps }) {
  return (
    <div className="step__main--container">
      <div className="step__main--container--form">
        <ProgressBar {...routeProps} />
        <FormShopping {...routeProps} />
      </div>
      <div className="col">
        <OrderSummary cartItems={cartItems} />
      </div>
    </div>
  );
}

export default ShoppingLayout(Step1);

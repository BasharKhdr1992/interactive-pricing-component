import React, { useState, useEffect } from "react";
import ToggleButton from "../UI/ToggleButton";
import Check from "../assets/icon-check.svg";
import "./Pricing.css";
import Price from "./Price";

const pageViews = [0, 10000, 50000, 100000, 500000, 1000000];

const Pricing = () => {
  const [pageViewsIndex, setPageViewsIndex] = useState(0);
  const [yearlyFees, setYearlyFees] = useState(false);
  const [discountMsg, setDiscountMsg] = useState("25 % discount");
  const [collapse, setCollapse] = useState(false);

  const MIN = 0,
    MAX = 5;

  const handleRangeChange = (e) => {
    setPageViewsIndex(+e.target.value);
  };

  let monthlyFees;

  let pageViewsValue = pageViews[pageViewsIndex];

  if (pageViewsValue <= 10000) {
    monthlyFees = 8;
  } else if (pageViewsValue > 10000 && pageViewsValue <= 50000) {
    monthlyFees = 12;
  } else if (pageViewsValue > 50000 && pageViewsValue <= 100000) {
    monthlyFees = 16;
  } else if (pageViewsValue > 100000 && pageViewsValue <= 500000) {
    monthlyFees = 24;
  } else {
    monthlyFees = 36;
  }

  const checkBoxHandler = (e) => {
    setYearlyFees(e.target.checked);
  };

  const getGradient = () => {
    return ((pageViewsIndex - MIN) / (MAX - MIN)) * 100;
  };

  const rangeBarStyle = {
    backgroundImage: `linear-gradient(to right, hsl(174, 77%, 80%) 0%,
      hsl(174, 77%, 80%) ${getGradient()}%, hsl(224, 65%, 95%) ${getGradient()}%, hsl(224, 65%, 95%) 100%)`,
  };

  const updatePage = (e) => {
    const innerW = e.currentTarget.innerWidth;

    if (innerW < 1200) {
      setDiscountMsg("-25 %");
    } else {
      setDiscountMsg("25 % discount");
    }

    if (innerW < 1000) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updatePage);

    return () => window.removeEventListener("resize", updatePage);
  });

  return (
    <div className="pricing-component" role="main">
      <div className="pricing-info">
        <div className="page-views">
          {`${pageViews[pageViewsIndex]}k`} pageviews
        </div>
        {!collapse && (
          <Price yearlyFees={yearlyFees} monthlyFees={monthlyFees} />
        )}
      </div>
      <div className="range-container">
        <input
          type="range"
          style={rangeBarStyle}
          onChange={handleRangeChange}
          min={MIN}
          step={1}
          max={MAX}
          value={pageViewsIndex}
          className="range"
        />
      </div>
      {collapse && <Price yearlyFees={yearlyFees} monthlyFees={monthlyFees} />}
      <div className="discount-section">
        <p className="m-billing">Monthly Billing</p>
        <ToggleButton onCheckBoxChange={checkBoxHandler} checked={yearlyFees} />
        <p className="y-billing">Yearly Billing</p>
        <p className="discount">{discountMsg}</p>
      </div>
      <div className="pricing-footer">
        <div className="features">
          <ul>
            <li>
              <img src={Check} alt="check" />
              &nbsp;&nbsp;Unlimited websites
            </li>
            <li>
              <img src={Check} alt="check" />
              &nbsp;&nbsp;100 % data ownership
            </li>
            <li>
              <img src={Check} alt="check" />
              &nbsp;&nbsp;Email reports
            </li>
          </ul>
        </div>
        <div className="btn">
          <button>Start my trial</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

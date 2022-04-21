import React from 'react';

const Price = ({ yearlyFees, monthlyFees }) => {
  return (
    <div className="pricing">
      <span>{`$${yearlyFees ? monthlyFees * 12 * 0.75 : monthlyFees}`}</span>
      &nbsp;/&nbsp;{yearlyFees ? 'year' : 'month'}
    </div>
  );
};

export default Price;

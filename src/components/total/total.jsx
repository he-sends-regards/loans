/* eslint-disable react/prop-types */
import React from 'react';
import './total.css';

const TAX = 1.012;

const Total = ({loanData}) => {
  return (
    <div className="total">
      <span>
        {
          (TAX * ((loanData.amount - loanData.downPayment) /
          (loanData.durationInMonths))).toFixed(1)
        }
      </span>
      <span>{loanData.amount}</span>
      <span>{loanData.downPayment}</span>
      <span>{loanData.durationInMonths}</span>
      <span>{loanData.propertyTax}</span>
    </div>
  );
};

export default Total;

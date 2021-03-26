/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import './form.css';
import {v4 as uuidv4} from 'uuid';

const currencyType = {
  USD: {
    name: 'USD',
    icon: '$',
  },
  EUR: {
    name: 'EUR',
    icon: '€',
  },
  GBP: {
    name: 'GBP',
    icon: '£',
  },
};

const Form = ({setLoanData}) => {
  const [currency, setCurrency] = useState(currencyType.USD);
  const [homePrice, setHomePrice] = useState(100000);
  const [downPayment, setDownPayment] = useState(20000);
  const [durationInMonths, setDurationInMonths] = useState(24);

  const onCurrencyClick = (currencyEl) => setCurrency(currencyEl);
  const onHomePriceChange = (evt) => setHomePrice(evt.target.value);
  const onDownPaymentChange = (evt) => setDownPayment(evt.target.value);
  const onDurationInMonthsChange = (evt) =>
    setDurationInMonths(evt.target.value);

  return (
    <div className="form">
      <h3 className="form__title">New Loan Application</h3>

      <div className="loan-type">
        <span>Type of loan</span>
        <div className="loan-type__main">
          <select name="" id="">
            <option value="">Standard</option>
          </select>
          <div className="loan-type__currency">
            {
              Object.values(currencyType).map((el) => (
                <span
                  key={uuidv4()}
                  className={
                    `currency ${currency.name === el.name && 'active-currency'}`
                  }
                  onClick={() => onCurrencyClick(el)}
                >
                  {el.name}
                </span>
              ))
            }
          </div>
        </div>
      </div>
      <div className="home-price">
        <span>Home price</span>
        <div>
          <input
            type="range"
            min="50000"
            max="500000"
            step="1000"
            defaultValue={homePrice}
            onChange={onHomePriceChange}/>
          <input
            type="text"
            name=""
            id="homePrice"
            value={homePrice}
            onChange={onHomePriceChange}/>
          {currency.icon}
        </div>
      </div>
      <div className="home-price">
        <span>Down payment</span>
        <div>
          <input
            type="range"
            min="10000"
            max="100000"
            step="1000"
            defaultValue={downPayment}
            onChange={onDownPaymentChange}/>
          <input
            type="text"
            name=""
            id="downPayment"
            value={downPayment}
            onChange={onDownPaymentChange}/>
          {currency.icon}
        </div>
      </div>
      <div className="home-price">
        <span>Duration in Months</span>
        <div>
          <input
            type="range"
            min="20"
            max="240"
            step="10"
            defaultValue={durationInMonths}
            onChange={onDurationInMonthsChange}/>
          <input
            type="text"
            name=""
            id="duration"
            value={durationInMonths}
            onChange={onDurationInMonthsChange}/>
          {currency.icon}
        </div>
      </div>

      <button onClick={() => {
        console.log({
          amount: homePrice,
          downPayment: downPayment,
          durationInMonths: durationInMonths,
          propertyTax: 1.2,
        });

        return setLoanData({
          amount: homePrice,
          downPayment: Number(downPayment),
          durationInMonths: durationInMonths,
          propertyTax: 1.2,
        });
      }}>
        GET REAL MORTRAGE OFFER
      </button>
    </div>
  );
};

export default Form;

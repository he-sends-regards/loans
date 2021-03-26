import React, {useState} from 'react';
import Form from '../form/form';
import Total from '../total/total';
import './main-page.css';

const MainPage = () => {
  const [loanData, setLoanData] = useState({
    amount: 100000,
    downPayment: 20000,
    loanTerm: 2,
    propertyTax: 1.2,
  });

  return (
    <main>
      <div className="main__header">
        <h1>Calculate and Compare Your Loans</h1>
        <p className="main__header_lorem">Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Deleniti necessitatibus, dolores adipisci vitae
        voluptatum ut laboriosam aut? Repudiandae ipsum cumque laudantium unde
        et aliquid, impedit</p>
      </div>

      <div className="main__loan-count">
        <Form setLoanData={setLoanData}/>
        <Total loanData={loanData}/>
      </div>
    </main>
  );
};

export default MainPage;

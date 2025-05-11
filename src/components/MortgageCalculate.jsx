import React, { useState } from "react";

import { formatNumber } from "../shared/lib/add-price-space";

export const MortgageCalculate = () => {
  const [amount, setAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayable, setTotalPayable] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [error, setError] = useState("");

  const calculateMonthlyPayment = () => {
    if (!amount || !interestRate || !loanTerm) {
      setError("Please fill in all fields.");
      alert("Please fill all the fields !!!");
      setMonthlyPayment("");
      return;
    }

    const loanAmount =
      parseFloat(amount) - (downPayment ? parseFloat(downPayment) : 0);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    const numerator = loanAmount * r * Math.pow(1 + r, n);
    const denominator = Math.pow(1 + r, n) - 1;
    const monthlyPayment = (numerator / denominator).toFixed(2);

    setMonthlyPayment(monthlyPayment);
    const totalPayable = (monthlyPayment * n).toFixed(2);
    setTotalPayable(totalPayable);
    const totalInterest = (totalPayable - loanAmount).toFixed(2);
    setTotalInterest(totalInterest);
    setError("");
  };

  return (
    <div className="main-cont">
      <div className="label">
        <label>
          Сумма кредита (₽):
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            //   placeholder="Amount"
          />
        </label>
      </div>
      <div className="label">
        <label>
          Первоначальный взнос (₽):
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            //   placeholder="Down Payment"
          />
        </label>
      </div>
      <div className="label">
        <label>
          Процентная ставка (%):
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            //   placeholder="Annual Interest Rate"
          />
        </label>
      </div>
      <div className="label">
        <label>
          Срок кредита (год):
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            //   placeholder="Loan Term"
          />
        </label>
      </div>
      <div className="label">
        <button onClick={calculateMonthlyPayment}>Рассчитать</button>
      </div>
      {error && <h3 className="res">{error}</h3>}
      {monthlyPayment && (
        <div className="res">
          <h3>Ежемесячный платёж: {formatNumber(monthlyPayment)} ₽</h3>
          <h3>Общая сумма платежа: {formatNumber(totalPayable)} ₽</h3>
          <h3>Total Interest Amount: {formatNumber(totalInterest)} ₽</h3>
        </div>
      )}
    </div>
  );
};

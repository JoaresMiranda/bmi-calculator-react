import { useState } from 'react';

import Button from './Button';

import './bmiCalc.css';

const BmiCalc = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const clearForm = (e) => {
    e.preventDefault();
    setHeight('');
    setWeight('');
  };

  return (
    <div id="calc-container">
      <h2>BMI Calculator</h2>
      <form id="bmi-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Height:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Ex.: 1,75"
              onChange={(e) => setHeight(e.target.value)}
              value={height}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Weight:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Ex.: 72"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
          </div>
        </div>
        <div className="action-control">
          <Button id="clear-btn" text="Clear" action={clearForm} />
          <Button id="calc-btn" text="Calculate" />
        </div>
      </form>
    </div>
  );
};

export default BmiCalc;

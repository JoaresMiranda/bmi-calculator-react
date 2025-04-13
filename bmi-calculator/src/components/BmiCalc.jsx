import './bmiCalc.css';

const BmiCalc = () => {
  return (
    <div id="calc-container">
      <h2>BMI Calculator</h2>
      <form id="bmi-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Height:</label>
            <input type="text" name="height" id="height" placeholder="Ex.: 1,75" />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Weight:</label>
            <input type="text" name="weight" id="weight" placeholder="Ex.: 72" />
          </div>
        </div>
        <div className="action-control">
          <button>Clear</button>
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
};

export default BmiCalc;

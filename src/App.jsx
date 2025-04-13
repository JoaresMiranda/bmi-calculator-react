import { data } from './data/data';
import { useState } from 'react';

import BmiCalc from './components/bmiCalc';
import BmiTable from './components/bmiTable';

import './App.css';

function App() {
  const calcBmi = (e, height, weight) => {
    e.preventDefault();

    if (!height || !weight) return;

    const heightFloat = +height.replace(',', '.');
    const weightFloat = +weight.replace(',', '.');

    const bmiResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setBmi(bmiResult);

    data.forEach((item) => {
      if (bmiResult >= item.min && bmiResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });
    if (!info) return;
  };

  const resetCalc = (e) => {
    e.preventDefault();
    setBmi('');
    setInfo('');
    setInfoClass('');
  };

  const [bmi, setBmi] = useState('');
  const [info, setInfo] = useState('');
  const [infoClass, setInfoClass] = useState('');

  return (
    <div className="container">
      {!bmi ? (
        <BmiCalc calcBmi={calcBmi} />
      ) : (
        <BmiTable data={data} bmi={bmi} info={info} infoClass={infoClass} resetCalc={resetCalc} />
      )}
    </div>
  );
}

export default App;

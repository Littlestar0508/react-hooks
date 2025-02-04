import Child from './child';
import { useState } from 'react';

export default function UseMemo() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState('');

  const handleNumberChange = () => {
    const nextNumber = number + 1;
    setNumber(nextNumber);
  };

  const handleTextChange = () => {
    const nextText = text + '🦝';
    setText(nextText);
  };

  return (
    <div>
      <button type="button" onClick={handleNumberChange}>
        숫자 변경 {number}
      </button>
      <button type="button" onClick={handleTextChange}>
        텍스트 변경 {text}
      </button>
      <Child num={number} text={text} />
    </div>
  );
}

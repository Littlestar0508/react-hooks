import { useRef } from 'react';
import module from './useRef.module.css';

export default function UseRef() {
  const timer = useRef(0);

  const handleChangeTime = () => {
    timer.current += 100;
    setTimeout(() => {
      alert(`지금 걸린 시간은 ${timer.current}ms 만큼 걸렸다`);
    }, timer.current);
  };

  return (
    <button
      type="button"
      className={module['use-ref']}
      onClick={handleChangeTime}
    >
      시간 늘리기
    </button>
  );
}

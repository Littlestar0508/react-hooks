import { useRef } from 'react';
import module from './useRef.module.css';

export default function UseRef() {
  // const timer = useRef(0);

  // const handleClick = () => {
  //   timer.current += 100;
  //   setTimeout(() => {
  //     alert(`지금 걸린 시간은 ${timer.current}ms 만큼 걸렸다`);
  //   }, timer.current);
  // };

  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      (inputRef.current as HTMLInputElement).value = '안녕하세요~';
    }
  };

  return (
    <>
      <button type="button" className={module['use-ref']} onClick={handleClick}>
        useRef
      </button>
      <input type="text" ref={inputRef} />
    </>
  );
}

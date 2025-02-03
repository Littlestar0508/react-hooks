import { useState } from 'react';
import S from './useState.module.css';

export default function UseState() {
  // const [state, setState(updater)] = useState(initialValue); 로 사용
  const [state, setState] = useState(1);

  // state의 값을 변경하기 위한 함수
  // updater를 통해 상태가 변경
  const handleChangeNumber = () => {
    setState((s) => ++s);
  };

  return (
    <>
      <button
        type="button"
        className={S['use-state']}
        onClick={handleChangeNumber}
      >
        {state}
      </button>
    </>
  );
}

import { useState } from 'react';
import S from './useState.module.css';

export default function UseState() {
  // const [state, setState(updater)] = useState(initialValue); 로 사용
  // const [state, setState] = useState(1);

  // string
  // const [state1, setState1] = useState('hello');

  // boolean
  // const [state2, setState2] = useState(true);

  // Array
  // const [state3, setState3] = useState([1, 2, 3, 4, 5]);

  // Object
  // const [state4, setState4] = useState({
  // fruit: 'apple',
  // sweet: 'good',
  // color: 'red',
  // });

  // state의 값을 변경하기 위한 함수
  // updater를 통해 상태가 변경
  // const handleChangeNumber = () => {
  //   setState(state + 1);
  //   setState(state + 1);
  //   setState(state + 1);
  // };

  // 초기화 함수를 사용한 useState
  const initialFunction = (): number => {
    console.log(1);
    return 1 + 1;
  };

  // 매 렌더링마다 함수 실행
  // const [state, setState] = useState(initialFunction());

  const [state, setState] = useState(initialFunction);

  const handleChangeNumber = () => {
    setState((s) => s + 1);
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

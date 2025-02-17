import { useEffect } from 'react';
import './useEffect.module.css';

export default function UseEffect() {
  // DOM 조작 확인
  // const [count, setCount] = useState(0);

  // const handleCount = () => {
  //   setCount((count) => count + 1);
  // };

  // useEffect(() => {
  //   console.log('updated!!', count);

  //   return () => {
  //     console.log('clean up!!!');
  //   };
  // }, [count]);

  // 데이터 불러오기 dummydata
  useEffect(() => {
    let ignore = false;

    const dataFetch = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      ).then((response) => {
        return response.json();
      });

      if (!ignore) {
        console.log(response);
        console.log(1);
      }
    };

    dataFetch().catch((err) => console.log(err));

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section>
      <h1>useEffect 테스트</h1>
      {/* DOM 조작 확인 */}
      {/* <p>{count}</p> */}
      {/* <button type="button" onClick={handleCount}>
        +1
      </button> */}
    </section>
  );
}

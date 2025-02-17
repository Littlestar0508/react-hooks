import { useFormStatus } from 'react-dom';
import './useFormStatus.module.css';

export default function UseFormStatus() {
  // 동일 레벨 컴포넌트에서의 확인
  // const { pending, data, method, action } = useFormStatus();

  // console.log(pending);
  // console.log(data?.get('useFormStatus'));
  // console.log(method);
  // console.log(action);

  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
  };

  return (
    <form action={handleSubmit}>
      <label htmlFor="useFormStatus">useFormStatus</label>
      <input type="text" id="useFormStatus" name="useFormStatus" />
      <Button />
      {/* <button type="submit">{pending ? '대기' : '제출'}</button> */}
    </form>
  );
}

function Button() {
  const { pending, data, method, action } = useFormStatus();

  console.log(pending);
  console.log(data?.get('useFormStatus'));
  console.log(method);
  console.log(action);

  return <button type="submit">{pending ? '대기' : '제출'}</button>;
}

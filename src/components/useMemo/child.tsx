import { useMemo } from 'react';

const getNumber = (number: number): number => {
  console.log('숫자 변경');
  return number;
};

const getText = (text: string) => {
  console.log('텍스트');
  return text;
};

export default function Child({
  num = 10,
  text = '',
}: {
  num?: number;
  text?: string;
}) {
  const showNumber = useMemo(() => getNumber(num), [num]);
  const showText = useMemo(() => getText(text), [text]);

  return (
    <>
      <div>{showNumber}</div>
      <div>{showText}</div>
    </>
  );
}

import { useContext } from 'react';
import ParentContext from './context';

export default function GrandChildren() {
  const contextValue = useContext(ParentContext);

  return <div>{contextValue}</div>;
}

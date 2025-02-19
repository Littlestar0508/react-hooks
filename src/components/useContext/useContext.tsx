import { useState } from 'react';
import Children from './children';
import ParentContext from './context';

export default function UseContext() {
  const [sendData, setSendData] = useState('hi my name is oasis');

  return (
    <>
      <ParentContext.Provider value={sendData}>
        <div>useContext</div>
        <Children />
      </ParentContext.Provider>
    </>
  );
}

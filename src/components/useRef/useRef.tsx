import { useRef, useState } from 'react';
import module from './useRef.module.css';

export default function UseRef() {
  /* -------------------------------------------------------------------------- */
  /*                             setTimeout 의 시간 늘리기                            */
  /* -------------------------------------------------------------------------- */

  // const timer = useRef(0);

  // const handleClick = () => {
  //   timer.current += 100;
  //   setTimeout(() => {
  //     alert(`지금 걸린 시간은 ${timer.current}ms 만큼 걸렸다`);
  //   }, timer.current);
  // };

  /* -------------------------------------------------------------------------- */
  /*                              input 태그 value 조작                             */
  /* -------------------------------------------------------------------------- */
  // const inputRef = useRef(null);

  // const handleClick = () => {
  //   if (inputRef.current) {
  //     (inputRef.current as HTMLInputElement).value = '안녕하세요~';
  //   }
  // };

  /* -------------------------------------------------------------------------- */
  /*                                 비디오 태그 컨트롤                                 */
  /* -------------------------------------------------------------------------- */

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <button type="button" className={module['use-ref']} onClick={handleClick}>
        useRef
      </button>
      {/* <input type="text" ref={inputRef} /> */}
      <video
        width="250"
        ref={videoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

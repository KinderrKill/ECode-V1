import { useEffect } from 'react';

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

type propsType = {
  value: string;
};

export default function GlitchedTitle(props: propsType) {
  useEffect(() => {
    const text = document.querySelector<HTMLTitleElement>('h1');
    if (!text) return;

    text.onmouseover = (event) => {
      if (!event.target) return;

      const target = event.target as HTMLTitleElement;

      let iterations = 0;
      const interval = setInterval(() => {
        target.innerText = target.innerText
          .split('')
          .map((letter, index) => {
            if (index < iterations) return props.value[index];
            else return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join('');

        if (iterations++ >= props.value.length) {
          clearInterval(interval);
        }
      }, 50);
    };
  }, []);
  return (
    <h1 className='uppercase select-none text-gray-300 hover:text-white hover:scale-105 transition-all hover-underline'>
      {props.value}
    </h1>
  );
}

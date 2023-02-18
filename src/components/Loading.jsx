import React, { useEffect, useState } from 'react';

function Loading() {
  const [introduceReveal, setIntroduceReveal] = useState(false);
  const [typing, setTyping] = useState('');

  const typingHello = 'hello';

  useEffect(
    function () {
      const timeout = setTimeout(function () {
        setTyping(typingHello.slice(0, typing.length + 1));
      }, 120);
      const timeoutbis = setTimeout(function () {
        setIntroduceReveal(true);
      }, 1500);

      return () => clearTimeout(timeout, timeoutbis);
    },
    [typing]
  );

  return (
    <main className=" row-start-2 flex flex-grow  text-white">
      <header className="flex flex-grow flex-col-reverse justify-evenly items-center row-start-2 col-start-2 col-span-3">
        <h1 className="font-nunito font-bold text-4xl">IRIS GÉNÉVRIER</h1>
        <h2
          className={
            introduceReveal
              ? 'font-nunito font-extralight text-2xl duration-500 animate-revelation'
              : 'invisible'
          }
        >
          MY NAME IS
        </h2>
        <span className={`font-dancing font-semibold text-5xl`}>{typing}</span>
      </header>
    </main>
  );
}

export default Loading;

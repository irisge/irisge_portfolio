import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {

 

  return (
    <>
      <Head>
        <title>Iris Génévrier, a Web Developer, portfolio</title>
        <meta
          name="description"
          content="Hello, I'm Iris Génévrier, a web developer. This is my portfolio where you can see my previous projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

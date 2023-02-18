import React, { useState, useEffect } from 'react';
import Loading from '@/components/Loading';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 6000);
  }, []);

  return (
    <>
      {loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <Loading />
      )}
    </>
  );
}

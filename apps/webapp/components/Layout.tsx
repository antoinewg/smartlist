import React from 'react';
import Head from 'next/head';

import Footer from './Footer';

export default function Layout({
  children,
}: React.PropsWithChildren<{ children: unknown }>) {
  return (
    <>
      <Head>
        <title>SmartList</title>
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
}

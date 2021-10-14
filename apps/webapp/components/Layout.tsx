import React from 'react';
import Head from 'next/head';

import Footer from './Footer';
import { Colors } from '../libs/ui/theme';
import Header from './Header';

export default function Layout({
  children,
}: React.PropsWithChildren<{ children: unknown }>) {
  return (
    <>
      <Head>
        <title>SmartLists</title>
        <meta name="theme-color" content={Colors.primary} />
      </Head>
      <Header />
      <main className="m-8">{children}</main>
      <Footer />
    </>
  );
}

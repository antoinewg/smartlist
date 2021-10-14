import React from 'react';
import { useRouter } from 'next/router';

const NavItem = ({ item }: { item: string }) => {
  const router = useRouter();
  return <>{router.pathname === '/' ? item : ''}</>;
};

export default NavItem;

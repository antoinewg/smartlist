import React from 'react';
import Link from 'next/link';
import { Colors } from '../libs/ui/theme';

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Todo', path: '/newtodo' },
  { name: 'Settings', path: '/settings' },
];

export default function Header() {
  return (
    <header
      className="flex w-full justify-between items-center p-8"
      style={{ backgroundColor: Colors.background }}
    >
      <h3>SmartLists 🦊</h3>
      <nav className="flex space-x-8">
        {navLinks.map((link, index) => (
          <ul key={link.name}>
            <Link href={link.path} passHref={true}>
              <li key={index}>{link.name}</li>
            </Link>
          </ul>
        ))}
      </nav>
    </header>
  );
}

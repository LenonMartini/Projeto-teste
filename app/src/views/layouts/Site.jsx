import React from 'react';
import { Nav } from './componentes/Nav/nav';
import { NavBar } from './componentes/NavBar/navBar';


export const Site = ({ children }) => {
  return (
    <div>
      <Nav />
      <NavBar />
      <main>
        {children}
      </main>
    </div>
  );
};

import React from 'react';
import { Nav } from './componentes/Nav/nav';
import { NavBar } from './componentes/NavBar/navBar';


export const Site = ({ children }) => {
  return (
    <div>
      <Nav />
      <NavBar />
      <main className="container mt-5">
        {children}
      </main>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      {/* Aici sa adaugati link-uri catre paginile voastre */}
      <Link to="/">Home</Link>
      <Link to="/about"> About</Link>
    </header>
  );
}

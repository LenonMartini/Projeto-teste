import React from 'react';
import { MRoute } from './routes/MRoute';
import { Toaster } from 'react-hot-toast';
import './App.css';
const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <MRoute />
    </>
  );
};

export default App;

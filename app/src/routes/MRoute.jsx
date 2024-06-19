import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Site } from '../views/layouts/Site';
import { Home } from '../views/home';

export const MRoute = () => {
  return useRoutes([
    {
      path: '/',
      element: (
        <Site>
          <Home />
        </Site>
      ),
    },
  ]);
};

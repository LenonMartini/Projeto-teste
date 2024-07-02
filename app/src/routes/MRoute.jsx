import React, { Profiler } from 'react';
import { useRoutes } from 'react-router-dom';
import { Site } from '../views/layouts/Site';
import { Home } from '../views/home';
import { Profile } from '../views/profile';
import { Login } from '../views/login';
import { RequireAuth } from '../contexts/Auth/RequireAuth';

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
    {
      path: '/profile',
      element: (
        <RequireAuth>
          <Site>
            <Profile />
          </Site>
        </RequireAuth>
      ),
    },
    {
      path: '/login',
      element: (
       
        <Login />
        
      ),
    },
  ]);
};

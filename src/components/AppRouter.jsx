import React, { useContext, } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/context';
import { publicRoutes, privateRoutes,} from '../router/routes'
import { Loader } from './UI/Loader/Loader';

export const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading == true) {
    return <Loader/>
  }

  return (
    isAuth 
    ? 
    <Routes>
        {privateRoutes.map((route) => 
          <Route
            exact = {route.exact}
            path = {route.path}
            element = {route.element}
            key = {route.path}
          />
        )}
        <Route
          path="*"
          element={<Navigate to="/posts"/>}
        />
    </Routes>
    : 
    <Routes>
        {publicRoutes.map((route) => 
          <Route
            exact = {route.exact}
            path = {route.path}
            element = {route.element}
            key = {route.path}
          />
        )}
        <Route
          path="*"
          element={<Navigate to="/login"/>}
        />
    </Routes>
  )
}

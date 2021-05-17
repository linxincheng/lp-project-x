import {BrowserRouter as Router} from 'react-router-dom'
import React, { ReactNode } from 'react';
import {Navigate, Route, Routes} from 'react-router';
import {TestPage} from './pages/test/index'

export const Routers = ({children}: {children: ReactNode}) => {
  return (<>
    <Router>
      <Routes>
        {/* 在这里写路由 */}
        <Route path={'/test'} element={<TestPage />}>
        </Route>
        <Navigate to={window.location.pathname + '/test'}/>
      </Routes>
    </Router>
  </>
  )
}
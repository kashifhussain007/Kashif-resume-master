import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useLayoutEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { useLocation } from 'react-router-dom';
import Headermain from '../header';
import './App.css';
import AppRoutes from './routes';

const App = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <Headermain />
      <AppRoutes pathname={pathname} />
    </div>
  );
};

export default App;

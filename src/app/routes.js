import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Socialicons } from '../components/socialicons';
import { About } from '../pages/about';
import { CaseStudy } from '../pages/case-study';
import { ContactUs } from '../pages/contact';
import { Home } from '../pages/home';
import { Portfolio } from '../pages/portfolio';

const AppRoutes = ({ pathname }) => {
  return (
    <div className="s_c">
      <TransitionGroup>
        <CSSTransition
          key={pathname}
          timeout={{
            enter: 400,
            exit: 400,
          }}
          classNames="page"
          unmountOnExit
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/case-study/*" element={<CaseStudy />} />
            <Route exact path="/contact" element={<ContactUs />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Socialicons />
    </div>
  );
};

export default AppRoutes;

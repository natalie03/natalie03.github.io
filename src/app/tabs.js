import classNames from 'classnames';
import React, { useEffect, useState } from "react";
import Technologies from './technologies';
import Work from './work';
import About from './about';
import { CSSTransition } from 'react-transition-group';

const tabs = [
  { name: "About", id: "about", childCpt: <About /> },
  { name: "Work Experience", id: "work", childCpt: <Work />},
  { name: "Technologies", id: "tech", childCpt: <Technologies />}
]

const Tabs = () => {
  const [current, setCurrent] = useState(0);

  function handleTabClick(index) {
    setCurrent(index);
  }
  return (
    <div className="tabs">
      <div role="tablist" aria-label="Site Navigation" className="tabs__nav">
        <div className="container">
          <div className="tabs__flex-wrap">
            {tabs.map((tab, index) => (
              <button 
                className={classNames({'active': current === index})}
                key={`${tab.id}__title`}
                role="tab__button"
                aria-selected={current === index}
                aria-controls={tab.id}
                onClick={() => handleTabClick(index)}
                id={`${tab.id}_title`}>
                {tab.name}
              </button>
            ))}
            </div>
        </div>
      </div>
      <div className="tabs__body">
          {tabs.map((tab, index) => (
            <CSSTransition key={`${tab.id}__content`} in={current === index} timeout={600} classNames="my-node">
              <div
                className={classNames(`${tab.id}__content`, 'tab__content')}
                tabIndex="0"
                role="tabpanel"
                id={tab.id}
                aria-labelledby={`${tab.id}_title`}
                hidden={current!== index}>
                  <div className="tabs__transition" />
                  <div className="container tabs__text">
                    {tab.childCpt}
                  </div>
              </div>
          </CSSTransition>
          ))}
      </div>
    </div>
  );
}

export default Tabs;
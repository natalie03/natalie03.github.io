import classNames from 'classnames';
import React from "react";

const About = () => {
    const heading = "Hi,%I'm%Natalie";

  return (
    <>
    <div>
      <h1 className="header__title wavetext">
        {heading.split("").map((letter, i) => (
          <span className={classNames({'spacer' : letter === '%'})} key={ `${letter}_${i}` }>{letter === '%' ? '' : letter}</span>
        ))}
      </h1>        
    </div>
      <p className="header__intro">
        a creative Front-End developer based in Portland, OR. Currently digging <span>React</span>, <span>CSS &amp; JS animation</span>, and fast-as-heck <span>rapid prototyping</span>.
      </p>
    </>
  );
}

export default About
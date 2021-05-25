import Tabs from './tabs';
import classNames from 'classnames';
import React from "react";

const Content = () => {
  return (
    <div className={classNames('content')}>
      <main>
        <Tabs />
      </main>
      <footer aria-label="Contact Information">
        <a href="mailto:me@nataliecmiller.com">me@nataliecmiller.com</a>
      </footer>
    </div>
  )
}

export default Content;
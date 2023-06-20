import React from 'react';
import Avatar from './components/avatar/avatar';

function Main(): JSX.Element {
  return (
    <div className="container">
      <header>
        <Avatar />
        <div className="title"></div>
        <ul className="links">
          <li>Telegram</li>
          <li>GitHub</li>
          <li>Resume</li>
        </ul>
      </header>
      <section>

      </section>
    </div>
  );

};

export default Main;

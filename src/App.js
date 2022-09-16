import React from 'react';
import "./App.css";

import verses from './data/verses.json';

const renderVerse = (verses) => {

  const fragments = [];
  verses.forEach((verseFragment, i) => {
    if (i === 1) {
      fragments.push(<span className="oneAnother">{verseFragment}</span>)
    } else {
      fragments.push(verseFragment);  
    }

  }) 
  return <>{fragments}</>;
}

const renderVerses = () => {
  return verses.map( 
      (verseObj, index) => 
        <div className="verseObj" key={index}>
          <span className="number">{index}</span>
          <span className="verses">{renderVerse(verseObj.verses)}</span>
          <span className="reference">{verseObj.reference}</span>
        </div>
    );
}


function App() {
  return (
    <div className="App">
      <h2>59 One Anothers</h2>
      <h4>59 Bible Verses that refer to how we are to treat one another</h4>

      {renderVerses()}

      <footer>
        <p>Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), copyright © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved. The ESV text may not be quoted in any publication made available to the public by a Creative Commons license. The ESV may not be translated into any other language.</p>
        <p>Users may not copy or download more than 500 verses of the ESV Bible or more than one half of any book of the ESV Bible.</p>
      </footer>
    </div>
  );
}

export default App;

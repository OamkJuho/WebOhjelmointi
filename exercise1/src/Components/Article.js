import React from 'react';
import Lumiukko from './Lumiukko.png';

export default function Article() {
  return <div className="article">
            <div className="artikkeliOtsikko">Yläotsikko</div>
            <div><img src={Lumiukko}/></div>
            <div className="seuranta">LIVESEURANTA</div>
            <div className="artikkeliOtsikko"><span className="blue">Pääjutun otsikko </span><span>ja otsikko jatkuu tässä näin</span> </div>
            <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
            <div></div>
            


  </div>;
}

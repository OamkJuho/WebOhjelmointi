import React from "react";
import HS from './HS.png'

export default function Header() {
    return(
        <div className="headerOut">
            <div className="center">
                <div className="headerLeft">
                    <div><img className="img" src={HS}/></div>
                    <div className="headerCenter">
                        <div className="headerElement">Etusivu</div>
                        <div className="headerElement">Uutiset</div>
                        <div className="headerElement">Lehdet</div>
                        <div className="headerElement">Asiakaspalvelu</div>
                    </div>
                </div>
                <div className="headerRight"> 
                    <div className="order">Tilaa</div>
                    <div className="headerElement">Kirjaudu</div>
                    <div className="headerElement">Valikko</div>
                </div>
            </div>
        </div>
    );
}
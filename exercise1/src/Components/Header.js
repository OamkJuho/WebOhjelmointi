import React from 'react';

export default function Header() {
  return <div className="titlebar">
    <div className="title">

      <div className="bigTitle">UUUTISLEHTI</div>

        <div className="smallTitle">Etusivu</div>
        <div className="smallTitle">Uutiset</div>
        <div className="smallTitle">Lehdet</div>
        <div className="smallTitle">Asiakaspalvelu</div>

        <div className="space"> </div>

        <div className="tilaa">Tilaa</div>
        <div className="kirjaudu">Kirjaudu <i class="fas fa-bars"></i></div>
        <div className="valikko">Valikko</div>

    </div>     
  </div>;
}

import React from "react";

import Modal from 'react-modal';

import { isMobile } from 'react-device-detect';


function modalTripInfo() {
    return (
        <div>
            <div style={{marginTop: '-10%', marginLeft: '-9%',borderTop: '40px solid #3BB29D', width: '34vw', borderRadius:"24px 24px 0 0"}}></div>
            <h4 style={{padding: '2%', marginTop: '4%', fontSize: '18px', fontWeight: '600'}}>Ida - Avião</h4>
            <a style={{padding: '8% 2%', fontSize: '18px', fontWeight: '400'}}>02/01</a>
            <p style={{padding: '2%', fontSize: '18px', fontWeight: '400'}}>Aeroporto de Guarulhos - GRU <br/>
            <b style={{padding: '2% 0', fontSize: '18px', fontWeight: '500'}}>Azul linhas aereas</b><br/>
            PNR: <b style={{padding: '2% 0',fontSize: '18px', fontWeight: '500'}}>ABC123</b>
            </p>
            <button style={{color: '#FFF', border: 'none', backgroundColor: '#3BB29D', padding: '18px', marginTop: '20px', width: '18.5vw', fontSize: '18px', fontWeight: '500', borderRadius: '8px', cursor: 'pointer', whiteSpace: 'nowrap'}} onClick={closeModal}>Fechar</button>
        </div>
    )
}

export default modalTripInfo;
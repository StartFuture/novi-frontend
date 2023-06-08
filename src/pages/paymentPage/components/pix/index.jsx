import React from "react";
import { MainContainer, QrCode, Content } from "./styles";

import { IoCopyOutline } from "react-icons/io5";

export default function Pix() {
  return (
    <MainContainer>
      <QrCode />
      <Content>
        <h2 className="title">PIX copia e cola</h2>
        <div className="copyPaste">
          <div>
            <input type="text" defaultValue={"39405080812030491820"} />
          </div>
          <div>
            <IoCopyOutline fontSize={21} />
          </div>
        </div>
        <p className="description">
          Leia o QR code ou identifique o PIX via código. Ao confirmar o
          pagamento, sua viagem está agendada! Caso queira cancelar o pagamento,
          ligue na nossa central. Boa viagem !
        </p>
      </Content>
    </MainContainer>
  );
}

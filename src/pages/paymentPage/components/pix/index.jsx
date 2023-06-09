import React, { useState } from "react";
import { MainContainer, QrCode, Content } from "./styles";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { IoCopyOutline } from "react-icons/io5";

export default function Pix() {
  
  const getPixCode = () => {
    var pixCode = {
      value: "39405080812030491820",
      copied: false,
    };

    return pixCode;
  }

  const [pixCode, setPixCode] = useState(getPixCode());

  return (
    <MainContainer>
      <QrCode />
      <Content>
        <h2 className="title">PIX copia e cola</h2>
        <div className="copyPaste">
          <div>
            <input
              type="text"
              value={pixCode.value}
              onChange={({ target: { value } }) =>
                setPixCode({ value, copied: false })
              }
            />
          </div>
          <div>
            <CopyToClipboard
              text={pixCode.value}
              onCopy={() => setPixCode({ copied: true })}
            >
              <IoCopyOutline
                fontSize={21}
                style={{
                  color: "#3BB29D",
                  transform: "scaleX(-1)",
                  cursor: "pointer",
                }}
              />
            </CopyToClipboard>
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

import React, { useState } from "react";
import { Content, MainContainer } from "./styles";
import UserMenu from "pages/homePage/userMenu";
import StyledButton from "../../components/button";

export default function MyProfile() {

  const getUser = () => {
    const user = {
      id: "",
      user_name: "Marcelo Henrique",
      user_email: "marcelo.novi@gmail.com",
      user_cpf: "444.111.222.33",
      user_birth_date: "01/12/1980",
      user_phone: "11 92212322",
      user_cep: "02112-122",
      user_state: "São Paulo",
      user_city: "São Paulo",
      user_address: "Rua Adamantino",
      user_address_num: "123",
      user_address_complement: "Bloco A",
    }

    return user
  }

  const [user, setUser] = useState(getUser());

  const submitBtn = {
    text: "Salvar alteração",
  };

  return (
    <MainContainer>
      <div className="container">
        <div>
          <UserMenu />
        </div>
        <Content>
          <form action="" className="form">
            <div className="personalInfo">
              <div className="formBox">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" value={user.user_name}/>
              </div>
              <div className="formBox">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={user.user_email}/>
              </div>
              <div className="formBox">
                <label htmlFor="cpf">CPF</label>
                <input type="text" id="cpf" value={user.user_cpf}/>
              </div>
              <div className="personalInfoCouple">
                <div className="formBox">
                  <label htmlFor="birthDate">Data de nascimento</label>
                  <input type="text" id="birthDate" value={user.user_birth_date}/>
                </div>
                <div className="formBox">
                  <label htmlFor="phone">Celular</label>
                  <input type="text" id="phone" value={user.user_phone}/>
                </div>
              </div>
            </div>
            <div className="addressInfo">
              <div className="formBox">
                <label htmlFor="cep">CEP</label>
                <input type="text" id="cep" value={user.user_cep}/>
              </div>
              <div className="addressInfoCouple1">
                <div className="formBox">
                  <label htmlFor="state">Estado</label>
                  <input type="text" id="state" value={user.user_state}/>
                </div>
                <div className="formBox">
                  <label htmlFor="city">Cidade</label>
                  <input type="text" id="city" value={user.user_city}/>
                </div>
              </div>
              <div className="addressInfoCouple2">
                <div className="formBox">
                  <label htmlFor="address">Endereço</label>
                  <input type="text" id="address" value={user.user_address}/>
                </div>
                <div className="formBox">
                  <label htmlFor="addressNum">Nº</label>
                  <input type="text" id="addressNum" value={user.user_address_num}/>
                </div>
              </div>
              <div className="formBox">
                <label htmlFor="complement">Complemento</label>
                <input type="text" id="complement" value={user.user_address_complement}/>
              </div>
            </div>
            <div className="passwordInfo">
              <div className="formBox">
                <label htmlFor="oldPassword">Senha antiga</label>
                <input type="text" id="oldPassword" placeholder="Digite aqui"/>
              </div>
              <div className="formBox">
                <label htmlFor="newPassword">Nova Senha</label>
                <input type="text" id="newPassword" placeholder="Digite aqui"/>
              </div>
            </div>
            <div className="btnContainer">
              <StyledButton variant="primary" text={submitBtn.text} />
            </div>
          </form>
        </Content>
      </div>
    </MainContainer>
  );
}

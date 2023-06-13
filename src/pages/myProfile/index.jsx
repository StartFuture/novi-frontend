import React, { useState } from "react";
import { Content, MainContainer } from "./styles";
import UserMenu from "pages/homePage/userMenu";
import StyledButton from "../../components/button";
import { useNavigate } from "react-router-dom";
import MenuMobile from "pages/homePage/components/headerMenuMobile";

export default function MyProfile() {
  const nav = useNavigate();

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
    };

    return user;
  };

  const handleSubmit = (e) => {
    console.log(user);
    // nav("/home")
  };

  const [user, setUser] = useState(getUser());
  const [disableBtn, setDisableBtn] = useState(true);

  const submitBtn = {
    text: "Salvar alteração",
  };

  return (
    <MainContainer>
      <div className="container">
        <UserMenu className="menuContent" />
        <MenuMobile className="mobileMenu" />
        <Content>
          <form action="" className="form">
            <div className="personalInfo">
              <div className="formBox">
                <label htmlFor="name">Nome</label>
                <input
                  onChange={(e) => {
                    user.user_name = e.target.value;
                  }}
                  type="text"
                  id="name"
                  placeholder={user.user_name}
                />
              </div>
              <div className="formBox">
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => {
                    user.user_email = e.target.value;
                  }}
                  disabled={disableBtn}
                  style={{ backgroundColor: !disableBtn ? "" : "#c1c1c1" }}
                  type="text"
                  id="email"
                  placeholder={user.user_email}
                />
              </div>
              <div className="formBox">
                <label htmlFor="cpf">CPF</label>
                <input
                  onChange={(e) => {
                    user.user_cpf = e.target.value;
                  }}
                  disabled={disableBtn}
                  style={{ backgroundColor: !disableBtn ? "" : "#c1c1c1" }}
                  type="text"
                  id="cpf"
                  placeholder={user.user_cpf}
                />
              </div>
              <div className="personalInfoCouple">
                <div className="formBox">
                  <label htmlFor="birthDate">Data de nascimento</label>
                  <input
                    onChange={(e) => {
                      user.user_birth_date = e.target.value;
                    }}
                    disabled={disableBtn}
                    style={{ backgroundColor: !disableBtn ? "" : "#c1c1c1" }}
                    type="text"
                    id="birthDate"
                    placeholder={user.user_birth_date}
                  />
                </div>
                <div className="formBox">
                  <label htmlFor="phone">Celular</label>
                  <input
                    onChange={(e) => {
                      user.user_phone = e.target.value;
                    }}
                    type="text"
                    id="phone"
                    placeholder={user.user_phone}
                    pattern="\(\d{2}\)\d{4}-\d{4}"
                  />
                </div>
              </div>
            </div>
            <div className="addressInfo">
              <div className="formBox">
                <label htmlFor="cep">CEP</label>
                <input
                  onChange={(e) => {
                    user.user_cep = e.target.value;
                  }}
                  type="text"
                  id="cep"
                  placeholder={user.user_cep}
                />
              </div>
              <div className="addressInfoCouple1">
                <div className="formBox">
                  <label htmlFor="state">Estado</label>
                  <input
                    onChange={(e) => {
                      user.user_state = e.target.value;
                    }}
                    type="text"
                    id="state"
                    placeholder={user.user_state}
                  />
                </div>
                <div className="formBox">
                  <label htmlFor="city">Cidade</label>
                  <input
                    onChange={(e) => {
                      user.user_city = e.target.value;
                    }}
                    type="text"
                    id="city"
                    placeholder={user.user_city}
                  />
                </div>
              </div>
              <div className="addressInfoCouple2">
                <div className="formBox">
                  <label htmlFor="address">Endereço</label>
                  <input
                    onChange={(e) => {
                      user.user_address = e.target.value;
                    }}
                    type="text"
                    id="address"
                    placeholder={user.user_address}
                  />
                </div>
                <div className="formBox">
                  <label htmlFor="addressNum">Nº</label>
                  <input
                    onChange={(e) => {
                      user.user_address_num = e.target.value;
                    }}
                    type="text"
                    id="addressNum"
                    placeholder={user.user_address_num}
                  />
                </div>
              </div>
              <div className="formBox">
                <label htmlFor="complement">Complemento</label>
                <input
                  onChange={(e) => {
                    user.user_address_complement = e.target.value;
                  }}
                  type="text"
                  id="complement"
                  placeholder={user.user_address_complement}
                />
              </div>
            </div>
            <div className="passwordInfo">
              <div className="formBox">
                <label htmlFor="oldPassword">Senha antiga</label>
                <input type="text" id="oldPassword" placeholder="Digite aqui" />
              </div>
              <div className="formBox">
                <label htmlFor="newPassword">Nova Senha</label>
                <input type="text" id="newPassword" placeholder="Digite aqui" />
              </div>
            </div>
            <div className="btnContainer" onClick={handleSubmit}>
              <StyledButton variant="primary" text={submitBtn.text} />
            </div>
          </form>
        </Content>
      </div>
    </MainContainer>
  );
}

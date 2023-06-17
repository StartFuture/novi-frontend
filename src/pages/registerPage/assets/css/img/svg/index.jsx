
import ImgBackLogin from "../../../../../../components/imgbacklogin";
import Inputs from "../../../../../../components/inputs";
import { Content } from "../../style"
import StyledButton from "../../../../../../components/button";
import { Container } from "../../style";
import { useState, useCallback, useEffect } from "react";
import validator from "validator";
import { Routes, Route, useNavigate } from "react-router-dom";
import TermsConditionsPage from "pages/termsConditions/index";
import { cepCheck } from "services/Api";

function Registro() {
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

  const submitBtn = {
    text: "Registrar",
  };

  const handleSubmit1 = (e) => {
    console.log(user);
    // nav("/home")
  };

  const [user, setUser] = useState(getUser());
  const [disableBtn, setDisableBtn] = useState(true);


  // SEGUNDA LOGICA
  //Mascara do CEP
  //99999-999
  //REGEX
  const handleKeyUp = useCallback((e) => {
    e.currentTarget.maxLength = 9;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    e.currentTarget.value = value;
  }, []);

  //check CEP

  const [defaultAdress, setDefaultAdress] = useState();
  const [cep, setCep] = useState();

  useEffect(() => {
    if (cep && cep.length == 8) {
      cepCheck(cep).then((ress) => {
        setDefaultAdress(ress.data);
        setAddressInfo({
          ...addressInfo,
          state_user: ress.data.uf,
          city: ress.data.localidade,
          address_user: ress.data.logradouro
        })
      });
    }
  }, [cep]);

  const [emailError, setEmailError] = useState("");
  const [dtBirthError, setDtBirthError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [cpfError, setCpfError] = useState("");
  const [userInfo, setUserInfo] = useState({
    name_user: "",
    date_birth: "",
    email: "",
    cpf: "",
    cellphone: "",
    password_user: "",
  });

  const [addressInfo, setAddressInfo] = useState({
    cep: "",
    state_user: "",
    city: "",
    address_user: "",
    address_number: "",
    complements: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //Email
    if (validator.isEmpty(userInfo.email)) {
      setEmailError("Por favor, insira um email!");
      return;
    }

    if (!validator.isEmail(userInfo.email)) {
      setEmailError("Por favor, insira um email válido");
      return;
    }

    setEmailError("");

    // CPF
    if (validator.isEmpty(userInfo.cpf)) {
      setCpfError("Por favor, insira um CPF!");
      return;
    }

    if (userInfo.cpf.length != 11) {
      setCpfError("CPF deve ter 11 digitos");
      return;
    }

    setCpfError("");

    // Date Birth
    if (validator.isEmpty(userInfo.date_birth)) {
      setDtBirthError("Por favor, insira uma data!");
      return;
    }

    if (!validator.isDate(userInfo.date_birth)) {
      setDtBirthError("Por favor, insira uma data válida");
      return;
    }

    setDtBirthError("");

    //Phone
    if (validator.isEmpty(userInfo.cellphone)) {
      setPhoneError("Por favor, insira um telefone!");
      return;
    }

    if (!validator.isMobilePhone(userInfo.cellphone, "pt-BR")) {
      setPhoneError("Por favor, insira um telefone válido");
      return;
    }

    setPhoneError("");

    sessionStorage.setItem("address", JSON.stringify(addressInfo));
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    navigate("/terms-conditions");
  };

  return (
    <>
      <Container>
        <ImgBackLogin />

        {/* <Inputs /> */}
        <div className="header"></div>
        <Content>


          <form action="" className="form">
            <div className="personalInfo">
              <div className="formBox">
                <label htmlFor="name">Nome Completo</label>
                <input
                required
                  type="text"
                  id="name"
                  placeholder="Digite aqui"
                  required
                  value={userInfo.name_user}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, name_user: e.target.value });
                  }}
                />
              </div>
              <div className="formBox">
                <label htmlFor="email">Email</label>
                <input
                
                  type="text"
                  id="email"
                  placeholder="Digite aqui"
                  value={userInfo.email}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, email: e.target.value });
                  }}
                  required
                />
                <small>{emailError}</small>
                <br />
              </div>
              <div className="formBox">
                <label htmlFor="cpf">CPF</label>
                <input
                required
                  type="text"
                  id="cpf"
                  placeholder="Digite aqui"
                  value={userInfo.cpf}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, cpf: e.target.value });
                  }}
                />
                <small>{cpfError}</small>
                <br />
              </div>
              <div className="personalInfoCouple">
                <div className="formBox">
                  <label htmlFor="birthDate">Data de nascimento</label>
                  <input
                  required
                    type="text"
                    id="birthDate"
                    placeholder="Digite aqui"
                    value={userInfo.date_birth}
                    onChange={(e) => {
                      setUserInfo({ ...userInfo, date_birth: e.target.value });
                    }}
                  />
                  <small>{dtBirthError}</small>
                  <br />
                </div>
                <div className="formBox">
                  <label htmlFor="phone">Celular</label>
                  <input
                  required
                    type="text"
                    id="phone"
                    pattern="\(\d{2}\)\d{4}-\d{4}"
                    placeholder="DDD+Celular"
                    value={userInfo.cellphone}
                    onChange={(e) => {
                      setUserInfo({ ...userInfo, cellphone: e.target.value });
                    }}
                  />
                  <small>{phoneError}</small>
                  <br />
                </div>
              </div>
            </div>
            <div className="addressInfo">
              <div className="formBox">
                <label htmlFor="cep">CEP</label>
                <input
                required
                  type="text"
                  id="cep"
                  placeholder="Digite aqui"
                  onKeyUp={handleKeyUp}
                  value={addressInfo.cep}
                  onBlur={(e) => {
                    setCep(e.target.value.replace(/\D/g, ""));
                  }}
                  onChange={(e) => {
                    setAddressInfo({ ...addressInfo, cep: e.target.value });
                  }}
                />
              </div>
              <div className="addressInfoCouple1">
                <div className="formBox">
                  <label htmlFor="state">Estado</label>
                  <input
                    type="text"
                    id="state"
                    placeholder="Digite aqui"
                    disabled
                    defaultValue={defaultAdress?.uf}
                  />
                </div>
                <div className="formBox">
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    placeholder="Digite aqui"
                    disabled
                    defaultValue={defaultAdress?.localidade}
                  />
                </div>
              </div>
              <div className="addressInfoCouple2">
                <div className="formBox">
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Digite aqui"
                    disabled
                    defaultValue={defaultAdress?.logradouro}
                  />
                </div>
                <div className="formBox">
                  <label htmlFor="addressNum">Nº</label>
                  <input
                    required
                    type="text"
                    id="addressNum"
                    placeholder="Digite aqui"
                    value={addressInfo.address_number}
                    onChange={(e) => {
                      setAddressInfo({
                        ...addressInfo,
                        address_number: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="formBox">
                <label htmlFor="complement">Complemento</label>
                <input
                  type="text"
                  id="complement"
                  placeholder="Digite aqui"
                  value={addressInfo.complements}
                  onChange={(e) => {
                    setAddressInfo({
                      ...addressInfo,
                      complements: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="passwordInfo">
              <div className="formBox">
                <label htmlFor="newPassword">Senha</label>
                <input required type="text" id="newPassword" placeholder="Digite aqui" value={userInfo.password_user}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, password_user: e.target.value });
                  }} />
              </div>


              <div className="formBox">
                <label>Confirmar senha</label>
                <input required type="password" placeholder="Digite aqui" />
              </div>
            </div>
            <div className="btnContainer" onClick={handleSubmit}>
              <StyledButton variant="primary" text={submitBtn.text} />
            </div>

          </form>

        </Content>
      </Container>
    </>
  );
}

export default Registro;

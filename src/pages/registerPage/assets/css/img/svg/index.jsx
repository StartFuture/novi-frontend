import React, { useCallback, useState } from "react";
import ImgBackLogin from "../../../../../../components/imgbacklogin";
import Inputs from "../../../../../../components/inputs";

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

  const handleSubmit = (e) => {
    console.log(user);
    // nav("/home")
  };

  const [user, setUser] = useState(getUser());
  const [disableBtn, setDisableBtn] = useState(true);

  return (
    <>
      <ImgBackLogin />

      <Inputs />
    </>
  );
}

export default Registro;

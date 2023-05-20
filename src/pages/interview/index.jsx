import React, {useState} from "react";

import SignUpInfo from "./teste/SignUpInfo";
import PersonalInfo from "./teste/PersonalInfo";
import OtherInfo from "./teste/OtherInfo";

import { Container, LeftContainer, MainContainer, FormStyled, NavStyled } from "./styles";

import ButtonBack from "./components/buttonBack";

function Interview(){

    const allItems = document.querySelectorAll("ul li a");
    allItems.forEach(item => {
        item.addEventListener("click", function(e){
            this.classList.add("active")
        });
    })
    const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other", "Last"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
    };
  
    return (
        <div>
            <Container>
                <LeftContainer>
                    <ButtonBack/>
                    <NavStyled>
                        <ul>
                            <li><a className={page >= 0 ? "active" : ""}>Objetivo</a></li>
                            <li><a className={page > 0 ? "active" : ""}>Destino</a></li>
                            <li><a className={page > 1 ? "active" : ""}>Passeios</a></li>
                            <li><a className={page === 3 ? "active" : ""}>Saúde</a></li>
                        </ul>
                    </NavStyled>
                </LeftContainer>
                <MainContainer>
                    <FormStyled>
                        
                    <div className="progressbar">
                        <div
                        style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
                        ></div>
                    </div>
                    <div className="form-container">
                        <div className="header">
                        <h1>{FormTitles[page]}</h1>
                        </div>
                        <div className="body">{PageDisplay()}</div>
                        <div className="footer">
                        <button
                            disabled={page == 0}
                            onClick={() => {
                            setPage((currPage) => currPage - 1);
                            }}
                        >
                            Prev
                        </button>
                        <button
                            onClick={() => {
                            if (page === FormTitles.length - 1) {
                                alert("FORM SUBMITTED");
                                console.log(formData);
                            } else {
                                setPage((currPage) => currPage + 1);
                            }
                            }}
                        >
                            {page === FormTitles.length - 1 ? "Submit" : "Next"}
                        </button>
                        </div>
                    </div>
                    </FormStyled>
                </MainContainer>
            </Container>            
        </div>
    );
  }
  export default Interview;
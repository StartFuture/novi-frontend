import React from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { FaUserAlt, FaCalendarAlt } from "react-icons/fa";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Modal from 'react-modal';

import {
  MainContainer,
  ContainerLeft,
  LeftImage,
  Container,
  Footer,
  ButtonPrev,
  ButtonNext,
  Calendar,

} from "./styles";

import ButtonBack from "./components/buttonBack";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ResultTrip() {

  const navigate = useNavigate();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleSubmit = (e) => {
    navigate('/newTrip');
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      width: '25vw',
      height: '300px',
      margin: 'auto',
      borderRadius: '24px',
      overflowX: 'hidden',
    },
  };

  return (
    <div>
      <MainContainer>
        <ContainerLeft>
          <LeftImage>
            <ButtonBack className="buttonBack" />
          </LeftImage>
        </ContainerLeft>
        <Container>
          {/* <button >Open Modal</button> */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Trip Info"
            style={customStyles}
          >
            <div style={{marginTop: '-10%', marginLeft: '-9%',borderTop: '40px solid #3BB29D', width: '34vw', borderRadius:"24px 24px 0 0"}}></div>
            <h4 style={{padding: '2%', marginTop: '4%', fontSize: '18px', fontWeight: '600'}}>Ida - Avião</h4>
            <a style={{padding: '8% 2%', fontSize: '18px', fontWeight: '400'}}>02/01</a>
            <p style={{padding: '2%', fontSize: '18px', fontWeight: '400'}}>Aeroporto de Guarulhos - GRU <br/>
              <b style={{padding: '2% 0', fontSize: '18px', fontWeight: '500'}}>Azul linhas aereas</b><br/>
              PNR: <b style={{padding: '2% 0',fontSize: '18px', fontWeight: '500'}}>ABC123</b>
              </p>
            <button style={{color: '#FFF', border: 'none', backgroundColor: '#3BB29D', padding: '18px', marginTop: '20px', width: '18.5vw', fontSize: '18px', fontWeight: '500', borderRadius: '8px', cursor: 'pointer', whiteSpace: 'nowrap'}} onClick={closeModal}>Fechar</button>
          </Modal>

          <div className="bannerBasicInfo">
            <div className="bannerTitle">
              <h4 className="destinyCity">Rio de Janeiro</h4>
              <h5 className="totalPayment">Total a pagar</h5>
            </div>
            <div className="bannerInfo">
              <div className="iconsDescription">
                <FaUserAlt className="peopleIcon" />
                <small>2</small>
                <FaCalendarAlt className="calendarIcon" />
                <small>14 dias</small>
              </div>
              <div className="totalPaymentValue">
                <h2>R$ 5.000,00</h2>
              </div>
            </div>
          </div>
          <div className="sectionInfo">
            <h3>Rio de Janeiro</h3>
            <div className="horizontalLine"></div>
            <div className="iconsDescription">
              <FaUserAlt className="peopleIcon" />
              <small>2</small>
              <FaCalendarAlt className="calendarIcon" />
              <small>14 dias</small>
            </div>
          </div>
          <div className="sectionTripInfo">
            <div className="tripInfo">
              <div className="displayFlexRow">
                <div className="verticalLine"></div>
                <div className="displayFlexColumn">
                  <h4>Ida - Avião</h4>
                    <a className="showDetailsTrip" onClick={openModal}>Ver detalhes</a>
                </div>
                <p className="dateTrip">02/Jan</p>
              </div>
              <div className="displayFlexRow">
                <div className="verticalLine"></div>
                <div className="displayFlexColumn">
                  <h4>Kart - Outdoor</h4>
                    <a className="showDetailsTrip" onClick={openModal}>Ver detalhes</a>
                </div>
                <p className="dateTrip">02/Jan</p>
              </div>
              <div className="displayFlexRow">
                <div className="verticalLine"></div>
                <div className="displayFlexColumn">
                  <h4>Restaurante - Paris 6</h4>
                    <a className="showDetailsTrip" onClick={openModal}>Ver detalhes</a>
                </div>
                <p className="dateTrip">02/Jan</p>
              </div>
              <div className="displayFlexRow">
                <div className="verticalLine"></div>
                <div className="displayFlexColumn">
                  <h4>Volta - Avião</h4>
                    <a className="showDetailsTrip" onClick={openModal}>Ver detalhes</a>
                </div>
                <p className="dateTrip">02/Jan</p>
              </div>
            </div>
            <div className="tripCalendar">
              <Calendar>
                <div className="month"><div>Janeiro <span className="year">2023</span> <a><IoIosArrowBack className="arrowLPosition"></IoIosArrowBack></a><a><IoIosArrowForward className="arrowRPosition"></IoIosArrowForward></a></div></div>
                <div className="days">
                  <span>Seg</span>
                  <span>Ter</span>
                  <span>Quar</span>
                  <span>Quin</span>
                  <span>Sex</span>
                  <span>Sab</span>
                  <span>Dom</span>
                </div>
                <div className="dates">
                  <button>
                    <time>1</time>
                  </button>
                  <button>
                    <time>2</time>
                  </button>
                  <button>
                    <time>3</time>
                  </button>
                  <button>
                    <time>4</time>
                  </button>
                  <button>
                    <time>5</time>
                  </button>
                  <button>
                    <time>6</time>
                  </button>
                  <button>
                    <time>7</time>
                  </button>
                  <button>
                    <time>8</time>
                  </button>
                  <button>
                    <time>9</time>
                  </button>
                  <button>
                    <time>10</time>
                  </button>
                  <button>
                    <time>11</time>
                  </button>
                  <button>
                    <time>12</time>
                  </button>
                  <button>
                    <time>13</time>
                  </button>
                  <button>
                    <time>14</time>
                  </button>
                  <button>
                    <time>15</time>
                  </button>
                  <button>
                    <time>16</time>
                  </button>
                  <button>
                    <time>17</time>
                  </button>
                  <button>
                    <time>18</time>
                  </button>
                  <button>
                    <time>19</time>
                  </button>
                  <button>
                    <time>20</time>
                  </button>
                  <button>
                    <time>21</time>
                  </button>
                  <button>
                    <time>22</time>
                  </button>
                  <button>
                    <time>23</time>
                  </button>
                  <button>
                    <time>24</time>
                  </button>
                  <button>
                    <time>25</time>
                  </button>
                  <button>
                    <time>26</time>
                  </button>
                  <button>
                    <time>27</time>
                  </button>
                  <button>
                    <time>28</time>
                  </button>
                  <button>
                    <time>29</time>
                  </button>
                  <button>
                    <time>30</time>
                  </button>
                  <button>
                    <time>31</time>
                  </button>
                </div>
              </Calendar>
            </div>
          </div>
          <Footer>
            <ButtonPrev onClick={handleSubmit}>
              Gerar outra viagem
            </ButtonPrev>
            <ButtonNext>
              Prosseguir
            </ButtonNext>
          </Footer>
        </Container>
      </MainContainer>
    </div>
  )
}

export default ResultTrip;
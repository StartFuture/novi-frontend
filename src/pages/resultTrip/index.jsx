import React from "react";

import { useNavigate } from "react-router-dom";

import { FaUserAlt, FaCalendarAlt } from "react-icons/fa";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Modal from 'react-modal';

import { isMobile } from 'react-device-detect';

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

  const handleBack = (e) => {
    navigate('/new-trip');
  }

  const handleSubmit = (e) => {
    navigate('/payment');
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  const customStyles = {
    content: {
      width: '367px',
      height: '308px',
      margin: 'auto',
      padding: '30px',
      borderRadius: '24px',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    },
  };

  const customStylesMobile = {
    content: {
      width: '80%',
      height: '37%',
      margin: 'auto',
      padding: '30px',
      borderRadius: '24px',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    },
  };

  return (
    <div>
      <MainContainer>
          <LeftImage>
            <ButtonBack className="buttonBack" />
          </LeftImage>
        <Container>
          {
            isMobile ? <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Trip Info"
            style={customStylesMobile}
          > 
            <div>
              <div style={{marginTop: '-30px', marginLeft: '-30px',borderTop: '40px solid #3BB29D', width: '100vw', borderRadius:"24px 24px 0 0"}}></div>
              <h4 style={{padding: '2% 0px', marginTop: '4%', fontSize: '18px', fontWeight: '600'}}>Ida - Avião</h4>
              <a style={{padding: '2% 0px', fontSize: '18px', fontWeight: '400'}}>02/01</a>
              <p style={{padding: '3% 0px 0px', fontSize: '18px', fontWeight: '400'}}>
                Aeroporto de Guarulhos - GRU <br/>
                <b style={{padding: '2% 0px', fontSize: '18px', fontWeight: '500'}}>Azul linhas aereas</b><br/>
                PNR: <b style={{padding: '2% 0px',fontSize: '18px', fontWeight: '500'}}>ABC123</b>
              </p>
              <div style={{display: 'flex', alignItems: 'flex-end', height: '50%'}}>
                <button style={{color: '#FFF', border: 'none', backgroundColor: '#3BB29D', width: '100%', height: '50%', fontSize: '18px', fontWeight: '500', borderRadius: '8px', cursor: 'pointer', whiteSpace: 'nowrap', verticalAlign: 'center'}} onClick={closeModal}>Fechar</button>
              </div>
            </div>
            </Modal>
            :
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Trip Info"
            style={customStyles}
          >
            <div>
              <div style={{marginTop: '-30px', marginLeft: '-30px', borderTop: '40px solid #3BB29D', width: '34vw', borderRadius:"24px 24px 0 0"}}></div>
              <h4 style={{padding: '2% 0px', marginTop: '4%', fontSize: '18px', fontWeight: '600'}}>Ida - Avião</h4>
              <a style={{padding: '2% 0px', fontSize: '18px', fontWeight: '400'}}>02/01</a>
              <p style={{padding: '3% 0px 0px', fontSize: '18px', fontWeight: '400'}}>
                Aeroporto de Guarulhos - GRU <br/>
                <b style={{padding: '2% 0px', fontSize: '18px', fontWeight: '500'}}>Azul linhas aereas</b>
                <br/>PNR: <b style={{padding: '2% 0px',fontSize: '18px', fontWeight: '500'}}>ABC123</b>
              </p>
              <div style={{display: 'flex', alignItems: 'flex-end', height: '50%'}}>
                <button style={{color: '#FFF', border: 'none', backgroundColor: '#3BB29D', width: '100%', height: '50%', fontSize: '18px', fontWeight: '500', borderRadius: '8px', cursor: 'pointer', whiteSpace: 'nowrap', verticalAlign: 'center'}} onClick={closeModal}>Fechar</button>
              </div>
            </div>
            
          </Modal>
          }

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
              <div className="month">
                <div>January
                  <span className="year">2019
                  </span>
                </div>
                <div className="flexArrow">
                  <a><IoIosArrowBack className="arrowLPosition"></IoIosArrowBack></a>
                  <a><IoIosArrowForward className="arrowRPosition"></IoIosArrowForward></a>
                </div>
              </div>
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


              <div className="travelInfoBox">
                <div className="pointStyle"></div>
                <div className="alignItems">
                  <h2>Rio de Janeiro</h2>
                  <p>14 dias</p>
                </div>
              </div>
            </Calendar>

            </div>
          </div>
          <Footer>
            <ButtonPrev onClick={handleBack}>
              Gerar outra viagem
            </ButtonPrev>
            <ButtonNext onClick={handleSubmit}>
              Prosseguir
            </ButtonNext>
          </Footer>
        </Container>
      </MainContainer>
    </div>
  )
}

export default ResultTrip;
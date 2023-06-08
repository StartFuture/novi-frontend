import React from "react";
import {
  LayoutGrid, PageGrid, MainDiv, SecondaryDiv, Button, QuadroDeViagem, DaysLeft, Temperature, InfoTravel, UpperDiv, Calendar

} from "../loggedHome/style"
import { ImAirplane } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai"
import { BsFillSunFill } from "react-icons/bs"
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"
import UserMenu from "../userMenu";




function LoggedHome() {
  return (

    <PageGrid>
      <LayoutGrid>
<UserMenu></UserMenu>
        <MainDiv>
          <div className="pStyle">
          <p>Fala <b> Marcelo </b>, tudo pronto para sua viagem?</p>
          </div>


          <UpperDiv>


            <QuadroDeViagem>
              <div className="titleAlign">
                <h2>Rio de Janeiro</h2>

                <p>Viagem para duas pessoas</p>
              </div>

              <div className="frameViagem">
                <p>Praia e litoral</p>
              </div>
            </QuadroDeViagem>


            <DaysLeft>
              <ImAirplane className="iconAirplane" />

              <div className="daysCount">
                <p>Faltam</p>
                <h1>40 dias</h1>
              </div>

            </DaysLeft>


            <Temperature>
              <div className="temperatureDiv">
                <BsFillSunFill className="iconTemperature" />
                <h2>32°</h2>
              </div>


              <div className="usersDiv">
                <AiOutlineUser className="iconUser" />
                <h2>2</h2>
              </div>
            </Temperature>

            <InfoTravel>

              <div className="infoBox">
                <div className="alignItems">
                  <h2>Ida - Avião</h2>
                  <p><u>Ver detalhes</u></p>
                </div>
                <p>02/Jan</p>
              </div>

              <div className="infoBox">
                <div className="alignItems">
                  <h2>Ida - Avião</h2>
                  <p><u>Ver detalhes</u></p>
                </div>
                <p>02/Jan</p>
              </div>

              <div className="infoBox">
                <div className="alignItems">
                  <h2>Ida - Avião</h2>
                  <p><u>Ver detalhes</u></p>
                </div>
                <p>02/Jan</p>
              </div>

              <div className="infoBox">
                <div className="alignItems">
                  <h2>Ida - Avião</h2>
                  <p><u>Ver detalhes</u></p>
                </div>
                <p>02/Jan</p>
              </div>
            </InfoTravel>

            <Calendar>
              <div className="month"><div>January <span className="year">2019</span> <a><IoIosArrowBack className="arrowLPosition"></IoIosArrowBack></a><a><IoIosArrowForward className="arrowRPosition"></IoIosArrowForward></a></div></div>
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


          </UpperDiv>



        </MainDiv>




      </LayoutGrid>
    </PageGrid>



  )



}

export default LoggedHome

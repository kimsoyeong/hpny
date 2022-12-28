import { useState, useEffect } from "react";
import { ReactComponent as Ticket } from "./images/Ticket.svg";
import { ReactComponent as Passport } from "./images/passport.svg";
import { ReactComponent as Passport_Open } from "./images/passport-open.svg";
import "./App.css";

import { CirclePicker } from "react-color";

function App() {
  const [passportColor, setPassportColor] = useState("#FFFFEA");
  const [passportVisible, setPassportVisible] = useState(true);
  const [passporOpen, setPassportOpen] = useState(false);

  const [name, setName] = useState("PASSENGER NAME");
  const [goal, setGoal] = useState("2023 나의 목표");
  const [ticketColor, setTicketColor] = useState("#B0C3F4");

  useEffect(() => {
    if (!passportVisible) ShowTicketName();
  }, [passportVisible]);

  function ShowTicketName() {
    let svg = document.getElementById("ticket");
    if (svg != null) {
      let i = 0;
      svg.childNodes.forEach((elem) => {
        if (
          elem.getAttribute("id") === "name" ||
          elem.getAttribute("id") === "goal"
        ) {
          svg.removeChild(svg.childNodes[i]);
        }
        i++;
      });

      let _name = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      _name.setAttribute("id", "name");
      _name.setAttribute("x", 30);
      _name.setAttribute("y", 180);
      _name.style.fill = "black";
      _name.style.font = "bold 20px Inter";
      _name.innerHTML = name.toUpperCase();
      svg.appendChild(_name);
    }
  }

  function onChangeName(e) {
    setName(e.target.value);
  }

  function onChangeGoal(e) {
    setGoal(e.target.value);
  }

  function openPassport() {
    setPassportOpen(!passporOpen);
  }

  function onClickSubmit() {
    setPassportOpen(false);
    setPassportVisible(!passportVisible);
  }

  return (
    <div className="App">
      <header className="App-header">
        {passportVisible ? (
          <>
            {!passporOpen ? (
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  margin: "0",
                  cursor: "pointer",
                }}
                onClick={openPassport}
              >
                <Passport stroke={passportColor} fill={passportColor} />
              </button>
            ) : (
              <>
                <button
                  style={{
                    border: "none",
                    background: "transparent",
                    margin: "0",
                    cursor: "pointer",
                  }}
                  onClick={openPassport}
                >
                  <Passport_Open />
                </button>
                <div style={{}}>
                  <input className="name" onChange={onChangeName} />
                  <input className="wish" onChange={onChangeGoal} />
                  <CirclePicker
                    color={ticketColor}
                    onChangeComplete={(c) => {
                      setTicketColor(c.hex);
                    }}
                    colors={[
                      "#B0C3F4",
                      "#4EDAFF",
                      "#00bcd4",
                      "#009688",
                      "#cddc39",
                      "#50FFAD",
                      "#ffeb3b",
                      "#FFD350",
                      "#ff9800",
                      "#F1B0F4",
                      "#FE4F4F",
                      "#A94FFF",
                    ]}
                  />
                  <button
                    className="submit"
                    onClick={() => {
                      onClickSubmit();
                    }}
                    style={{ width: "80px", height: "30px" }}
                  >
                    티켓확인
                  </button>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            {console.log("col", ticketColor)}
            <Ticket fill={ticketColor} />
            <button
              className="submit"
              onClick={onClickSubmit}
              style={{ width: "80px", height: "30px" }}
            >
              처음으로
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;

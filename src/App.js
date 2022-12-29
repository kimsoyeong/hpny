import { useState, useEffect } from "react";
import { ReactComponent as Ticket } from "./images/Ticket.svg";
import { ReactComponent as Passport } from "./images/passport.svg";
import { ReactComponent as Passport_Open } from "./images/passport-open.svg";
import "./App.css";

import { CirclePicker } from "react-color";

function App() {
  const [passportColor, setPassportColor] = useState("#FFFFEA");
  const [passportVisible, setPassportVisible] = useState(true);
  const [passportOpen, setPassportOpen] = useState(false);

  const [surname, setSurname] = useState("");
  const [givenname, setGivenname] = useState("");
  const [goal, setGoal] = useState("BYE 2022 HELLO 2023");
  const [ticketColor, setTicketColor] = useState("#B0C3F4");

  useEffect(() => {
    if (!passportVisible) ShowTicketName();
  }, [passportVisible]);

  useEffect(() => {
    if (passportOpen) {
      ShowPassportOpenContent();
      displayFLines();
    }
  }, [surname, goal]);

  useEffect(() => {
    displayGivenname();
    displayFLines();
  }, [givenname]);

  useEffect(() => {
    displaySLines();
  }, [goal]);

  function displayFLines() {
    let svg = document.getElementById("passport-open");
    if (svg != null) {
      let i = 0;
      svg.childNodes.forEach((elem) => {
        if (elem.getAttribute("id") === "fline") {
          svg.removeChild(svg.childNodes[i]);
        }
        i++;
      });
      let _fline = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      _fline.setAttribute("id", "fline");
      _fline.setAttribute("x", 44);
      _fline.setAttribute("y", 560);
      _fline.style.fill = "#13225165";
      _fline.style.font = "600 12px Inter";
      let fline = `NEW0${surname.toUpperCase()}00${givenname.toUpperCase()}`;
      _fline.innerHTML = fline.padEnd(50, "0");
      svg.appendChild(_fline);
    }
  }

  function displaySLines() {
    let svg = document.getElementById("passport-open");
    if (svg != null) {
      let i = 0;
      svg.childNodes.forEach((elem) => {
        if (elem.getAttribute("id") === "sline") {
          svg.removeChild(svg.childNodes[i]);
        }
        i++;
      });

      let _sline = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      _sline.setAttribute("id", "sline");
      _sline.setAttribute("x", 44);
      _sline.setAttribute("y", 572);
      _sline.style.fill = "#13225165";
      _sline.style.font = "600 12px Inter";
      let sline = `HPNY20230YEAR0${goal.replace(/ /gi, "0").toUpperCase()}`;
      _sline.innerHTML = sline.padEnd(50, "0");
      svg.appendChild(_sline);
    }
  }

  function displayGivenname() {
    let svg = document.getElementById("passport-open");
    if (svg != null) {
      let i = 0;
      svg.childNodes.forEach((elem) => {
        if (elem.getAttribute("id") === "givenname") {
          svg.removeChild(svg.childNodes[i]);
        }
        i++;
      });

      let _given = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      _given.setAttribute("id", "givenname");
      _given.setAttribute("x", 174);
      _given.setAttribute("y", 465);
      _given.style.fill = "black";
      _given.style.font = "600 14px Inter";
      _given.innerHTML = givenname.toUpperCase();
      svg.appendChild(_given);
    }
  }

  function ShowPassportOpenContent() {
    let svg = document.getElementById("passport-open");
    if (svg != null) {
      let i = 0;
      svg.childNodes.forEach((elem) => {
        if (
          elem.getAttribute("id") === "surname" ||
          elem.getAttribute("id") === "givenname" ||
          elem.getAttribute("id") === "goal"
        ) {
          svg.removeChild(svg.childNodes[i]);
        }
        i++;
      });

      let _surname = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      _surname.setAttribute("id", "surname");
      _surname.setAttribute("x", 174);
      _surname.setAttribute("y", 429);
      _surname.style.fill = "black";
      _surname.style.font = "600 14px Inter";
      _surname.innerHTML = surname.toUpperCase();
      svg.appendChild(_surname);

      let _given = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      _given.setAttribute("id", "givenname");
      _given.setAttribute("x", 174);
      _given.setAttribute("y", 465);
      _given.style.fill = "black";
      _given.style.font = "600 14px Inter";
      _given.innerHTML = givenname.toUpperCase();
      svg.appendChild(_given);

      let _goal = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      _goal.setAttribute("id", "goal");
      _goal.setAttribute("x", 174);
      _goal.setAttribute("y", 517);
      _goal.style.fill = "black";
      _goal.style.font = "600 14px Inter";
      _goal.innerHTML = goal.toUpperCase();
      svg.appendChild(_goal);
    }
  }

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
      let name = givenname + " " + surname;
      _name.innerHTML = name.toUpperCase();
      svg.appendChild(_name);

      let _goal = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );

      // 309/2 -
      _goal.setAttribute("id", "name");
      _goal.setAttribute("x", "50%");
      _goal.setAttribute("y", 462);
      _goal.style.textAlign = "center";
      _goal.style.textAnchor = "middle";
      _goal.style.fill = "white";
      _goal.style.font = "bold 20px Inter";
      _goal.innerHTML = goal.toUpperCase();
      svg.appendChild(_goal);
    }
  }

  function onChangeSurname(e) {
    setSurname(e.target.value);
  }
  function onChangeGivenname(e) {
    setGivenname(e.target.value);
  }

  function onChangeGoal(e) {
    setGoal(e.target.value);
  }

  function openPassport() {
    setPassportOpen(!passportOpen);
  }

  function onClickSubmit() {
    setPassportOpen(false);
    setPassportVisible(!passportVisible);
  }

  function init() {
    setSurname("");
    setGivenname("");
    setGoal("BYE 2022 HELLO 2023");

    let svg = document.getElementById("passport-open");
    if (svg != null) {
      let i = 0;
      svg.childNodes.forEach((elem) => {
        if (
          elem.getAttribute("id") === "surname" ||
          elem.getAttribute("id") === "givenname" ||
          elem.getAttribute("id") === "goal"
        ) {
          svg.removeChild(svg.childNodes[i]);
        }
        i++;
      });
    }
  }

  return (
    <div className="App">
      <div className="container">
        {passportVisible ? (
          <>
            {!passportOpen ? (
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
                  <div className="input_blk">
                    <div className="input_inline">
                      <text style={{ marginRight: "12px" }}>성</text>
                      <input
                        className="input_name"
                        value={surname}
                        onChange={onChangeSurname}
                        placeholder="Surname"
                        minLength={1}
                      />
                    </div>
                    <div className="input_inline">
                      <text>이름</text>
                      <input
                        className="input_name"
                        value={givenname}
                        onChange={onChangeGivenname}
                        placeholder="Given name"
                        minLength={1}
                      />
                    </div>
                  </div>
                  <div className="input_blk">
                    <text>목표</text>
                    <input
                      className="input_goal"
                      value={goal}
                      onChange={onChangeGoal}
                      placeholder="BYE 2022 HELLO 2023"
                      maxlength={22}
                    />
                  </div>
                  <div className="input_blk">
                    <text>티켓 색상</text>
                    <CirclePicker
                      className="colorpicker"
                      color={ticketColor}
                      onChangeComplete={(c) => {
                        setTicketColor(c.hex);
                      }}
                      colors={[
                        "#2CCCE4",
                        "#4EDAFF",
                        "#B0C3F4",
                        "#AB8BDD",
                        "#AB77FF",
                        "#A94FFF",
                        "#009688",
                        "#50FFAD",
                        "#7BDCB5",
                        "#cddc39",
                        "#FFD350",
                        "#ffeb3b",
                        "#ff9800",
                        "#FF5722",
                        "#FE4F4F",
                        "#FD5D85",
                        "#F1B0F4",
                        "#FFC7E9",
                      ]}
                    />
                  </div>
                  <button
                    className="submit"
                    onClick={() => {
                      onClickSubmit();
                    }}
                    style={{ width: "80px", height: "30px" }}
                  >
                    티켓발행
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
              onClick={() => {
                onClickSubmit();
                init();
              }}
              style={{ width: "80px", height: "30px" }}
            >
              처음으로
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

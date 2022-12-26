import { useState, useEffect } from "react";
import { ReactComponent as Temp } from "./images/Ticket.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("SOYEONG KIM");

  useEffect(() => {
    let svg = document.getElementsByTagNameNS(
      "http://www.w3.org/2000/svg",
      "svg"
    )[0];
    let temp = document.createElementNS("http://www.w3.org/2000/svg", "text");
    temp.setAttribute("x", 30);
    temp.setAttribute("y", 180);
    temp.style.fill = "black";
    temp.style.font = "bold 20px Inter";
    temp.innerHTML = name;

    svg.appendChild(temp);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Temp fill="#F1B0F4" />
        {/* orange: #F1B000 */}
      </header>
    </div>
  );
}

export default App;

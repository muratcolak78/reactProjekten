import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [number, setNumber] = useState(0);
  const [names, setNames] = useState([
    "Ahmet",
    "Murat",
    "Salih",
    "Kerim",
    "Mustafa",
    "Ayse",
  ]);
  const [newName, setNewName] = useState("");

  const handleChange = () => {
    setFirstName(names[number]);
    if (number == names.length - 1) setNumber(0);
    else setNumber(number + 1);
  };
  const addNameToList = () => {
    setNames([...names, newName]);
    setNewName("");
  };
  return (
    <>
      <div>
        <input
          type="text"
          id="name"
          name="name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={addNameToList}>add name</button>
      </div>
      <div></div>
      <div>{firstName}</div>
      <div>
        <button onClick={handleChange}>changeName</button>
        <div>{number}</div>
        <div>
          {names.map((isim, index) => (
            <div>{isim}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //const [yas, setYas] = useState(0);

  // let sonuc=true
  // let sonuc2=false
  // if (yas <18 ) sonuc=false;
  let isimler = ["Murat", "Zerrin", "Elif", "Nihal"];

  return (
    <>
      {/* <div>
      <label htmlFor="">Yas:</label>
      <input type="number" id="yas" name="yas"onChange={(e) => setYas(Number(e.target.value))}  />
    </div>

      <div>
        <p>{sonuc}</p>
      {sonuc ? <p>Ehliyeti alabilirsin {yas}</p> : <p>Ehliyet alamazsin</p>}
      </div> */}

      <div>
        {isimler.map((isim, nmb) => (
          <div
            style={{
              color: "white",
              backgroundColor: "black",
              borderBlock: "2px solid black",
            }}
            key={nmb}
          >
            {isim}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

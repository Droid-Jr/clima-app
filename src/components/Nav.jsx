import { useState } from "react";

const Nav = ({valueOut}) => {

  //El estado que guarda el valor del input
  const [value, setValue] = useState("")

  // setea  presionando la tecla enter
  function handleKeyEnter(e) {
    if(e.key === "Enter") valueOut(value)
  }
  // modo dark
  function handleClickDark(){
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Weather App
        </a>
        <div className="nav__menu">
          <input type="text" onKeyDown={handleKeyEnter} onChange={ (e) => setValue(e.target.value) } placeholder="Search City" />
        </div>
        <div className="nav__buttons">
          <button type="button" onClick={handleClickDark} className="nav__btn btn--dark">
            <i id="i--dark" className="bx bxs-sun"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

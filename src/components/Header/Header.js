import ya from "../../images/ya.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e) => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header class="header">
      <a href="https://github.com/nepomn9shih" class="header__logo">
        <img src={ya} alt="" />
      </a>
      <b class="header__name">МОЯ\\\<br/>ВИЗИТКА</b>
      <nav class="header__menu">
        <ul class={isMenuOpen ? "header__list active" : "header__list"}>
          <li>
          <a href="https://spb.hh.ru/resume/fbff5b2aff088f6fc80039ed1f52676d427763" target="_blank" class="header__link" rel="noreferrer">
              HH
            </a>
          </li>
          <li>
          <a href="https://github.com/nepomn9shih" target="_blank" class="header__link" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/alexander-nepomnyashchikh/" target="_blank" class="header__link" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
          <a href="https://career.habr.com/nepomn9shih" target="_blank" class="header__link" rel="noreferrer">
              Хабр.Карьера
            </a>
          </li>
          <li>
          <NavLink className="header__link" to="/about">
              О сайте
            </NavLink>
          </li>
        </ul>
        <div
          onClick={handleClick}
          class={isMenuOpen ? "header__burger active" : "header__burger"}
        >
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
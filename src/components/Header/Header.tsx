import { useState } from "react";
import "./Header.css";

export const Header = () => {
  let [searchVisible, setSearchVisible] = useState([0, "0", "none"]);
  let [menuWidth, setMenuWidth] = useState("0");

  let screenWidth = window.innerWidth;
  let iconChangeSearch = document.querySelector(".search") as HTMLElement;

  const mobileSearch = () => {
    if (searchVisible[0] === 0) {
      setSearchVisible([1, "5.4rem", "none"]);
      setTimeout(() => {
        setSearchVisible([1, "5.4rem", "block"]);
      }, 100);
      iconChangeSearch.classList.remove("fa-magnifying-glass");
      iconChangeSearch.classList.add("fa-xmark");
    } else {
      setSearchVisible([0, "0", "none"]);
      iconChangeSearch.classList.remove("fa-xmark");
      iconChangeSearch.classList.add("fa-magnifying-glass");
    }
  };

  const openMenu = () => {
    setMenuWidth("100vw");
  };
  const closeMenu = () => {
    setMenuWidth("0");
  };

  return (
    <header>
      <div className="header__menu" style={{ width: `${menuWidth}` }}>
        <i className="menu fa-solid fa-xmark" onClick={closeMenu}></i>
        <ul>
          <li onClick={closeMenu}>Jeans</li>
          <li onClick={closeMenu}>Camisas</li>
          <li onClick={closeMenu}>Suéter</li>
          <li onClick={closeMenu}>Calças moletom</li>
          <li onClick={closeMenu}>Camisas moletom</li>
        </ul>
      </div>
      <div className="header__top container">
        <div className="header__imgs">
          <img
            className="header__img-logo img-logo"
            src="/img/logo/logo-img.png"
            alt="logo da Hack Fashion"
          />
          <img
            className="header__img-name img-name header__img--display-none"
            src="/img/logo/logo-name.png"
            alt="Hack Fashion"
          />
        </div>
        <nav className="header__nav">
          <i className="fa-solid fa-location-dot"></i>
          <i className="fa-solid fa-user"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <i
            className="search fa-solid fa-magnifying-glass"
            onClick={mobileSearch}
          ></i>
          <i className="menu fa-solid fa-bars" onClick={openMenu}></i>
        </nav>
      </div>
      <div className="header__bottom container header__bottom--display-none">
        {screenWidth < 770 && (
          <>
            <div
              className="header__search "
              style={{ height: `${searchVisible[1]}` }}
            >
              <input
                id="header__input-text"
                type="text"
                name="search"
                placeholder="Pesquise"
                style={{
                  opacity: `${searchVisible[0]}`,
                  display: `${searchVisible[2]}`,
                }}
              />
              <i
                className="fa-solid fa-magnifying-glass"
                style={{
                  opacity: `${searchVisible[0]}`,
                  display: `${searchVisible[2]}`,
                }}
              ></i>
            </div>
          </>
        )}
        {screenWidth >= 770 && (
          <>
            <div className="header__search " style={{ height: `5.4rem` }}>
              <input
                id="header__input-text"
                type="text"
                name="search"
                placeholder="Pesquise"
                style={{
                  opacity: `1`,
                  display: `block`,
                }}
              />
              <i
                className="fa-solid fa-magnifying-glass"
                style={{
                  opacity: `1`,
                  display: `block`,
                }}
              ></i>
            </div>
          </>
        )}

        <nav className="header__categories">
          <ul>
            <li>Jeans</li>
            <li>Camisas</li>
            <li>Suéter</li>
            <li>Calças moletom</li>
            <li>Camisas moletom</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

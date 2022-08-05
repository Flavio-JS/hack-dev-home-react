import { useState } from "react";
import "./Header.css";

export const Header = () => {
  let [searchOnOff, setSearchOnOff] = useState([0, "0", "none"]);
  let screenWidth = window.innerWidth;

  const mobileSearch = () => {
    if (searchOnOff[0] === 0) {
      setSearchOnOff([1, "5.4rem", "block"]);
    } else {
      setSearchOnOff([0, "0", "none"]);
    }
  };

  return (
    <header>
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
            className="fa-solid fa-magnifying-glass"
            onClick={mobileSearch}
          ></i>
          <i className="fa-solid fa-bars"></i>
        </nav>
      </div>
      <div className="header__bottom container header__bottom--display-none">
        {screenWidth < 770 && (
          <>
            <div
              className="header__search "
              style={{ height: `${searchOnOff[1]}` }}
            >
              <input
                id="header__input-text"
                type="text"
                name="search"
                placeholder="Pesquise"
                style={{
                  opacity: `${searchOnOff[0]}`,
                  display: `${searchOnOff[2]}`,
                }}
              />
              <i
                className="fa-solid fa-magnifying-glass"
                style={{
                  opacity: `${searchOnOff[0]}`,
                  display: `${searchOnOff[2]}`,
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

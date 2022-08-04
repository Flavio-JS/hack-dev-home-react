import "./Header.css";

export const Header = () => {
  const mobileSearch = () => {
    alert("ble ble");
  };
  return (
    <header>
      <div className="header__top container">
        <div className="header__imgs">
          <img
            className="header__img"
            src="/img/logo/logo-img.png"
            alt="logo da Hack Fashion"
          />
          <img
            className="header__img header__img--display-none"
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
        <div className="header__search ">
          <input
            id="header__input-text"
            type="text"
            name="search"
            placeholder="Pesquise"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <nav className="header__categories">
          <ul>
            <li>Jeans</li>
            <li>Camisas</li>
            <li>Suéter</li>
            <li>Calças de noletom</li>
            <li>Camisas de moletom</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

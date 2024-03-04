import { Link } from "react-router-dom";
import { OurProducts } from "../pages/OurProducts";

export const Header = () => {
  return (
    <>
      <div className="header">
        <a href="/homepage">
          <img
            className="logo"
            id="logo"
            src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1706693453/spellworth-logo_c8idap.png"
            alt="spellworth-logo"
          />
        </a>
        <a href="/products">
          <p>Our Products</p>
        </a>
      </div>
      <hr />
    </>
  );
};

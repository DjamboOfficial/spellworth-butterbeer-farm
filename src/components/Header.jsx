import { Link } from "react-router-dom";
import { OurProducts } from "../pages/OurProducts";

export const Header = () => {
  return (
    <>
      <div className="header">
        <a href="/products">
          <p>Our Products</p>
        </a>
        <a href="/homepage">
          <img
            className="logo"
            src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1706693453/spellworth-logo_c8idap.png"
            alt="spellworth-logo"
          />
        </a>
        <a>Language</a>
      </div>
    </>
  );
};

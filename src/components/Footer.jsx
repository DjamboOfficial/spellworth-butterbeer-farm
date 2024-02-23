export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-lists">
          <div className="footer-list-1">
            <ul>
              <li>
                <h3>Our Business</h3>
              </li>
              <a href="/about">
                <li>St. Alban and the dragon</li>
              </a>
              <a href="/clients">
                <li>Spellworth and Hogwarts</li>
              </a>
            </ul>
          </div>
          <div className="footer-list-2">
            <ul>
              <li>
                <h3>Contacts</h3>
              </li>
              <li>edoardo.giambuzzi@gmail.com</li>
              <li>--</li>
            </ul>
          </div>
          <div className="footer-list-3">
            <ul>
              <li>
                <h3>Work with us</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

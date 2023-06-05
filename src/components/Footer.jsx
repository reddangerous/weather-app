import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-light text-center text-lg-start bottom">
      <div className="text-center p-3 bg-dark footer-dark text-light">
        <p>App made possible by Weather API</p>
        © {currentYear} Weather Forecasters: made with ❤️ by<br />
        <a className="text-light" href="https://davidwainaina.netlify.app/">
          David Wainaina
        </a>
      </div>
    </footer>
  );
};

export default Footer;

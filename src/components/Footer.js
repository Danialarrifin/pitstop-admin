import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-center w-full p-4 absolute max-md-bottom-10">
      <div className="text-center">
        <p>
          Copyright © 2023 -{' '}
          <a
            className="font-semibold"
            href="mailto:danialarrifin11@gmail.com"
          >
            Muhd Danial
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
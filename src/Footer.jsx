import React from "react";

const Footer = () => {
  return (
    <footer className="section footer">
      <div className="btn-footer">
        <a href="https://peterdiyo.netlify.app" className="btn">
          View Portfolio
        </a>
      </div>
      <p className="copyright">
        &copy; peter diyo's projects
        <span id="date">{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  );
};

export default Footer;

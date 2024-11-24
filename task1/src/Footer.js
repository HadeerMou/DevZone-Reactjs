import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul className="footerlink">
          <li className="li">Contact</li>
          <li className="li">About</li>
          <li className="li">Gallery</li>
          <li className="li">
            <ul className="lali">
              <li className="ll">Instagram</li>
              <li className="ll">Sections</li>
              <li className="ll">Facebook</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;

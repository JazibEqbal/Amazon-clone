import React from "react";
import "./Foooter.css";
function Foooter() {
  return (
    <div className="foooter">
      <footer>
        <a href="#" id="homee">
          Back to Top
        </a>
        <div className="foooter__container">
          <p>Connect with us</p>
          <a
            href="http://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&token=2075D5EAC7BB214089728E2183FD391706D41E94&6"
            target="_blank"
            rel="noreferrer"
          >
            <small>Facebook</small>
          </a>
          <br />
          <a
            href="http://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&token=A309DFBFCB1E37A808FF531934855DC817F130B6&6"
            target="_blank"
            rel="noreferrer"
          >
            <small>Twitter</small>
          </a>
          <br />
          <a
            href="http://www.amazon.in/gp/redirect.html?location=https://www.instagram.com/amazondotin&token=264882C912E9D005CB1D9B61F12E125D5DF9BFC7&source=standards"
            target="_blank"
            rel="noreferrer"
          >
            <small>Instagram</small>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Foooter;

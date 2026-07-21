import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Image
              src="/images/WPS_Landscape_WEB-WHITE.png"
              alt="WEPlan Solicitors"
              width={210}
              height={63}
              className="flogo"
            />
            <p className="muted">
              Glomb Solicitors P/L
              <br />
              ACN: 682 284 162
              <br />
              trading as WEPlan Solicitors
            </p>
          </div>

          <div>
            <h5>Contact Info</h5>
            <ul>
              <li>
                <a href="tel:0448760662">0448 760 662</a>
              </li>
              <li>
                <a href="mailto:kerstin@wpsolicitors.au">kerstin@wpsolicitors.au</a>
              </li>
            </ul>
          </div>

          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/#top">Home</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#why">Why Us</a></li>
              <li><a href="/#process">Our Process</a></li>
              <li><a href="/#contact">Contact</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © Glomb Solicitors P/L — Liability limited by a scheme approved under
            Professional Standards Legislation.
          </span>
          <span>Website by Fresh Creative 2025</span>
        </div>
      </div>
    </footer>
  );
}

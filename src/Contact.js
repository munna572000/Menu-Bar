import React from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

function Contact() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div class="card my-4">
            <div class="card-body ">
              <img
                src="https://digisamosa.com/kotak2/kotak/figma_emailer2/t2/images/LOGO2.png"
                className="card-img"
                alt="..."
              />
            </div>
          </div>

          <div className="card my-4">
            <div className="card-body">
              <img
                src="https://digisamosa.com/kotak2/kotak/figma_emailer2/t2/images/amazon%20flipkart.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h1 style={{ color: "red" }}>
                  Invest to get Amazon Flipkart and Myntra Vouchers!
                </h1>
                <spam>
                  <p1>We want to make investing more fun for you.Start</p1>{" "}
                  <p1>Investing again and get shopping vouchers from</p1>your
                  favourite e-commerce destination <p></p>
                </spam>
                <a
                  href="https://smallcase.kotaksecurities.com/discover/all?count=11&recentlyLaunched=true&utm_source=kotak&utm_medium=app-notif&utm_campaign=br-user-journey-2&utm_content=discover-all&utm_term=mar-2022"
                  className="btn btn-primary"
                >
                  Start investing
                </a>
              </div>
            </div>
          </div>
          <div class="card text-center my-4">
            <div class="card-body">
              <h1>Hand-Picked shopping vouchers for you</h1>
              <p>
                We have curated some vouchers as per your trading
                activities.here are some of which you reedeem
              </p>
            </div>
            <img
              src="https://digisamosa.com/kotak2/kotak/figma_emailer2/t2/images/100%20coupon.png"
              className="card-img-top"
              alt="..."
            />
            <br />
            <img
              src="https://digisamosa.com/kotak2/kotak/figma_emailer2/t2/images/200%20coupons.png"
              className="card-img-top"
              alt="..."
            />
            <br />
            <img
              src="https://digisamosa.com/kotak2/kotak/figma_emailer2/t2/images/300%20coupns.png"
              className="card-img-top"
              alt="..."
            />
          </div>
          <h2>Additional Voucher Details:</h2>
          <p>please note that the offer is valid till 31st march 2022</p>
          <p>
            trade value is the cummulative of trades executed during the offer
            perios
          </p>
          <p>This offer communication is meant only for client HD342xx </p>
          <a
            href="https://smallcase.kotaksecurities.com/discover/all?count=11&recentlyLaunched=true&utm_source=kotak&utm_medium=app-notif&utm_campaign=br-user-journey-2&utm_content=discover-all&utm_term=mar-2022"
            className="btn btn-primary"
          >
            Start investing
          </a>

          <div className="card my-4">
            <div className="card-body">
              <h5 className="card-title">
                Here are some of our other researcch recommendations
              </h5>
              <br />
              <ol>
                <li>
                  <h6 className="card-subtitle mb-2 text-muted">
                    FUNDAMENTAL CALLS
                  </h6>
                  <a
                    href="https://www.kotaksecurities.com/"
                    className="card-link"
                  >
                    https://www.kotaksecurities.com
                  </a>
                </li>
                <li>
                  <h6 className="card-subtitle mb-2 text-muted">
                    PICK OF THE WEEK
                  </h6>
                  <a
                    href="https://www.kotaksecurities.com/"
                    className="card-link"
                  >
                    https://www.kotaksecurities.com
                  </a>
                </li>
                <li>
                  <h6 className="card-subtitle mb-2 text-muted">
                    KOTAK INVESTOR'S BASKET
                  </h6>
                  <a
                    href="https://www.kotaksecurities.com/"
                    className="card-link"
                  >
                    https://www.kotaksecurities.com
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <div className="card my-4">
            <div classNsme="card-body text-center">
              <h5 className="card-title text-center">
                Special title treatment
              </h5>
              <p className="card-text text-center">HAPPY INVESTING!</p>
              <p className="card-text text-center" style={{ color: "blue" }}>
                Team Kotak Securities
              </p>
            </div>
          </div>
          <div className="card my-4">
            <div className="card-body">
              <img
                src="https://i.imgur.com/UnIGcfj.png"
                className="card-img-top"
                alt="..."
              />
              <h1>FOLLOW US ON</h1>
              <div className="munna">
                <a href="https://www.facebook.com/kotaksecurities" alt="...">
                  <i className="fa fa-2x fa-facebook">
                    <br />
                  </i>
                </a>
                <a href="https://twitter.com/kotaksecurities" alt="...">
                  <i className="fa fa-2x fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/accounts/login/?next=/kotaksecurities/"
                  alt="..."
                >
                  <i className="fa fa-2x fa-instagram"></i>
                </a>

                <a
                  href="https://in.linkedin.com/company/kotaksecurities/"
                  alt="..."
                >
                  <i className="fa fa-2x fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

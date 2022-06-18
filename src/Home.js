import React, { useState, useEffect } from "react";
import axios from "axios";
function Home() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2"
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
      });
  });

  return (
    <>
      <div className="container">
        <div className="row">
          {news.map((value, index) => {
            return (
              <div key={index} className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;

import axios from "axios";
import React, { useState, useEffect } from "react";

function Home() {
  const [user, setUser] = useState([]);
  const Munna = (val) => {
    alert(val);
    // <h1>{value.name}</h1>;
  };

  useEffect(() => {
    axios
      .get("https://www.eliquidremix.com/panel/api/home-page")
      .then((res) => {
        console.log(res);
        // console.log(res?.data?.data?.welcome_images[0]);
        // console.log(res?.data?.data);
        setUser(res?.data?.data?.welcome_images);
      });
  }, []);

  return (
    <>
      <div className="col-4">
        <div className="container">
          <div className="row">
            {user.map((value, index) => {
              return (
                <div key={index} className="col-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-image">
                        <img
                          onClick={() => Munna(value.name)}
                          src={value.img}
                          alt="..."
                        />

                        {/* <div className="card-title">
                          <h1>{value.name}</h1>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <img
              src="https://www.eliquidremix.com/panel/assets/img/flavour/tag/5ef4ace5708c8cfdad77bc09ecd2ccf5.jpg"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;


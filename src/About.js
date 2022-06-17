// import React, { useState, useEffect } from "react";
// import Axios from "axios";

// function About() {
//   const [user, setUser] = useState([]);
//   const User_token = localStorage.getItem("token");
//   console.log("Munna", User_token);

//   const fetchData = () => {
//     Axios.get(
//       "https://urlsdemo.in/mangtum/panel/api/v1.0/product-by-category/art-crafts",
//       {
//         headers: {
//           Accept: "application/json",
//           Authorization: `Bearer ${User_token}`,
//         },
//       }
//     ).then((response) => {
//       console.log(response);
//       setUser(response.data);
//     });
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   console.log("user", user?.data?.products[25].main_image);
//   return (
//     <div className="clearfix">
//       <div className="row">
//         {/* only show particular data */}
//         <h1>{user?.data?.products[25].regular_price}</h1>

//         {/* Map methon uses for multiple data fetching */}
//         {user?.data?.products.map((res, index) => (
//           <div className="col-md-4 animated fadeIn" key={res.id.value}>
//             <div className="card">
//               {console.log("res", res)}
//               <div className="card-body">
//                 <div className="avatar">
//                   <img src={res.main_image} className="card-img-top" alt="" />
//                 </div>
//                 <h5 className="card-title">{res?.category.cate_name}</h5>
//                 <h5 className="card-title">{res.regular_price}</h5>

//                 <p className="card-text">
//                   <br />
//                   {/* <span className="phone">{data.phone}</span> */}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default About;

import React, { useState } from "react";
import axios from "axios";
function App() {
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState([]);

  const changePhoto = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`
      )
      .then((response) => {
        // console.log(response.data);
        setResult(response.data.results);
      });
  };
  return (
    <>
      <div className="container text-center my-5">
        <h1>Image search </h1>
        <input
          type="text"
          className="form-control"
          value={photo}
          onChange={(e) => {
            setPhoto(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={changePhoto}
          className="btn btn-primary my-2"
        >
          Click me
        </button>
      </div>

      <div className="container">
        <div class="row text-center text-lg-start">
          {result.map((value) => {
            return (
              <div class="col-lg-3 col-md-4 col-6">
                <img
                  class="img-fluid img-thumbnail d-block mb-4 h-100"
                  src={value.urls.small}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

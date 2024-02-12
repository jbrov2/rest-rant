// const React = require("react");
// const Def = require("../default");

// function show(data) {
//   let comments = <h3 className="inactive">No comments yet.</h3>;
//   let rating = <h3 className="inactive">Not Rated</h3>;
//   if (data.place.comments.length) {
//     let sumRatings = data.place.comments.map((tot,c) => {
//       return tot + c.stars }, 0)
//       let averageRating = sumRatings / data.place.comments.length
//       rating = (
//         <h3>
//           {averageRating} stars
//         </h3>
//       )
//     };
//   }
//   return (
//     <Def>
//       <main>
//         <div className="row">
//           <div className="col-sm-6">
//             <h1>{data.place.name}</h1>
//           </div>

//           <div className="col-sm-6">
//             <img src={data.place.pic} alt={data.place.name} />
//             <h3>
//               Located in {data.place.city}, {data.place.state}
//             </h3>
//             <h2>{rating}</h2>
//           </div>
//           <div className="col-sm-6">
//             <h2>Description</h2>
//             <h3>{data.place.showEstablished()}</h3>
//             <h4>Serving {data.place.cuisines}</h4>
//           </div>
//           <div>
//             <h4>Rating</h4>
//             <p>Not Rated</p>
//           </div>
//           <div>
//             <h4>Comments</h4>
//             {comments}
//           </div>
//           <a href={`/places/${data.id}/edit`} className="btn btn-warning">
//             Edit
//           </a>
//           <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
//             <button type="submit" className="btn btn-danger">
//               Delete
//             </button>
//           </form>
//         </div>
//       </main>
//     </Def>
//   );
// }

// module.exports = show;

import React from "react";
import Def from "../default";

function show(data) {
  let comments = <h4 className="inactive">No comments yet.</h4>; // Change to h4 for consistency
  let rating = <h4 className="inactive">Not Rated</h4>; // Change to h4 for consistency

  if (data.place.comments.length > 0) {
    // Check if there are comments using 'length > 0'
    const sumRatings = data.place.comments.reduce(
      (total, comment) => total + comment.stars,
      0
    );
    const averageRating = sumRatings / data.place.comments.length;
    rating = <h4>{stars} stars</h4>;
  }

  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
          </div>
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h4>
              {" "}
              {/* Change to h4 for consistency */}
              Located in {data.place.city}, {data.place.state}
            </h4>
            {rating}
          </div>
          <div className="col-sm-6">
            <h2>Description</h2>
            <h4>{data.place.showEstablished()}</h4>
            <h4>Serving {data.place.cuisines}</h4>
          </div>
          <div className="col-sm-6">
            {" "}
            {/* Add class to the div */}
            <h4>Rating</h4>
            <p>{rating}</p>
          </div>
          <div className="col-sm-6">
            {" "}
            {/* Add class to the div */}
            <h4>Comments</h4>
            {comments}
          </div>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            {" "}
            {/* Fix href syntax */}
            Edit
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            {" "}
            {/* Fix action syntax */}
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </div>
      </main>
    </Def>
  );
}

export default show;

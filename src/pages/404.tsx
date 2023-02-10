import React from "react";
import PageNotFoundImage from "../assets/404.png";
const PageNotFound: React.FC = () => {
  return (
    <div
      className="pageNotFound"
      style={{ display: "grid", placeItems: "center", height: "50vh" }}
    >
      <h1>Oops..! 404 Page Not Found</h1>
      {/* <p>Looks like you came to wrong page on our server</p> */}
      <img src={PageNotFoundImage} height="500" width="500" alt="not found" />
    </div>
  );
};

export default PageNotFound;

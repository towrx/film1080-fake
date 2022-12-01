import React from "react";
import srcPageNotFound from "~/assets/images/404.png";

const PageNotFound = () => {
  console.log(srcPageNotFound);
  return (
    <div style={{ maxWidth: "990px", textAlign: "center", margin: "0 auto" }}>
      <img src={srcPageNotFound} alt="" style={{ width: "40%", margin: "100px auto" }} />
    </div>
  );
};

export default PageNotFound;

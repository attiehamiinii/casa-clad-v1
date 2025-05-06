/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import WorkHeader from "../../components/Work-header";
import WorkFourColumn from "../../components/Work-Four-Column";

const Work3 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        center
        title={{
          first: "Supply",
          second: "We supply a wide range of cladding materials, to ensure your project is completed to the highest standards.",
        }}
        // title = "text"
        content="COMMING SOON"
      />
      {/* <WorkFourColumn /> */}
    </MainLayout>
  );
};

export default Work3;

/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import WorkHeader from "../../components/Work-header";
import WorkThreeColumn from "../../components/Work-Three-Column";

const Work2 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        center
        title={{
          first: "Installation and the building",
          second: " speak for themeselves",
        }}
        // title = "text",
        content="We install all the materials we supply, ensuring a seamless and professional finish to your project."
      />
      <WorkThreeColumn />
    </MainLayout>
  );
};

export default Work2;

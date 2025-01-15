"use client";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const LoadingPage = () => {
  return (
    <ClipLoader
      color="#823a1e"
      cssOverride={override}
      size={120}
      aria-label="Loading Spinner"
    />
  );
};
export default LoadingPage;

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <Image
      src={"/images/header-house.jpeg"}
      alt={"house"}
      width={1000}
      height={0}
      style={{ width: "100%", height: "74vh", objectFit: "cover" }}
    />
  );
};

export default Hero;

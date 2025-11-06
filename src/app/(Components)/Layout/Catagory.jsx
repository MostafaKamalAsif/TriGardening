import React from "react";
import Container from "../Container";
import CatagoryCard from "../CatagoryCard";
import Potted from "/public/Potted.svg";
import Earth from "/public/Earth.svg";
import Shovel from "/public/Shovel.svg";
import Solid from "/public/Solid.svg";
import Flex from "../Flex";
const Catagory = () => {
  return (
    <>
      <div className=" pt-[53px] pb-[133px] bg-white">
        <Container>
          <h3 className="text-[52px] font-semibold text-center text-[#2D5016] pb-20">
            Shop by Category
          </h3>
          <Flex className={"justify-between "}>
            <CatagoryCard
              icon={Potted}
              title={"Plants"}
              Details={`Indoor  & Outdoor Plants for
             every space`}
            />

            <CatagoryCard
              icon={Earth}
              title={"Medicine"}
              Details={`Natural Plant Care Solutions`}
            />

            <CatagoryCard
              icon={Shovel}
              title={"Equipment"}
              Details={`Professional Gardening tools`}
            />

            <CatagoryCard
              icon={Solid}
              title={"Fertilizers"}
              Details={`Safe & effective plant
          protection`}
            />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Catagory;

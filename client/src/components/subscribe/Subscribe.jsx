import React from "react";
import SubscribeCard from "../cards/SubscribeCard";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoDiamondOutline } from "react-icons/io5";

const Subscribe = () => {
  return (
    <section className="box flex flex-col gap-10 mt-28 items-center">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="font-bold text-3xl text-center">
          Pay once, Use forever
        </h2>
        <p className="text-sm text-gray-500 text-center">
          Pay and be among our premium user, this will enable you get foreign recipes 
          from one of our top cuisines
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full md:w-[80%] lg:w-[50%]">
        <SubscribeCard
          title={"Basic"}
          icon={
            <AiOutlineThunderbolt className="bg-primary text-light rounded-full p-1 text-3xl shadow-lg" />
          }
          price={"Free"}
          subtitle={"Perfect to get started"}
          featureTitle={"Basic includes:"}
          features={["Access to recipes", "Access to blogs", "Save recipes"]}
          btnText={"Continue for free"}
          link={"/recipe"}
        />
        <SubscribeCard
          title={"Pro"}
          icon={
            <IoDiamondOutline className="bg-primary text-light rounded-full p-1.5 text-3xl shadow-lg" />
          }
          price={"₦4000"}
          subtitle={"Best for professionals"}
          featureTitle={"Everything in Basic, plus:"}
          features={[
            "Add your own recipe",
            "Add your own blog",
            "Manage your content",
          ]}
          btnText={"Get started"}
        />
      </div>
    </section>
  );
};

export default Subscribe;

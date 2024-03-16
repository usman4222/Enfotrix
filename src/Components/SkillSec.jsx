import React from "react";
import Button from "./Button";

const SkillSec = () => {
  return (
    <div>
      <div className="md:flex md:flex-row flex flex-col ">
        <div className="h-96 w-full md:w-[33.33333%] border relative bg-cover" style={{ backgroundImage: `url("./src/assets/Graphic design.png")` }}>
          <div className="flex justify-around text-white mt-5 relative z-10">
            <label>2 Months</label>
            <label htmlFor="" className="text-[#FFBA21]">Available Online </label>
          </div>

          <div className="flex flex-col items-center justify-center pt-24 relative z-10">
            <h1 className="text-[#F2F2F2] text-4xl py-3">GRAPHIC DESIGN</h1>
            <Button bgColor={"bg-[#FFBA21]"} btnText={"Apply Now"} style={{ width: '300px' }} />
          </div>

          <div className="flex gap-x-3 items-center justify-center text-white pt-24 relative z-10">
            <span className="line-through text-16 text-sm">RS25000</span>
            <span className="text-xl">RS25000 </span>
          </div>
        </div>
        <div className="h-96 w-full md:w-[33.33333%] border relative bg-cover" style={{ backgroundImage: `url("./src/assets/E commerce.png")` }}>
          <div className="flex justify-around text-white mt-5 relative z-10">
            <label>2 Months</label>
            <label htmlFor="" className="text-[#FFBA21]">Available Online </label>
          </div>

          <div className="flex flex-col items-center justify-center pt-24 relative z-10">
            <h1 className="text-[#F2F2F2] text-4xl py-3">E-COMMERCE</h1>
            <Button bgColor={"bg-[#FFBA21]"} btnText={"Apply Now"} />
          </div>

          <div className="flex gap-x-3 items-center justify-center text-white pt-24 relative z-10">
            <span className="line-through text-16 text-sm">RS25000</span>
            <span className="text-xl">RS25000 </span>
          </div>
        </div>
        <div className="h-96 w-full md:w-[33.33333%] border relative bg-cover" style={{ backgroundImage: `url("./src/assets/Digital Marketing.png")` }}>
          <div className="flex justify-around text-white mt-5 relative z-10">
            <label>2 Months</label>
            <label htmlFor="" className="text-[#FFBA21]">Available Online </label>
          </div>

          <div className="flex flex-col items-center justify-center pt-24 relative z-10">
            <h1 className="text-[#F2F2F2] text-4xl py-3">DIGITAL MARKETING</h1>
            <Button bgColor={"bg-[#FFBA21]"} btnText={"Apply Now"} />
          </div>

          <div className="flex gap-x-3 items-center justify-center text-white pt-24 relative z-10">
            <span className="line-through text-16 text-sm">RS25000</span>
            <span className="text-xl">RS25000 </span>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row flex flex-col ">
        <div className="h-96 w-full md:w-[33.33333%] border relative bg-cover" style={{ backgroundImage: `url("./src/assets/App Dev.png")` }}>
          <div className="flex justify-around text-white mt-5 relative z-10">
            <label>2 Months</label>
            <label htmlFor="" className="text-[#FFBA21]">Available Online </label>
          </div>

          <div className="flex flex-col items-center justify-center pt-24 relative z-10">
            <h1 className="text-[#F2F2F2] text-4xl py-3">APP DEVELOPMENT</h1>
            <Button bgColor={"bg-[#FFBA21]"} btnText={"Apply Now"} />
          </div>

          <div className="flex gap-x-3 items-center justify-center text-white pt-24 relative z-10">
            <span className="line-through text-16 text-sm">RS25000</span>
            <span className="text-xl">RS25000 </span>
          </div>
        </div>
        <div className="h-96 w-full md:w-[33.33333%] border relative bg-cover" style={{ backgroundImage: `url("./src/assets/Web.png")` }}>
          <div className="flex justify-around text-white mt-5 relative z-10">
            <label>2 Months</label>
            <label htmlFor="" className="text-[#FFBA21]">Available Online </label>
          </div>

          <div className="flex flex-col items-center justify-center pt-24 relative z-10">
            <h1 className="text-[#F2F2F2] text-4xl py-3">WEB DEVELOPMENT</h1>
            <Button bgColor={"bg-[#FFBA21]"} btnText={"Apply Now"} />
          </div>

          <div className="flex gap-x-3 items-center justify-center text-white pt-24 relative z-10">
            <span className="line-through text-16 text-sm">RS25000</span>
            <span className="text-xl">RS25000 </span>
          </div>
        </div>
        <div className="h-96 w-full md:w-[33.33333%] border relative bg-cover" style={{ backgroundImage: `url("./src/assets/3D Modeling.png")` }}>
          <div className="flex justify-around text-white mt-5 relative z-10">
            <label>2 Months</label>
            <label htmlFor="" className="text-[#FFBA21]">Available Online </label>
          </div>

          <div className="flex flex-col items-center justify-center  mx-28 pt-24 relative z-10">
            <h1 className="text-[#F2F2F2] text-center text-4xl py-3">3D MODELING</h1>
            <Button bgColor={"bg-[#FFBA21]"} btnText={"Apply Now"} />
          </div>

          <div className="flex gap-x-3 items-center justify-center text-white pt-14 relative z-10">
            <span className="line-through text-16 text-sm">RS25000</span>
            <span className="text-xl">RS25000 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSec;

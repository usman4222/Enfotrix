import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const SkillSec = () => {
  return (
    <div className="flex-col md:flex-row">
      <div className="md:flex md:flex-row flex flex-col ">

        <div
          className="h-fit w-full md:w-[33.33333%] border relative bg-cover"
          style={{ backgroundImage: `url("./src/assets/Graphic design.png")` }}
        >
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div> */}
          <div className="flex justify-around text-white mt-5 relative z-10">
            <label>2 Months</label>
            <label htmlFor="" className="text-yellow-500">
              Available Online {" "}
            </label>
          </div>

          <div className="flex flex-col items-center justify-center pt-24 relative z-10 text-center">
            <h1 className="text-white text-4xl py-3">GRAPHIC DESIGN</h1>
            <Link to='/graphic-design'>
              <Button bgColor={"bg-yellow-dark"} btnText={"Apply Now"} />
            </Link>
          </div>

          <div className="flex gap-x-3 items-center justify-center text-white pt-24 relative z-10">
            <span className="line-through text-16 text-sm">RS25000</span>
            <span className="text-xl">RS25000 </span>
          </div>
        </div>
        <div
          className="h-fit w-full md:w-[33.33333%] border relative bg-cover"
          style={{ backgroundImage: `url("./src/assets/E commerce.png")` }}
        >
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div> */}
          <div className="flex justify-around text-white mt-5 relative z-10">
            <label>2 Months</label>
            <label htmlFor="" className="text-yellow-500">
              Available Online {" "}
            </label>
          </div>

          <div className="flex flex-col items-center justify-center pt-24 relative z-10 text-center">
            <h1 className="text-white text-4xl py-3">E-COMMERCE</h1>
            <Link to='/e-commerce'>
              <Button bgColor={"bg-yellow-dark"} btnText={"Apply Now"} />
            </Link>
          </div>

          <div className="flex gap-x-3 items-center justify-center text-white pt-24 relative z-10">
            <span className="line-through text-16 text-sm">RS25000</span>
            <span className="text-xl">RS25000 </span>
          </div>
        </div>
        <div
          className="h-fit w-full md:w-[33.33333%] border relative bg-cover"
          style={{ backgroundImage: `url("./src/assets/Digital Marketing.png")` }}
        >
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div> */}
          <div className="flex justify-around text-white mt-5 relative z-10">
            <label>2 Months</label>
            <label htmlFor="" className="text-yellow-500">
              Available Online {" "}
            </label>
          </div>

          <div className="flex flex-col items-center justify-center pt-24 relative z-10 text-center">
            <h1 className="text-white text-4xl py-3">DIGITAL MARKETING</h1>
            <Link to='/marketing'>
              <Button bgColor={"bg-yellow-dark"} btnText={"Apply Now"} />
            </Link>
          </div>

          <div className="flex gap-x-3 items-center justify-center text-white pt-24 relative z-10">
            <span className="line-through text-16 text-sm">RS25000</span>
            <span className="text-xl">RS25000 </span>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row flex flex-col ">
        <div
          className="h-fit w-full md:w-[33.33333%] border relative bg-cover"
          style={{ backgroundImage: `url("./src/assets/App Dev.png")` }}
        >
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div> */}
          <div className="flex justify-around text-white mt-5 relative z-10">
            <label>2 Months</label>
            <label htmlFor="" className="text-yellow-500">
              Available Online {" "}
            </label>
          </div>

          <div className="flex flex-col items-center justify-center pt-24 relative z-10 text-center">
            <h1 className="text-white text-4xl py-3">APP DEVELOPMENT</h1>
            <Link to='/app-development'>
              <Button bgColor={"bg-yellow-dark"} btnText={"Apply Now"} />
            </Link>
          </div>

          <div className="flex gap-x-3 items-center justify-center text-white pt-24 relative z-10">
            <span className="line-through text-16 text-sm">RS25000</span>
            <span className="text-xl">RS25000 </span>
          </div>
        </div>
        <div
          className="h-fit w-full md:w-[33.33333%] border relative bg-cover"
          style={{ backgroundImage: `url("./src/assets/Web.png")` }}
        >
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div> */}
          <div className="flex justify-around text-white mt-5 relative z-10">
            <label>2 Months</label>
            <label htmlFor="" className="text-yellow-500">
              Available Online {" "}
            </label>
          </div>

          <div className="flex flex-col items-center justify-center pt-24 relative z-10 text-center">
            <h1 className="text-white text-4xl py-3">WEB DEVELOPMENT</h1>
            <Link to='/web-development'>
              <Button bgColor={"bg-yellow-dark"} btnText={"Apply Now"} />
            </Link>
          </div>

          <div className="flex gap-x-3 items-center justify-center text-white pt-24 relative z-10">
            <span className="line-through text-16 text-sm">RS25000</span>
            <span className="text-xl">RS25000 </span>
          </div>
        </div>
        <div
          className="h-fit w-full md:w-[33.33333%] border relative bg-cover"
          style={{ backgroundImage: `url("./src/assets/3D Modeling.png")` }}
        >
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div> */}
          <div className="flex justify-around text-white mt-5 relative z-10">
            <label>2 Months</label>
            <label htmlFor="" className="text-yellow-500">
              Available Online {" "}
            </label>
          </div>

          <div className="flex flex-col items-center justify-center pt-24 relative z-10 text-center">
            <h1 className="text-white text-4xl py-3">3D MODELING</h1>
            <Link to='/3d'>
              <Button bgColor={"bg-yellow-dark"} btnText={"Apply Now"} />
            </Link>
          </div>

          <div className="flex gap-x-3 items-center justify-center text-white pt-24 relative z-10">
            <span className="line-through text-16 text-sm">RS25000</span>
            <span className="text-xl">RS25000 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSec;

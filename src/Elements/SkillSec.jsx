import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const SkillSec = () => {
  return (

    <>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1">
        <div style={{ backgroundImage: `url("./src/assets/Graphic design.png")` }}
          className="h-fit w-full border bg-cover"
        >
          <div className="flex justify-between px-10 py-5">
            <p className="text-[#f2f2f2]">2 Months</p>
            <p className="text-[#ffba21]">Available Online</p>
          </div>
          <div className="flex justify-center items-center pt-16">
            <h2 className="text-4xl text-[#f2f2f2] text-center">GRAPHIC <br /> DESIGN</h2>
          </div>
          <div className="flex justify-center items-center py-5">
            <Link to='/student-intake'>
              <button className="bg-[#ffba21] flex flex-col md:items-center items-center rounded-full py-1">
                <span className="md:text-[24px] text-base px-5 py-1 text-[#414042]">
                  APPLY NOW
                </span>
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center pt-10 pb-3">
            <div className="flex items-center gap-3">
              <h4 className="line-through text-base text-[#f2f2f2]">RS 25,000</h4>
              <h2 className="text-2xl text-[#f2f2f2] font-semibold">RS 10,000</h2>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url("./src/assets/E commerce.png")` }}
          className="h-fit w-full border bg-cover"
        >
          <div className="flex justify-between px-10 py-5">
            <p className="text-[#f2f2f2]">2 Months</p>
            <p className="text-[#ffba21]">Available Online</p>
          </div>
          <div className="flex justify-center items-center pt-[104px]">
            <h2 className="text-4xl text-[#f2f2f2] text-center">E-COMMERCE</h2>
          </div>
          <div className="flex justify-center items-center py-5">
            <Link to='/student-intake'>
              <button className="bg-[#ffba21] flex flex-col md:items-center items-center rounded-full py-1">
                <span className="md:text-[24px] text-base px-5 py-1 text-[#414042]">
                  APPLY NOW
                </span>
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center pt-10 pb-3">
            <div className="flex items-center gap-3">
              <h4 className="line-through text-base text-[#f2f2f2]">RS 25,000</h4>
              <h2 className="text-2xl text-[#f2f2f2] font-semibold">RS 10,000</h2>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url("./src/assets/Digital Marketing.png")` }}
          className="h-fit w-full border bg-cover"
        >
          <div className="flex justify-between px-10 py-5">
            <p className="text-[#f2f2f2]">2 Months</p>
            <p className="text-[#ffba21]">Available Online</p>
          </div>
          <div className="flex justify-center items-center pt-16">
            <h2 className="text-4xl text-[#f2f2f2] text-center">DIGITAL  <br /> MARKETING</h2>
          </div>
          <div className="flex justify-center items-center py-5">
            <Link to='/student-intake'>
              <button className="bg-[#ffba21] flex flex-col md:items-center items-center rounded-full py-1">
                <span className="md:text-[24px] text-base px-5 py-1 text-[#414042]">
                  APPLY NOW
                </span>
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center pt-10 pb-3">
            <div className="flex items-center gap-3">
              <h4 className="line-through text-base text-[#f2f2f2]">RS 25,000</h4>
              <h2 className="text-2xl text-[#f2f2f2] font-semibold">RS 10,000</h2>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url("./src/assets/App Dev.png")` }}
          className="h-fit w-full border bg-cover"
        >
          <div className="flex justify-between px-10 py-5">
            <p className="text-[#f2f2f2]">2 Months</p>
            <p className="text-[#ffba21]">Available Online</p>
          </div>
          <div className="flex justify-center items-center pt-16">
            <h2 className="text-4xl text-[#f2f2f2] text-center">APP <br /> DEVELOPMENT</h2>
          </div>
          <div className="flex justify-center items-center py-5">
            <Link to='/student-intake'>
              <button className="bg-[#ffba21] flex flex-col md:items-center items-center rounded-full py-1">
                <span className="md:text-[24px] text-base px-5 py-1 text-[#414042]">
                  APPLY NOW
                </span>
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center pt-10 pb-3">
            <div className="flex items-center gap-3">
              <h4 className="line-through text-base text-[#f2f2f2]">RS 25,000</h4>
              <h2 className="text-2xl text-[#f2f2f2] font-semibold">RS 10,000</h2>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url("./src/assets/Web.png")` }}
          className="h-fit w-full border bg-cover"
        >
          <div className="flex justify-between px-10 py-5">
            <p className="text-[#f2f2f2]">2 Months</p>
            <p className="text-[#ffba21]">Available Online</p>
          </div>
          <div className="flex justify-center items-center pt-16">
            <h2 className="text-4xl text-[#f2f2f2] text-center">WEB<br /> DEVELOPMENT</h2>
          </div>
          <div className="flex justify-center items-center py-5">
            <Link to='/student-intake'>
              <button className="bg-[#ffba21] flex flex-col md:items-center items-center rounded-full py-1">
                <span className="md:text-[24px] text-base px-5 py-1 text-[#414042]">
                  APPLY NOW
                </span>
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center pt-10 pb-3">
            <div className="flex items-center gap-3">
              <h4 className="line-through text-base text-[#f2f2f2]">RS 25,000</h4>
              <h2 className="text-2xl text-[#f2f2f2] font-semibold">RS 10,000</h2>
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url("./src/assets/3D Modeling.png")` }}
          className="h-fit w-full border bg-cover"
        >
          <div className="flex justify-between px-10 py-5">
            <p className="text-[#f2f2f2]">2 Months</p>
            <p className="text-[#ffba21]">Available Online</p>
          </div>
          <div className="flex justify-center items-center pt-16">
            <h2 className="text-4xl text-[#f2f2f2] text-center">3D<br /> MODELING</h2>
          </div>
          <div className="flex justify-center items-center py-5">
            <Link to='/student-intake'>
              <button className="bg-[#ffba21] flex flex-col md:items-center items-center rounded-full py-1">
                <span className="md:text-[24px] text-base px-5 py-1 text-[#414042]">
                  APPLY NOW
                </span>
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center pt-10 pb-3">
            <div className="flex items-center gap-3">
              <h4 className="line-through text-base text-[#f2f2f2]">RS 25,000</h4>
              <h2 className="text-2xl text-[#f2f2f2] font-semibold">RS 10,000</h2>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default SkillSec;
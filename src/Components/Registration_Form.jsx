import React, { useState, useEffect } from "react";

const Registration_Form = () => {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag,setFlag]=useState(false)
  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert('Please make sure to fill in all the fields of the form.');
    } else {
        setInputData({name:"",email:"",password:""})
      setFlag(true);
    }
  };
  
  return (
    <div>
      <div className="">
        <pre>{(flag)?<h1 className="bg-slate-500 text-center text-3xl text-white">Welcome {inputData.name} you have registered successfully.</h1>:<h1 className="bg-slate-500 text-center text-3xl text-white">Sign In Please </h1>}</pre>
        <h1 className="bg-green-500 text-center text-2xl font-bold">
          Registration Form
        </h1>
        <section>
          <div>
            <h1 className="text-center text-3xl pt-2">
              Welcome to the Citrus Disease Detection Services
            </h1>
          </div>
          <form className="flex items-center justify-center flex-col"  onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Name">Name:</label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Enter your name "
                className="border-2 px-5 py-1 rounded"
                value={inputData.name}
                onChange={handleData}
                autoComplete="current-name"
              />
            </div>
            <div>
              <label htmlFor="Name">Email:</label>
              <br />
              <input
                type="text"
                name="email"
                className="border-2 px-5 py-1 rounded"
                placeholder="Enter email"
                value={inputData.email}
                onChange={handleData}
                autoComplete="current-email"
              />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="border-2 px-5 py-1 rounded"
                value={inputData.password}
                onChange={handleData}
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="px-5 py-3 mt-2 m-auto bg-green-900 text-white font-bold rounded-lg"
            >
              Sign Up
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Registration_Form;

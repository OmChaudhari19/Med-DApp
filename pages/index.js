import { useState } from "react";
import Link from "next/link";

const NewPage = () => {
  const [sh, setsh] = useState(true);
  const [special, setSpecial] = useState("");
  const [number, setNumber] = useState("");

  const [name, setName] = useState("");
  const [pname, setPName] = useState("");
  const [bldgrp, setBloodGrp] = useState("");
  const [dob, setDOB] = useState("");

  const handleSubmit = async () => {
    if (sh) {
      const requestOptions = {
        method: "post",
        value: { name: name, special: special, number: number },
      };
      console.log(requestOptions);
      // await fetch("https://localhost:5000", requestOptions);
      console.log("completed for Doctor");
    } else {
      const requestOptions = {
        method: "post",
        value: { dob: dob, pname: pname, bloodgrp: bldgrp },
      };
      console.log(requestOptions);
      // await fetch("https://localhost:5001", requestOptions);
      console.log("completed for Patient");
    }
  };

  return (
    <>
      <div class="flex justify-center mt-2">
        <div class="flex flex-shrink-0 items-center mt-4">
          <h1 class="text-black mt-2">Med-DApp</h1>
          <img
            class="h-20 w-20"
            src="https://cdn.pixabay.com/photo/2017/02/15/20/58/ekg-2069872_1280.png"
            alt="Your Company"
          />
        </div>
      </div>
      <div class="flex justify-center m-10">
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l text-lg"
          type="submit"
          id="doc"
          onClick={() => {
            setsh(true);
          }}
        >
          Doctor
        </button>
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r text-lg"
          type="submit"
          id="patient"
          onClick={() => {
            setsh(false);
          }}
        >
          Patient
        </button>
      </div>
      {sh ? (
        <div class="flex justify-center ">
          <form
            action="post"
            class="w-full max-w-lg p-10 border-solid border-2 border-sky-500 rounded-lg"
          >
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-5"
                  for="inline-full-name"
                >
                  Full Name :
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="name"
                  placeholder="Enter Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-password"
                >
                  Specialization :
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="text-area"
                  placeholder="Enter Specialization"
                  onChange={(e) => {
                    setSpecial(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-password"
                >
                  Registration Id :
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="text-area"
                  placeholder="Enter Registration Id"
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
              </div>
            </div>
            {/* <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3"></div>
              <label class="md:w-2/3 block text-gray-500 font-bold">
                <input class="mr-2 leading-tight" type="checkbox" />
                <span class="text-sm">Send me your newsletter!</span>
              </label>

            </div> */}

            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <Link legacyBehavior href="/doctor">
                  <button
                    class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      ) : (
        // <form action="post">
        //   <div className="flex flex-row">
        //     <h2 className="mt-2 mr-3 ml-6 text-2xl w-28"> Patient Name : </h2>
        //     <input
        //       className="ml-1 mb-3 px-3 py-2 text-black w-72 h-10"
        //       type="name"
        //       placeholder="Enter Name"
        //       onChange={(e) => {
        //         setPName(e.target.value);
        //       }}
        //     />
        //   </div>
        //   <div className="flex flex-row">
        //     <h2 className="mt-2 text-2xl w-32">Date of Birth: </h2>
        //     <input
        //       className="ml-4 px-3 text-black w-72 h-10"
        //       type="date"
        //       placeholder="Enter Date of Birth"
        //       onChange={(e) => {
        //         setDOB(e.target.value);
        //       }}
        //     />
        //   </div>
        //   <div className="flex flex-row">
        //     <label htmlFor="bloodgrps">Choose Blood group:</label>

        //     <select
        //       name="bloodgrp"
        //       id="bloodgrps"
        //       onChange={(e) => {
        //         console.log(e.target.value);
        //       }}
        //     >
        //       <option value="ap">A+</option>
        //       <option value="bp">B+</option>
        //       <option value="op">O+</option>
        //       <option value="an">A-</option>
        //       <option value="bn">B-</option>
        //       <option value="on">O-</option>
        //     </select>
        //   </div>
        //   <Link legacyBehavior href="/patient">
        //     <button type="submit" id="entr-btn" onClick={handleSubmit}>
        //       Enter
        //     </button>
        //   </Link>
        // </form>
        <div class="flex justify-center ">
          <form
            action="post"
            class="w-full max-w-lg p-10 border-solid border-2 border-sky-500 rounded-lg"
          >
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-5"
                  for="inline-full-name"
                >
                  Full Name :
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="name"
                  placeholder="Enter Name"
                  onChange={(e) => {
                    setPName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-password"
                >
                  Date :
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="date"
                  placeholder="Enter Date of Birth"
                  onChange={(e) => {
                    setDOB(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="flex justify-center">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="ap">A+</option>
                <option value="bp">B+</option>
                <option value="op">O+</option>
                <option value="an">A-</option>
                <option value="bn">B-</option>
                <option value="on">O-</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div class="mt-10 md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <Link legacyBehavior href="/doctor">
                  <button
                    class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default NewPage;

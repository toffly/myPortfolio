import React from "react";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="p-4 lg:p-20 flex flex-col items-center justify-center"
    >
      <div>
        <h1 className="text-[52px] font-semibold mb-10 leading-normal uppercase text-white">
          Contact Me
        </h1>
      </div>
      <form action="" className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-6" >
          <input
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
            placeholder="Enter Your Name"
            type="text"
          />
          <input
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
            placeholder="Enter Your Email"
            type="text"
          />
        </div>
        <textarea
          className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
          placeholder="Write Your Massage..."
          name=""
          id=""
          cols="20"
          rows="10"
        ></textarea>
        <button
          className="neno-button transition shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:text-fuchsia-500 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactMe;

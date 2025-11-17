import React, { useState } from "react"
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import linkedIn from "../assets/likedin.png"
import emailImg from "../assets/email.png"
// import leetcode from "../assets/leetcode.png"
import github from "../assets/project/github.png"
import cv from "../assets/cv.png"

const Contact = () => {

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        message : ""
    })

    const {email, name, message } = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
      };

      const handleOnSubmit = (e)=>{
        e.preventDefault();
      }

  return (
    <section className="lg:min-h-screen h-[600px] lg:w-[1200px] mx-auto px-5 pt-14 pl-10 mb-10 lg:mb-0" id="contact">
     
    <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
      Get in touch
      </p>
      <h2 className="text-white font-black md:text-[50px] sm:text-[50px] xs:text-[40px] text-[30px]">
      Contact
      </h2>
    </motion.div>

    <div className=" lg:flex">

    <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-6 mt-6 lg:w-[500px]">
          {/* name */}
          <label>
            <p className="text-sm font-medium text-richblack-5 mb-2">
              Your Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="name"
              name="name"
              value={name}
              onChange={handleOnChange}
              placeholder="Enter your name"
              className="form-input w-full border border-richblack-600 bg-richblack-700 text-richblack-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-50"
            />
          </label>

           {/* email */}
           <label>
            <p className="text-sm font-medium text-richblack-5 mb-2">
              Your Email <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter your email"
              className="form-input w-full border border-richblack-600 bg-richblack-700 text-richblack-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-50"
            />
          </label>

           {/* Email */}
           <label>
            <p className="text-sm font-medium text-richblack-5 mb-2">
             Your Message <sup className="text-pink-200">*</sup>
            </p>
            <textarea
  name="message"
  value={message}
  onChange={handleOnChange}
  placeholder="Enter your message"
  className="form-input w-full border border-richblack-600 lg:h-[150px] h-[100px] bg-richblack-700 text-richblack-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-50"
></textarea>
          </label>

       

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-50 text-richblack-900 font-medium py-2 px-4 rounded-md hover:bg-yellow-100 transition-all"
          >
            Send
          </button>
    </form>

    <div className=" mx-auto  mt-10 gap-5 lg:gap-8 lg:mt-[200px] flex ml-4 lg:ml-52">

        <a href="mailto:mohd.hamza9325@gmail.com"><img src={emailImg} alt="" className=" w-10 lg:w-12"/></a>
        <a href="https://www.linkedin.com/in/mohd-hamza-639bb5320/"><img src={linkedIn} alt="" className=" w-10 lg:w-12"/></a>
        <a href="https://github.com/hamza-86"><img src={github} alt="" className=" w-10 lg:w-12"/></a>
        
        <a href="https://drive.google.com/file/d/1ZtySrY5G9jc81VuSnyTsXnfiPQxQcL22/view?usp=drive_link"><img src={cv} alt="" className=" w-10 lg:w-12"/></a>



    </div>


    </div>

   


    </section>
  )
};

export default Contact;




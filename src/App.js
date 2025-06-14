// App.jsx
import React, { useState } from "react";
import { FaUser, FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const jobs = [
  {
    company: "Amazon",
    role: "Full Stack Developer",
    icon: <img src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png" alt="Dribbble" className="w-12 h-12" />,
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA"
  },
  {
    company: "Tesla",
    role: "Node Js Developer",  
    // icon: <FaCar size={32} className="text-black" />,
    icon: <img src="https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg" alt="Dribbble" className="w-12 h-12" />,
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA"
  },
  {
    company: "Dribbble",
    role: "UX/UI Designer",
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" alt="Dribbble" className="w-12 h-12" />,
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA"
  },
  {
    company: "Amazon",
    role: "Full Stack Developer", 
    icon: <img src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png" alt="Dribbble" className="w-12 h-12" />,
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA"
  },
  {
    company: "Tesla",
    role: "Node Js Developer",  
    icon: <img src="https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg" alt="Dribbble" className="w-12 h-12" />,
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA"
  },
  {
    company: "Dribbble",
    role: "UX/UI Designer",
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" alt="Dribbble" className="w-12 h-12" />,
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA"
  },
  {
    company: "Amazon",
    role: "Full Stack Developer",
    icon: <img src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png" alt="Dribbble" className="w-12 h-12" />,
    exp: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA"
  },
];
export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white min-h-screen p-6 font-sans">
      {/* Header */}
      <header className="mb-6">
               <div className="flex justify-center items-center">
         <nav className="flex flex-col lg:flex-row justify-between items-center gap-28">
           <div className="flex items-center gap-6 text-gray-700 font-medium">
             {/* <span className="text-lg font-bold text-black">🏢</span> */}
             <img src="https://static.ambitionbox.com/assets/v2/images/rs:fit:200:200:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL2N5YmVybWluZC13b3Jrcy5qcGc.webp" alt="Logo" className="h-8 w-auto" />
             <a href="/home" className="hover:text-blue-600">Home</a>
 <a href="/jobs" className="hover:text-blue-600">Find Jobs</a>
 <a href="/talents" className="hover:text-blue-600">Find Talents</a>
 <a href="/about" className="hover:text-blue-600">About us</a>
 <a href="/testimonials" className="hover:text-blue-600">Testimonials</a>
           </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700"
          >
            Create Jobs
          </button>
        </nav>
        </div>

             {/* Filters */}
         <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
        <input
            type="text"
            placeholder="Search By Job Title, Role"
            className="border px-4 py-2 rounded-md w-72"
          />
          <select className="border px-4 py-2 rounded-md text-gray-600">
            <option>Preferred Location</option>
          </select>
          <select className="border px-4 py-2 rounded-md text-gray-600">
            <option>Job Type</option>
          </select>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Salary Per Month:</span>
            <input type="range" min="50000" max="280000" className="w-32" />
            <span className="text-sm text-gray-600">₹50k - ₹80k</span>
          </div>
        </div>
      </header>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white w-full max-w-2xl rounded-xl p-6 shadow-lg relative">
            <h2 className="text-xl font-bold text-center mb-6">Create Job Opening</h2>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <IoMdClose size={24} />
            </button>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Job Title</label>
                <input className="border w-full p-2 rounded mt-1" placeholder="Full Stack Developer" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Company Name</label>
                <input className="border w-full p-2 rounded mt-1" placeholder="Amazon, Microsoft, Swiggy" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Location</label>
                <select className="border w-full p-2 rounded mt-1">
                  <option>Choose Preferred Location</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-700">Job Type</label>
                <select className="border w-full p-2 rounded mt-1">
                  <option>FullTime</option>
                  <option>PartTime</option>
                  <option>Internship</option>
                </select>
              </div>
              <div className="flex gap-2 col-span-2">
                <div className="w-1/2">
                  <label className="text-sm text-gray-700">Salary Range</label>
                  <div className="flex items-center gap-2 mt-1">
                    <input className="border w-full p-2 rounded" placeholder="₹ 0" />
                    <span>to</span>
                    <input className="border w-full p-2 rounded" placeholder="₹ 12,00,000" />
                  </div>
                </div>
                <div className="w-1/2">
                  <label className="text-sm text-gray-700">Application Deadline</label>
                  <input type="date" className="border w-full p-2 rounded mt-1" />
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-sm text-gray-700">Job Description</label>
                <textarea
                  className="border w-full p-2 rounded mt-1"
                  placeholder="Please share a description to let the candidate know more about the job role"
                  rows="4"
                ></textarea>
              </div>
            <div className="col-span-2 flex justify-between mt-4">
  <button
    onClick={() => setShowModal(false)}
    className="px-4 py-2 border rounded hover:bg-gray-100"
  >
    Save Draft
  </button>
  <button
    onClick={() => setShowModal(false)}
    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
  >
    Publish &rarr;
  </button>
</div>
            </div>
          </div>
        </div>
      )}

         
     

      {/* Job Cards */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white border rounded-xl p-5 shadow hover:shadow-lg transition-all">
            <div className="flex justify-between items-center">
              {job.icon}
              <span className="text-blue-500 text-sm font-semibold">24h Ago</span>
            </div>
            <h3 className="text-lg font-semibold mt-3">{job.role}</h3>
            <div className="flex items-center text-gray-600 text-sm gap-x-4 mt-1">
            <p className="text-gray-600 text-sm flex items-center mt-1">
              <FaUser className="mr-2" /> {job.exp}
            </p>
            <p className="text-gray-600 text-sm flex items-center mt-1">
              <FaMapMarkerAlt className="mr-2" /> {job.type}
            </p>
            <p className="text-gray-600 text-sm flex items-center mt-1">
              <FaRupeeSign className="mr-2" /> {job.salary}
            </p>
            </div>
            <p className="text-gray-500 text-xs mt-3 leading-relaxed">
              A user-friendly interface lets you browse stunning photos and videos.
              <br />
              Filter destinations based on interests and travel style, and create personalized.
            </p>
            <button className="mt-4 bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition">
              Apply Now
            </button>
          </div>
        ))}
      </main>
    </div>

  
    
  );
}



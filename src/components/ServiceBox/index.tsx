"use client";
import React from "react";
import { useEffect, useState } from "react";

const ServiceBox = () => {
  const [formData, setFormData] = useState({
    LinkedIn: "",
    role : '',
    service : ''
  });

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      localStorage.setItem('formData', JSON.stringify(updatedData));
      return updatedData;
    });
  };
  
  // Handle form submission (optional, for example purpose)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can send this data to an API or further process it
  };

  return (
    <>
<div className="grid grid-cols-5 gap-8">
  <div className="col-span-5 xl:col-span-3">
    <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
      <div className="border-b border-stroke px-7 py-4 dark:border-dark-3">
        <h3 className="font-medium text-dark dark:text-white">Service</h3>
      </div>
      <div className="p-7">
        <form onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div className="mb-5.5">
            <label
              className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
              htmlFor="LinkedIn"
            >
              LinkedIn Profile
            </label>
            <div className="relative">
              <input
                className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-12.5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                type="text"
                name="LinkedIn"
                id="LinkedIn"
                placeholder="Inter You LinkedIn Profile"
                value={formData.LinkedIn}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Role Dropdown */}
          <div className="mb-5.5">
            <label
              className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
              htmlFor="role"
            >
              Role
            </label>
            <div className="relative">
              <select
                className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-12.5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select a Role</option>
                <option value="client">Client</option>
                <option value="user">User</option>
                <option value="freelancer">Freelancer</option>
              </select>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="mb-5.5">
            <label
              className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
              htmlFor="service"
            >
              Services
            </label>
            <div className="relative">
              <select
                className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-12.5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a Service</option>
                <option value="webDevelopment">Web Development</option>
                <option value="graphicDesign">Graphic Design</option>
                <option value="seo">SEO</option>
                <option value="digitalMarketing">Digital Marketing</option>
                <option value="appDevelopment">App Development</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => window.location.reload()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</div>


    </>
  );
};

export default ServiceBox;

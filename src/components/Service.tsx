"use client";
import React from "react";
import { useEffect, useState } from 'react';

const SettingBoxes = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    username: '',
    aboutMe: '', 
    title : '',
    subTitle : ''
  });

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      // Save updated data to localStorage
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
              <h3 className="font-medium text-dark dark:text-white">
                Personal Information
              </h3>
            </div>
              <div className="p-7">
      <form onSubmit={handleSubmit}>
        <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
          <div className="w-full sm:w-1/2">
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white" htmlFor="fullName">
              Full Name
            </label>
            <div className="relative">
              <input
                className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-12.5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Devid Jhon"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full sm:w-1/2">
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white" htmlFor="phoneNumber">
              Phone Number
            </label>
            <div className="relative">
              <input
                className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-12.5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="+990 3343 7865"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-5.5">
          <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white" htmlFor="emailAddress">
            Email Address
          </label>
          <div className="relative">
            <input
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-12.5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              type="email"
              name="emailAddress"
              id="emailAddress"
              placeholder="devidjond45@gmail.com"
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-5.5">
          <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white" htmlFor="username">
            Username
          </label>
          <div className="relative">
            <input
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-12.5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
        </div>


        <div className="mb-5.5">
          <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white" htmlFor="title">
            Title
          </label>
          <div className="relative">
            <input
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-12.5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              type="text"
              name="title"
              id="title"
              placeholder="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
        </div>


        <div className="mb-5.5">
          <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white" htmlFor="subTitle">
            SubTitle
          </label>
          <div className="relative">
            <input
              className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-12.5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              type="text"
              name="subTitle"
              id="subTitle"
              placeholder="subTitle"
              value={formData.subTitle}
              onChange={handleChange}
            />
          </div>
        </div>



        <div className="mb-5.5">
  <label
    className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
    htmlFor="aboutMe"
  >
    About Me
  </label>
  <div className="relative">
    <textarea
      className="w-full rounded-[7px] border-[1.5px] border-stroke bg-white py-2.5 pl-4.5 pr-4.5 text-dark focus:border-primary focus-visible:outline-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
      name="aboutMe"
      id="aboutMe"
      placeholder="Tell us something about yourself..."
      value={formData.aboutMe}
      onChange={handleChange}
    ></textarea>
  </div>
</div>



<button
      type="submit"
      style={{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
      }}
     onClick={()=>window.location.reload()}
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

export default SettingBoxes;

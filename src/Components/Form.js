// Form.js
import React from "react";

const Form = ({ invoiceDetails, setInvoiceDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <form className="bg-zinc-800   py-5 px-10 mb-10 rounded-md ">
      <div className="flex">
        <div className="flex flex-col">
          <label className="text-white ">Invoice Number</label>
          <input
            type="text"
            name="invoiceNumber"
            className="p-1 my-2 mr-4 w-60 rounded-md bg-zinc-600 text-white"
            value={invoiceDetails.invoiceNumber}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white">Date</label>
          <input
            type="date"
            name="date"
            className="p-1 my-2 w-60 rounded-md bg-zinc-600 text-white"
            value={invoiceDetails.date}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-white ">Client</label>
        <input
          type="text"
          name="clientName"
          className="p-1 my-2 -mr-6 w-full rounded-md bg-zinc-600 text-white"
          value={invoiceDetails.clientName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white ">Company Name</label>
        <input
          type="text"
          name="companyName"
          className="p-1 my-2 w-full rounded-md bg-zinc-600 text-white"
          value={invoiceDetails.companyName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white  ">Company Address</label>
        <textarea
          name="companyAddress"
          id=""
          cols="30"
          rows="2"
          className="p-1 my-2  rounded-md bg-zinc-600 text-white"
          value={invoiceDetails.companyAddress}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="flex flex-col">
        <label className="text-white">Company Email</label>
        <input
          type="text"
          name="companyEmail"
          className="p-1 my-2 w-full rounded-md bg-zinc-600 text-white"
          value={invoiceDetails.companyEmail}
          onChange={handleChange}
        />
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <label className="text-white ">Service Name</label>
          <input
            type="text"
            name="serviceName"
            className="p-1 my-2 mr-4 w-60 rounded-md bg-zinc-600 text-white"
            value={invoiceDetails.serviceName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white">Service Details</label>
          <select
            name="serviceDetails"
            className="p-1 my-2 w-60 rounded-md bg-zinc-600 text-white"
            value={invoiceDetails.serviceDetails}
            onChange={handleChange}
          >
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Software Development">Software Development</option>
          </select>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <label className="text-white">Due Date</label>
          <input
            type="date"
            name="dueDate"
            className="p-1 my-2 mr-4 w-60 rounded-md bg-zinc-600 text-white"
            value={invoiceDetails.dueDate}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white">Subtotal</label>
          <input
            type="text"
            name="subtotal"
            className="p-1 my-2  w-60 rounded-md bg-zinc-600 text-white"
            value={invoiceDetails.subtotal}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;

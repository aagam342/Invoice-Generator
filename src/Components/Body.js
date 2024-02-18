// Body.js
import React, { useState } from "react";
import Form from "./Form"; // Assuming you have a Form component

const Body = () => {
  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceNumber: "",
    date: "",
    clientName: "",
    companyName: "",
    companyAddress: "",
    companyEmail: "",
    serviceName: "",
    serviceDetails: "",
    dueDate: "",
    subtotal: "",
  });
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const invoiceId = localStorage.getItem("invoiceId");

      if (!invoiceId) {
        console.error("Error: No invoiceId found in localStorage");
        return;
      }

      const response = await fetch(
        `http://localhost:3000/api/invoices/${invoiceId}`,
        {
          method: "PUT", // Use the appropriate HTTP method for updating
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify(invoiceDetails),
        }
      );

      if (!response.ok) {
        throw new Error("Error updating invoice details");
      }
      alert("Invoice details updated successfully!");
      console.log("Invoice details updated successfully!");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handlePreview = () => {
    // Implement your preview functionality here
    alert(JSON.stringify(invoiceDetails, null, 2));
    console.log("Previewing invoice:", invoiceDetails);
  };

  const handleSent = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/api/invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include your JWT token if needed for authentication
          Authorization: `${token}`,
        },
        body: JSON.stringify(invoiceDetails),
      });

      if (!response.ok) {
        throw new Error("Error saving invoice details");
      }
      // Parse the response to get the _id
      const responseBody = await response.json();
      const { _id } = responseBody;

      // Save the _id in localStorage
      localStorage.setItem("invoiceId", _id);
      alert("Invoice details saved successfully!");
      console.log("Invoice details saved successfully!");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleDownload = () => {
    // Convert invoiceDetails to a JSON string
    const jsonInvoice = JSON.stringify(invoiceDetails, null, 2);

    // Create a Blob with the JSON data
    const blob = new Blob([jsonInvoice], { type: "application/json" });

    // Create a download link and trigger the download
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "invoice.json";
    a.click();

    // Cleanup
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    // Implement your print functionality here
    window.print();

    console.log("Printing invoice:", invoiceDetails);
  };

  return (
    <div className="flex bg-slate-950 h-full">
      <h1 className="font-serif text-white text-2xl ml-14 ">Create Invoice</h1>
      <div className="flex">
        <div className="mt-12 -ml-40">
          <Form
            invoiceDetails={invoiceDetails}
            setInvoiceDetails={setInvoiceDetails}
          />
        </div>

        <div className="flex flex-col ml-20 mt-20">
          <button
            className="text-white bg-zinc-600 py-1 px-12 mb-3 hover:bg-teal-600 rounded-md hover:scale-105"
            onClick={handleSave}
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/save-512.png"
              alt="save-logo"
              className="w-6 h-6 inline mr-1 "
            />
            Save
          </button>
          <button
            className="text-white bg-zinc-600 py-1 px-12 mb-3  hover:bg-teal-600 rounded-md hover:scale-105"
            onClick={handlePreview}
          >
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/tool-icon-library/preview-66.png"
              alt="save-logo"
              className="w-6 h-6 inline mr-1 "
            />
            Preview
          </button>
          <button
            className="text-white bg-zinc-600 py-1 px-12 mb-3  hover hover:bg-teal-600 rounded-md hover:scale-105"
            onClick={handleSent}
          >
            <img
              src="https://www.svgrepo.com//show/15468/send.svg"
              alt="save-logo"
              className="w-6 h-6 inline mr-1 "
            />
            Sent
          </button>
          <button
            className="text-white bg-zinc-600 py-1 px-12 mb-3  hover hover:bg-teal-600 rounded-md hover:scale-105"
            onClick={handleDownload}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/879/209/original/download-button-on-transparent-background-free-png.png"
              alt="save-logo"
              className="w-6 h-6 inline mr-1 "
            />
            Download
          </button>
          <button
            className="text-white bg-zinc-600 py-1 px-12 mb-3  hover hover:bg-teal-600 rounded-md hover:scale-105"
            onClick={handlePrint}
          >
            <img
              src="https://cdn.icon-icons.com/icons2/38/PNG/512/print_5636.png"
              alt="save-logo"
              className="w-6 h-6 inline mr-1 "
            />
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;

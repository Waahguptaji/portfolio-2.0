import React from "react";
import Image from "next/image";

const ContactMe: React.FC = () => {
  const fields = [
    {
      id: "name",
      label: "Name",
      placeholder: "Crime Master",
      bgColor: "bg-pink-200",
    },
    {
      id: "email",
      label: "Your email",
      placeholder: "crimemastergogo123@gmail.com",
      bgColor: "bg-yellow-200",
    },
    {
      id: "about",
      label: "About Project",
      placeholder: "I want to discuss with you about...",
      bgColor: "bg-blue-200",
    },
  ];
  return (
    <div className="flex justify-between ml-4 ">
      {/* Left Section */}
      <div className="my-36 space-y-4">
        <div className="text-2xl logo-font bg-custom-pink inline-block mb-4">
          Contact Here
        </div>
        <Image
          src="/assets/arrowe.png"
          alt="arrow"
          width={57}
          height={45}
          className="transform rotate-[230deg] relative left-28"
        />
        <p className="text-gray-600">
          Have a project idea? <br />
          just say <span className="font-bold text-black">Hi.</span>
        </p>
      </div>

      {/* Right Section */}
      <div className="max-w-6xl  ml-16 mt-36">
        {/* Right Section - Form */}
        <form className="flex flex-col gap-8 space-y-4 ">
          {fields.map(({ id, label, placeholder, bgColor }) => (
            <div key={id} className="flex logo-font">
              <label
                className={`text-xl font-bold border-l-2 border-l-black  ${bgColor}`}
              >
                {label}
              </label>
              <input
                type="text"
                id={id}
                className="border-b-2 border-black w-full px-2 text-lg outline-none"
                placeholder={placeholder}
              />
            </div>
          ))}
          <button className="bg-black btn btn-neutral w-32 rounded-none text-white">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;

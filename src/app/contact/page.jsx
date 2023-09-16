"use client";

import Image from "next/image";
import profilePic from "/public/about.jpg";

export const metadata = {
  title: "About",
  desc: "About Yuri",
};

function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name: String(e.target.name.value),
      email: String(e.target.email.value),
      message: String(e.target.message.value),
    };

    console.log(data);
  }

  return (
    <div className="px-4 flex flex-col justify-center bg-gray-400 min-h-screen">
      <h1 className="text-5xl text-blue-900"> Lets talk about it!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="w-full p-4">
          <Image
            className="w-full h-250 object-cover py-2 img cursor-pointer"
            src={profilePic}
            alt="Profile photo Lochipi"
            priority
          />
        </div>
        <div>
          <form
            action="#"
            onSubmit={handleSubmit}
            className="flex flex-col p-2"
          >
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              required
              minLength={3}
              maxLength={150}
              type="text"
              placeholder="Yuri"
              className="p-2 mt-0 focus:outline-none bg-gray-300 text-gray-800"
            />
            <label htmlFor="emails" className="mt-2">
              Email:{" "}
            </label>
            <input
              minLength={5}
              maxLength={100}
              required
              type="email"
              placeholder="yuri@gmail.com"
              className="p-2 focus:outline-none bg-gray-300 text-gray-800"
            />
            <textarea
              className="mt-2 focus:outline-none p-2 bg-gray-300 text-gray-800"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="message"
              minLength={10}
              maxLength={300}
              required
            ></textarea>
            <div className="flex justify-center mt-2">
              <button
                type="submit"
                className="p-2 mt-2 border rounded inline-block w-32 bg-gray-500 hover:bg-gray-700 transition duration-200 text-white font-bold px-4"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

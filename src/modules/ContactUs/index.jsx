import React from "react";

const ContactUs = () => {
  return (
    <section
      id="#contact"
      className="bg-[url('https://preview.colorlib.com/theme/imagine/images/xhero_1.jpg.pagespeed.ic.-Vz4CbjmyF.webp')] z-20 bg-cover bg-fixed relative px-5 py-20 before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:opacity-70 before:bg-gradient-to-r before:from-[#4286f4] before:to-[#42e2f4] before:-z-10"
    >
      <div className="max-w-md md:max-w-6xl mx-auto h-full">
        <div className="max-w-xl m-auto text-center mb-20">
          <h2 className="text-4xl font-semibold mb-3 text-white">Contact Us</h2>
        </div>
        <div className="max-w-2xl mx-auto bg-white">
          <form className="p-12 space-y-5">
            <h2 className="mb-12 text-2xl">Contact Form</h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col">
                <label className="mb-3">First Name</label>
                <input
                  className="appearance-none border w-full py-2 px-3 focus:outline"
                  id="first-name"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-3">Last Name</label>
                <input
                  className="appearance-none border w-full py-2 px-3 focus:outline"
                  id="last-name"
                  type="text"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <label className="mb-3">Email</label>
                <input
                  className="appearance-none border w-full py-2 px-3 focus:outline"
                  id="email"
                  type="text"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <label className="mb-3">Subject</label>
                <input
                  className="appearance-none border w-full py-2 px-3 focus:outline"
                  id="subject"
                  type="text"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <label className="mb-3">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="7"
                  class="appearance-none border w-full py-2 px-3 focus:outlin"
                  placeholder="Leave your message here..."
                />
              </div>
            </div>
            <button type="button" className="relative transition bg-accentMain px-8 py-3 rounded-full text-white text-base shadow-accentMain hover:shadow-accentMainHover hover:-top-px">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

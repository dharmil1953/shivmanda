import React from "react";

const Contacts = () => {
  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-[#EFEFEF]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-primaryColor text-lg leading-6 mb-3 font-semibold">
              Our Address
            </h3>
            <h1 className="mb-5 text-Dark text-2xl sm:text-3xl leading-8 sm:leading-10 font-medium">
              Visit <span className="font-bold uppercase">Our Office</span>
            </h1>
            <p className="text-[#25252A] text-lg sm:text-xl leading-relaxed">
              Shop No, 1170/23, 3rd Floor, <br />
              GT Rd, Block 25, Shakti Nagar,
              <br />
              Delhi, 110007
            </p>
          </div>
          <div>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="py-3 px-5 block w-full rounded-full bg-transparent border border-[#3C3C3C] focus:border-primaryColor outline-none sm:text-sm text-[#25252A] placeholder:text-[#25252A]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="py-3 px-5 block w-full rounded-full bg-transparent border border-[#3C3C3C] focus:border-primaryColor outline-none sm:text-sm text-[#25252A] placeholder:text-[#25252A]"
                  />
                </div>
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="py-3 px-5 block w-full rounded-full bg-transparent border border-[#3C3C3C] focus:border-primaryColor outline-none sm:text-sm text-[#25252A] placeholder:text-[#25252A]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="py-3 px-5 block w-full rounded-full bg-transparent border border-[#3C3C3C] focus:border-primaryColor outline-none sm:text-sm text-[#25252A] placeholder:text-[#25252A]"
                />
              </div>
              <div className="mb-8">
                <textarea
                  rows={3}
                  placeholder="Message"
                  className="py-3 px-5 block w-full rounded-xl bg-transparent border border-[#3C3C3C] focus:border-primaryColor outline-none sm:text-sm text-[#25252A] placeholder:text-[#25252A]"
                ></textarea>
              </div>
              <div className="w-full text-center">
                <input
                  type="button"
                  value="Submit"
                  className="mx-auto px-8 py-2 rounded-full bg-primaryColor hover:bg-transparent border-2 border-transparent hover:border-primaryColor text-Light hover:text-primaryColor font-semibold text-lg duration-300"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

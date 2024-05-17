// Header.js
import * as React from "react";
import './Header.css';
function EmailForm() {
    return (
        <form className="flex gap-5 justify-between pl-7 mt-20 max-w-full text-sm whitespace-nowrap border border-white border-solid rounded-[31.456px] w-[461px] max-md:flex-wrap max-md:pl-5 max-md:mt-10">
            <label htmlFor="emailInput" className="sr-only">
                Email
            </label>
            <input
                type="email"
                id="emailInput"
                name="email"
                className="my-auto leading-[172%] text-ellipsis"
                placeholder="name@company.com"
                aria-label="Email"
            />
            <button
                className="z+10 justify-center px-5 py-6 bg-blue-600 leading-[233%] rounded-[60.492px] text-ellipsis max-md:pr-5"
                type="submit"
            >
                Registrate Gratis!
            </button>
        </form>
    );
}

function EventSection() {
    return (
        <section className="flex relative z+10 flex-col items-center mt-36 mb-7 max-w-full w-[685px] max-md:mt-10 max-md:text-4xl">
            <h1 className="self-stretch tracking-tighter text-red-500 leading-[122%] max-md:max-w-full max-md:text-4xl">
                Eventos personalizados,
            </h1>
            <h2 className="mt-4 tracking-tighter leading-[122%] max-md:max-w-full max-md:text-4xl">
                con lo mejor para,
            </h2>
            <h3 className="mt-4 tracking-tighter leading-[122%] max-md:text-4xl">
                los mejores.
            </h3>
            <EmailForm />
        </section>
    );
}
function Header() {
    return (
      <main className="flex flex-col justify-center items-center px-16 py-20 w-full h-screen max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <div className="container">
          <img
            src={require("./concert-2527495_1920 1.png")}
            className="object-cover w-full h-full"
            alt="Background"
          />
          <div className="centered"><EventSection /></div>
        </div>
      </main>
      
    );
  }

export default Header;
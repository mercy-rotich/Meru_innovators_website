import Institution from "./Institution";
import QuickLinks from "./QuickLinks";
const Footer = () => {
  return (
    <div className="mt-[7rem] border-t border-neutral-300 pt-[1rem]">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 ">
          <Institution />
          <QuickLinks />
          <QuickLinks />
          <QuickLinks />
        </div>
        <hr className="mt-[1rem]" />
        <p className="text-center px-[1rem]">
          &copy; 2025 - 2067 Meru Innovators Club. All rights reserved. Designed
          with passion and innovation.
        </p>
      </div>
    </div>
  );
};

export default Footer;

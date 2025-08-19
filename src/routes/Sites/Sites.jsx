import Hero from "./sections/Hero/Hero";
import "./Sites.css";

const Sites = () => {
  function Margin({ children }) {
    return (
      <div className="m-auto w-11/12 sm:w-10/12 md:w-9/12">{children}</div>
    );
  }
  return (
    <main className="sites-section bg-black">
      <Margin>
        <Hero />
      </Margin>
    </main>
  );
};

export default Sites;

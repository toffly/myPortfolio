import { Navbar, Hero, AboutMe, MyWork, ContactMe } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="paddingX flexCenter">
      <div className="boxWidth">
        <Navbar />
      </div>
    </div>
    <div className="bg-primary flex justify-center items-center sm:min-h-screen">
      <div className="boxWidth">
        <Hero />
      </div>
    </div>
    <div className="bg-primary paddingX flexStart">
      <div className="boxWidth">
        <AboutMe />
        <MyWork />
        <ContactMe />
      </div>
    </div>
  </div>
);

export default App;

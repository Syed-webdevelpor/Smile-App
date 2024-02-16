import Footer from "./components/Footer";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection/firstSection";
import Slider from "./components/Slider/slider";
import SecondSection from "./components/SecondSection/secondSection";
import ThirdSection from "./components/ThirdSection/thirdSection";
import FourthSection from "./components/FourthSection/fourthSection";
import KeyNumbers from "./components/KeyNumbers/keyNumbers";
import Highlights from "./components/Highlights/highlights";
import CallToAction from "./components/CallToAction/callToAction";
import CallToEngagment from "./components/CallToEngagment/callToEngagment";
import SecondCallToAction from "./components/SecondCallToAction/secondCallToAction";

function App() {
  return (
    <>
      <Header />
      <FirstSection />
      <Slider />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <KeyNumbers />
      <Highlights />
      <CallToAction />
      <CallToEngagment />
      <SecondCallToAction />
      <Footer />
    </>
  );
}

export default App;

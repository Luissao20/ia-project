import Header from "./components/header";
import Services from "./components/services";
import Results from "./components/results";
import Contact from "./components/contact";
import Tasks from "./components/tasks";
import InfoSection from "./components/infoSection";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Tasks />
      <InfoSection />
      <Results />
      <Contact />
    </>
  );
}

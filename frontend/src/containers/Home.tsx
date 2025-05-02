import Layout from "../hocs/Layout";

import { Turnos } from "../components/home/Turnos";
import { ImagesSliderDemo } from "../components/home/ImagesSliderDemo";
import { ContactSection } from "../components/home/Map";

function Home() {
  return (
    <Layout>
      <ImagesSliderDemo />
      <Turnos />
      <ContactSection />
    </Layout>
  );
}

export default Home;

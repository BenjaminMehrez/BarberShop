import Layout from "../hocs/Layout";

import { Turnos } from "../components/home/Turnos";
import { ImagesSliderDemo } from "../components/home/ImagesSliderDemo";
// import { AnimatedPinDemo } from "../components/home/AnimatedPinDemo";

function Home() {
  return (
    <Layout>
      <ImagesSliderDemo />
      <Turnos />
      {/* <AnimatedPinDemo /> */}
    </Layout>
  );
}

export default Home;

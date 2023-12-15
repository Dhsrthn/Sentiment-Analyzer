import Footer from "../../components/footer";
import Frame1 from "../../components/landing/frame1";
import Frame2 from "../../components/landing/frame2";

const Landing = () => {
  return (
    <div className="overflow-x-hidden">
      <Frame1 />
      <Frame2 />
      <Footer />
    </div>
  );
};

export default Landing;
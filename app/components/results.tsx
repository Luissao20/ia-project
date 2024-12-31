import ImageSlider from "./imageSlider";

export default function Results() {
  return (
    <section className="lg:h-full bg-[url(../public/robotic-bg3.jpg)] bg-cover bg-no-repeat bg-fixed pt-20 pb-20" >
      <h2 className="text-center text-3xl text-white pb-10 font-bold">Let our work talk for us</h2>
      <h3 className="text-center text-2xl text-white font-bold">Case Studies</h3>
      <ImageSlider />
    </section>
  );
}
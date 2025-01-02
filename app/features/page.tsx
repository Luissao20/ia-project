import Carousel from "../components/carousel";

export default function Home() {
  return (
    <section className="lg:flex lg:flex-col lg:items-center lg:p-10 lg:gap-10 lg:pt-10 lg:h-full">
      <h2 className="text-5xl font-bold pt-20">Innovate, Automate, Dominate.</h2>
      <p className="text-3xl p-40">Agentify.ai is more than just an automation tool. It is the perfect ally for your business and the guide to efficiency and the future.</p>
      <div className="lg:flex lg:flex-col lg:gap-10">
        <div className="lg:box-content lg:bg-[url(../public/casestudy1.png)] lg:bg-cover lg:bg-no-repeat lg:bg-fixed lg:h-full lg:p-10">
          <h3>AI Agent Costumization</h3>
        </div>

        <p>Se refiere a la capacidad de ajustar y adaptar las características de los agentes de IA <br /> para satisfacer necesidades y preferencias específicas. Esto puede incluir <br /> ajustes en el comportamiento, tono, estilo de comunicación, y funcionalidades adicionales.</p>
        <h3>Task Automation</h3>
        <p>Se refiere al uso de software y tecnología para ejecutar tareas repetitivas <br />y rutinarias con mínima intervención humana. Este proceso puede ahorrar <br /> tiempo, reducir errores y aumentar la eficiencia operativa en diversos ámbitos, <br />desde la gestión empresarial hasta el desarrollo de software.</p>
        <h3>Real-time Insights and Analytics</h3>
        <div className="lg:flex lg:flex-rows lg:gap-40 lg:items-center lg:justify-center lg:p-20">
          <h3>Integration with popular tools</h3>
          <div>
            <Carousel />
          </div>
        </div>

      </div>
    </section>
  );
}
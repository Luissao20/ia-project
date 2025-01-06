'use client'
import { motion } from "framer-motion";
import Carousel from "../components/carousel";
import LogoSlider from "../components/logoSlider";

export default function Home() {

  return (
    <section className="lg:flex lg:flex-col lg:items-center lg:gap-10 lg:pt-5 lg:h-full lg:w-full">
      <motion.div className="flex justify-center group relative box-content border-2 m-10 w-[1800px] h-[500px] border-[#594A28] rounded-2xl bg-[url(../public/casestudy1.png)] bg-cover" whileHover={{ boxShadow: '0 0 50px rgb(0, 204, 255)' }}>
        <h2 className="text-8xl items-start pt-5 m-10 -ml-32 text-[#594A28] font-bold select-none backdrop-blur-xl rounded-2xl bg-white/20 w-auto h-40">Innovate, Automate, Dominate.</h2>
        <p className="absolute bottom-0 select-none text-5xl text-white text-justify text-center font-bold box-content p-2 backdrop-blur-2xl bg-white/20 rounded-2xl w-[1100px]">Agentify.ai is more than just an automation tool. It is the perfect ally for your business and the guide to efficiency and the future.</p>
      </motion.div>
      <div className="grid items-center grid-cols-2 flex p-10 pl-20 gap-10 w-full h-[1300px] bg-sky-950">
        <div className="relative w-[825px] h-[600px] rounded-[10px] overflow-hidden 
          before:absolute before:top-[-50%] before:bottom-[-50%] before:right-[-50%] before:left-[-50%] 
          before:bg-[conic-gradient(transparent,#594A28,#00a6ff)]
          before:animate-spin-slow">
          <div className="absolute flex flex-col gap-10 items-center top-[5px] bottom-[5px] left-[5px] right-[5px] rounded-[10px] bg-white bg-[url(../public/rb_23189.png)] bg-cover bg-no-repeat">
            <h3 className="text-6xl pt-20 select-none text-left">AI Agent Costumization</h3>
            <p className="text-3xl select-none text-justify p-10 backdrop-blur-2xl">Ajusta y adapta las características de los agentes de IA para satisfacer necesidades y preferencias específicas de tu empresa</p>
            <div>
              <Carousel />
            </div>
          </div>
        </div>
        <div className="relative w-[825px] h-[600px] rounded-[10px] overflow-hidden 
          before:absolute before:top-[-50%] before:bottom-[-50%] before:right-[-50%] before:left-[-50%] 
          before:bg-[conic-gradient(transparent,#594A28,#00a6ff)]
          before:animate-spin-slow">
          <div className="absolute flex flex-col items-center gap-10 top-[5px] bottom-[5px] left-[5px] right-[5px] rounded-[10px] bg-white bg-[url(../public/673.png)] bg-cover bg-no-repeat">
            <h3 className="text-6xl pt-20 select-none">Task Automation</h3>
            <p className="text-3xl text-justify p-10 select-none backdrop-blur-2xl">Se refiere al uso de software y tecnología para ejecutar tareas repetitivas y rutinarias con mínima intervención humana. Este proceso puede ahorrar tiempo, reducir errores y aumentar la eficiencia operativa en diversos ámbitos, desde la gestión empresarial hasta el desarrollo de software.</p>
          </div>
        </div>
        <div className="relative w-[825px] h-[600px] rounded-[10px] overflow-hidden 
          before:absolute before:top-[-50%] before:bottom-[-50%] before:right-[-50%] before:left-[-50%] 
          before:bg-[conic-gradient(transparent,#594A28,#00a6ff)]
          before:animate-spin-slow">
          <div className="absolute flex flex-col items-center gap-10 top-[5px] bottom-[5px] left-[5px] right-[5px] rounded-[10px] bg-white bg-[url(../public/rb_4182.png)] bg-cover bg-no-repeat">
            <h3 className="text-6xl pt-20 select-none text-center">Real-time Insights and Analytics</h3>
            <ul className="flex flex-col text-base text-justify rounded-2xl backdrop-blur-lg w-[700px] gap-1">
              <li className="p-2 rounded-2xl transition duration-200 easy-in-out hover:scale-[1.1] hover:shadow-md select-none hover:bg-sky-900 hover:text-white"><strong>Monitoreo Continuo:</strong> Accede a paneles de control que se actualizan en tiempo real para supervisar el rendimiento de tus operaciones en cada momento.</li>
              <li className="p-2 rounded-2xl transition duration-200 easy-in-out hover:scale-[1.1] hover:shadow-md select-none hover:bg-sky-800 hover:text-white"><strong>Toma de Decisiones Rápidas:</strong> Con información instantánea a tu alcance, puedes tomar decisiones estratégicas de manera rápida y basada en datos precisos.</li>
              <li className="p-2 rounded-2xl transition duration-200 easy-in-out hover:scale-[1.1] hover:shadow-md select-none hover:bg-sky-700 hover:text-white"><strong>Análisis Predictivo:</strong> Utiliza algoritmos avanzados para predecir tendencias futuras y anticiparte a las necesidades de tu negocio.</li>
              <li className="p-2 rounded-2xl transition duration-200 easy-in-out hover:scale-[1.1] hover:shadow-md select-none hover:bg-sky-600 hover:text-white"><strong>Alertas y Notificaciones:</strong> Configura alertas personalizadas para recibir notificaciones inmediatas cuando se detecten anomalías o cambios significativos en los datos.</li>
              <li className="p-2 rounded-2xl transition duration-200 easy-in-out hover:scale-[1.1] hover:shadow-md select-none hover:bg-sky-600 hover:text-white"><strong>Visualización de Datos:</strong> Presenta tus datos de manera clara y comprensible a través de gráficos interactivos y visualizaciones dinámicas.</li>
            </ul>
          </div>
        </div>
        <div className="relative w-[825px] h-[600px] rounded-[10px] overflow-hidden 
          before:absolute before:top-[-50%] before:bottom-[-50%] before:right-[-50%] before:left-[-50%] 
          before:bg-[conic-gradient(transparent,#594A28,#00a6ff)]
          before:animate-spin-slow">
          <div className="absolute flex flex-col items-center gap-5 top-[5px] bottom-[5px] left-[5px] right-[5px] rounded-[10px] bg-white bg-[url(../public/rb_5102.png)] bg-cover bg-no-repeat">
            <h3 className="text-6xl pt-20 pb-5 select-none text-center select-none">Integration with popular tools</h3>
            <p className="text-2xl pl-10 pr-10 text-justify text-center select-none backdrop-blur-2xl">Maximiza la eficiencia y productividad de tu equipo con nuestra solución de integración que conecta sin esfuerzo con las herramientas más populares del mercado. Nuestra plataforma facilita el flujo de trabajo al unir tus herramientas favoritas en un solo lugar.</p>
            <LogoSlider />
          </div>
        </div>
      </div>
      <div className="flex flex-col p-20 gap-20 items-center">
        <h3 className="text-6xl">Interactive demo</h3>
        <p>Insert video demo here!</p>
      </div>
    </section>
  );
}
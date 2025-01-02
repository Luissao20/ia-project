'use client'
import { motion } from "framer-motion";
import Carousel from "../components/carousel";

export default function Home() {
  return (
    <section className="lg:flex lg:flex-col lg:items-center lg:p-10 lg:gap-10 lg:pt-10 lg:h-full">
      <motion.div className="flex group relative items-start p-20 box-content border-2 m-5 border-[#594A28] rounded-2xl bg-[url(../public/casestudy1.png)] bg-cover cursor-pointer" whileHover={{ scale: 1.0001, boxShadow: '0 0 50px rgb(0, 204, 255)' }}>
        <h2 className="text-7xl text-[#594A28] font-bold pt-20">Innovate, Automate, Dominate.</h2>
        <p className="text-3xl text-[#000386] font-bold p-40 box-content h-full">Agentify.ai is more than just an automation tool. It is the perfect ally for your business and the guide to efficiency and the future.</p>
      </motion.div>
      <div className="lg:box-content lg:border-2 lg:shadow-2xl lg:border-[#594A28] lg:rounded-xl lg:h-full lg:p-10 flex items-center w-[50%] h-auto">
        <h3 className="text-2xl p-10">AI Agent Costumization</h3>
        <p>Se refiere a la capacidad de ajustar y adaptar las características de los agentes de IA para satisfacer necesidades y preferencias específicas. Esto puede incluir ajustes en el comportamiento, tono, estilo de comunicación, y funcionalidades adicionales.</p>

      </div>
      <div className="relative w-48 h-48 bg-white border-2 border-transparent overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-black">Texto dentro del cuadrado</span>
        </div>
        <div className="electric-border"></div>
      </div>

      <motion.div className="relative w-48 h-48 bg-white border-2 border-transparent overflow-hidden" > 
        <div className="absolute inset-0 flex items-center justify-center"> 
          <span className="text-black">Texto dentro del cuadro</span> 
        </div> 
        <motion.div className="absolute inset-0 border-4 rounded-lg" style={{ borderImageSource: 'linear-gradient(45deg, #42a5f5, #478ed1, #03a9f4, #1e88e5)', borderImageSlice: 1, }} animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} /> 
      </motion.div>


      <h3>Task Automation</h3>
      <p>Se refiere al uso de software y tecnología para ejecutar tareas repetitivas <br />y rutinarias con mínima intervención humana. Este proceso puede ahorrar <br /> tiempo, reducir errores y aumentar la eficiencia operativa en diversos ámbitos, <br />desde la gestión empresarial hasta el desarrollo de software.</p>
      <h3>Real-time Insights and Analytics</h3>
      <div className="lg:flex lg:flex-rows lg:gap-40 lg:items-center lg:justify-center lg:p-20">
        <h3>Integration with popular tools</h3>
        <div>
          <Carousel />
        </div>
      </div>
    </section>
  );
}
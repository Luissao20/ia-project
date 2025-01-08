'use client'

import { motion } from "framer-motion";
import Carousel from "../components/carousel";
import LogoSlider from "../components/logoSlider";
import { useEffect, useRef, useState } from "react";
import AutomationList from "../components/automationList";
import ConsultingList from "../components/consultingList";
import DevelopmentList from "../components/developmentList";

type Section = 'section1' | 'section2' | 'section3' | 'section4' | 'section5' | 'section6' | 'section7' | null;

export default function Home() {
  const [showMoreSection, setShowMoreSection] = useState<Section>(null);
  const sectionRefs = {
    section1: useRef<HTMLDivElement>(null),
    section2: useRef<HTMLDivElement>(null),
    section3: useRef<HTMLDivElement>(null),
    section4: useRef<HTMLDivElement>(null),
    section5: useRef<HTMLDivElement>(null),
    section6: useRef<HTMLDivElement>(null),
    section7: useRef<HTMLDivElement>(null),

  }

  const toggleShowMore = (section: Section) => {
    if (showMoreSection === section) {
      setShowMoreSection(null);
    } else {
      setShowMoreSection(section);
    }
  };

  const handleGoBack = () => {
    setShowMoreSection(null);
    setTimeout(() => {
      window.scrollTo({ top: 600, behavior: 'smooth' });
    }, 300); // Asegura que la animación se complete antes de desplazar
  };

  useEffect(() => {
    if (showMoreSection && sectionRefs[showMoreSection].current) {
      setTimeout(() => {
        if (sectionRefs[showMoreSection].current) {
          sectionRefs[showMoreSection].current.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 500); // Asegura que la animación se complete antes de desplazar 
    }
  }, [showMoreSection]);

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="lg:flex lg:flex-col lg:items-center lg:h-full lg:w-full">
      <motion.div className="flex justify-center group relative border-2 border-[#594A28] w-full h-[600px] bg-[url(../public/bg-lines.jpg)] bg-cover" whileHover={{ boxShadow: '0 0 50px rgb(0, 204, 255)' }}
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="absolute top-10 text-8xl items-start pt-8 m-10 -ml-32 text-white font-bold select-none backdrop-blur-sm rounded-2xl w-auto h-40">Innovate, Automate, Dominate.</h2>
        <p className="absolute bottom-20 select-none text-5xl text-white text-justify text-center font-bold box-content p-2 backdrop-blur-sm  rounded-2xl w-[1100px]">Agentify.ai is more than just an automation tool. It is the perfect ally for your business and the guide to efficiency and the future.</p>
      </motion.div>
      <div className="grid items-center grid-cols-3 p-10 flex w-full h-full bg-sky-950">
        <div id="automation" className="relative w-[600px] h-[700px] rounded-[10px] overflow-hidden 
          before:absolute before:top-[-50%] before:bottom-[-50%] before:right-[-50%] before:left-[-50%] 
          before:bg-[conic-gradient(transparent,#594A28,#00a6ff)]
          before:animate-spin-slow group" data-aos="fade-up-right">
          <div className="absolute flex flex-col gap-10 items-center top-[5px] bottom-[5px] left-[5px] right-[5px] rounded-[10px] bg-white bg-[url(../public/rb_23189.png)] bg-cover bg-no-repeat">
            <h3 className="text-4xl pt-20 select-none text-left">Automation</h3>
            <p className="text-2xl select-none text-justify p-10 backdrop-blur-2xl">Adjust and adapt AI agent features to meet your company's specific needs and preferences</p>
            <div className="flex gap-40 pt-5">
              <AutomationList />
              <Carousel />
            </div>
            <motion.button
              className="flex gap-2 absolute bottom-3 left-10 text-[#594A28] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.3 }}
              onClick={() => toggleShowMore('section1')}
            >
              <img src="/arrow_down.svg" alt="arrow_down" width={30} height={40} />
              Show more
            </motion.button>
          </div>
        </div>
        <div id="consulting" className="relative w-[600px] h-[700px] rounded-[10px] overflow-hidden 
          before:absolute before:top-[-50%] before:bottom-[-50%] before:right-[-50%] before:left-[-50%] 
          before:bg-[conic-gradient(transparent,#594A28,#00a6ff)]
          before:animate-spin-slow group" data-aos="fade-up">
          <div className="absolute flex flex-col items-center gap-10 top-[5px] bottom-[5px] left-[5px] right-[5px] rounded-[10px] bg-white bg-[url(../public/673.png)] bg-cover bg-no-repeat">
            <h3 className="text-4xl pt-20 select-none">Consulting</h3>
            <p className="text-2xl text-justify p-10 select-none backdrop-blur-2xl">Software and technology to execute repetitive and routine tasks that save time, reduce errors and increase operational efficiency in various areas, from business management to software development</p>
            <div>
              <ConsultingList />
            </div>
            <motion.button
              className="flex gap-2 absolute bottom-3 left-10 text-[#594A28] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.3 }}
              onClick={() => toggleShowMore('section1')}
            >
              <img src="/arrow_down.svg" alt="arrow_down" width={30} height={40} />
              Show more
            </motion.button>
          </div>
        </div>
        {/* <div className="relative w-[825px] h-[600px] rounded-[10px] overflow-hidden 
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
        </div> */}
        <div id="development" className="relative w-[600px] h-[700px] rounded-[10px] overflow-hidden 
          before:absolute before:top-[-50%] before:bottom-[-50%] before:right-[-50%] before:left-[-50%] 
          before:bg-[conic-gradient(transparent,#594A28,#00a6ff)]
          before:animate-spin-slow group" data-aos="fade-up-left">
          <div className="absolute flex flex-col items-center gap-5 top-[5px] bottom-[5px] left-[5px] right-[5px] rounded-[10px] bg-white bg-[url(../public/rb_5102.png)] bg-cover bg-no-repeat">
            <h3 className="text-4xl pt-20 pb-5 select-none text-center select-none">Development</h3>
            <p className="text-2xl pl-10 pr-10 text-justify text-center select-none backdrop-blur-2xl">Maximize your team's efficiency and productivity with our integration solution that effortlessly connects with the most popular tools on the market. Our platform makes your workflow easier by uniting your favorite tools in one place</p>
            <div className="flex flex-col">
              <div className="pt-10 pl-48">
                <DevelopmentList />
              </div>
              <LogoSlider />
            </div>
            <motion.button
              className="flex gap-2 absolute bottom-3 left-10 text-[#594A28] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.3 }}
              onClick={() => toggleShowMore('section1')}
            >
              <img src="/arrow_down.svg" alt="arrow_down" width={30} height={40} />
              Show more
            </motion.button>
          </div>
        </div>
      </div>
      {showMoreSection === 'section1' && (
        <motion.div ref={sectionRefs.section1}
          className="flex flex-col gap-5 text-justify p-20 border-t border-gray-300 bg-white"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.5 }} >
          <h2 className="text-4xl">The #1 AI and Automation Agency</h2>
          <p className="text-3xl">We combine artificial intelligence with automation to create incredibly efficient processes that connect your apps and automate actions between them, which replaces manual work for massive gains in your team’s bandwidth, quality, speed and customer experience. Fully custom and done-for-you</p>
          {/*En esta parte
          Se puede agregar calquier contenido
          Preferible utilizar otros componentes*/}
          <div className="flex jusify-center">
            <motion.button className="relative flex gap-2 items-center mt-4 text-[#594A28] px-4 py-2"
              onClick={handleGoBack}
              whileHover={{ scale: 1.3 }}
              style={{ transformOrigin: 'center center' }}
            >
              <img src="/arrow_up.svg" alt="arrow_up" width={30} height={40} />
              Go back
            </motion.button>
          </div>
        </motion.div>)}
      {showMoreSection === 'section2' && (
        <motion.div ref={sectionRefs.section2}
          className="flex flex-col gap-5 text-justify p-10 border-t border-gray-300 bg-white mt-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.5 }} >
          <h2>Sección Desplegable 2</h2>
          <p>Contenido adicional que aparece al hacer clic en "Show more".</p>
          {/*En esta parte
          Se puede agregar calquier contenido
          Preferible utilizar otros componentes*/}
          <div className="flex jusify-center">
            <motion.button className="relative flex gap-2 items-center mt-4 text-[#594A28] px-4 py-2"
              onClick={handleGoBack}
              whileHover={{ scale: 1.3 }}
              style={{ transformOrigin: 'center center' }}
            >
              <img src="/arrow_up.svg" alt="arrow_up" width={30} height={40} />
              Go back
            </motion.button>
          </div>
        </motion.div>)}
    </section>
  );
}
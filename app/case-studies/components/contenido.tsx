"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import CaseHeader from "./case-header";


export default function Contenido() {
    const caseStudies = [{
        id: 1,
        title: "Process Automation in a Financial Services Company",
        content: (
            <div className="flex flex-col items center gap-10">
                <p>A financial services company, FinCorp, decided to implement a process automation system to improve operational efficiency and reduce costs. The main goal was to automate the loan approval process, which was previously manual and time-consuming.</p>
                <h4>Project Objectives:</h4>
                <ul className="p-5">
                    <li>Reduction of Process Times: Reduce the average loan approval time from 7 days to 2 days.</li>
                    <li>Improved Accuracy: Minimize human errors in the approval process.</li>
                    <li>Resource Optimization: Allocate tasks more efficiently among employees.</li>
                    <li>Improved Customer Service: Provide faster responses to customers.</li>
                </ul>
    
                <h4>Soluciones Implementadas:</h4>
                <ul>
                    <li>Automatización de la Captura de Datos: Implementación de un sistema de captura de datos automatizado que recoge información de los solicitantes directamente desde formularios en línea.</li>
                    <li>Reglas de Aprobación Automatizadas: Desarrollo de un conjunto de reglas de negocio que determinan automáticamente la elegibilidad de los solicitantes basándose en criterios predefinidos.</li>
                    <li>Flujo de Trabajo Automatizado: Creación de un flujo de trabajo que guía el proceso de aprobación a través de diferentes etapas, con notificaciones automáticas para los empleados responsables.</li>
                    <li>Reportes y Análisis: Implementación de herramientas de reportes y análisis para monitorear el rendimiento del proceso y detectar áreas de mejora.</li>
                </ul>
    
                <h4>Resultados:</h4>
                <ul className="flex flex-col border bg-cyan-600 text-white p-10 gap-10 rounded-2xl">
                    <li>Reducción de Tiempos de Proceso: El tiempo promedio de aprobación de préstamos se redujo de 7 días a 2 días, mejorando significativamente la eficiencia operativa.</li>
                    <li>Mejora de la Precisión: Los errores humanos se redujeron en un 80%, aumentando la precisión del proceso de aprobación.</li>
                    <li>Optimización de Recursos: Los empleados pudieron enfocarse en tareas de mayor valor agregado, mejorando la productividad general.</li>
                    <li>Mejora del Servicio al Cliente: Los clientes recibieron respuestas más rápidas, lo que aumentó la satisfacción y lealtad del cliente.</li>
                </ul>
                <Image
                    src="/connect.png"
                    alt="connect_case-study1"
                    width={300}
                    height={300}
                />
                <button>Soy un botom!</button>
            </div>
        ),
    },
    {
        id: 2,
        title: "Case Study 2",
        content: (
            <div className="flex flex-col items center">
                <h3>Contenido del caso de estudio 2</h3>
                <Image
                    src="/connect.png"
                    alt="connect_case-study1"
                    width={600}
                    height={600}
                />
                <button>Soy un botom 2!</button>
            </div>
        ),
    },
    {
        id: 3,
        title: "Case Study 3",
        content: (
            <div className="flex flex-col items center">
                <h3>Contenido del caso de estudio 2</h3>
                <Image
                    src="/connect.png"
                    alt="connect_case-study1"
                    width={800}
                    height={900}
                />
            </div>
        ),
    },
    {
        id: 4,
        title: "Case Study 4",
        content: (
            <div className="flex flex-col items center">
                <h3>Contenido del caso de estudio 2</h3>
                <Image
                    src="/connect.png"
                    alt="connect_case-study1"
                    width={100}
                    height={100}
                />
            </div>
        ),
    },
        // Agrega más casos de estudio según sea necesario 
    ];
    
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [activeId, setActiveId] = useState<number | null>(null);

    useEffect(() => {
        if (id) {
            setActiveId(parseInt(id));
        }
    }, [id]);

    const toggleContent = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="flex flex-col items-center">
            <CaseHeader />
            <div className="w-full p-10 border border-gray-500">
                {caseStudies.map(study => (
                    <div key={study.id} className="mb-4 p-5">
                        <div className="flex items-center" onClick={() => toggleContent(study.id)}>
                            <h2 className="text-2xl font-bold cursor-pointer text-cyan-700">
                                {study.title}
                            </h2>
                            <span className="ml-2 transform transition-transform duration-300 select-none">
                                {activeId === study.id ? (<Image src="/arrow_up.svg" alt="arrow_up_case" width={20} height={20} />) : (<Image src="/arrow_down.svg" alt="arrow_down_case" width={20} height={20} />)}
                            </span>
                        </div>
                        {activeId === study.id && (
                            <motion.div className="mt-2 select-none p-10 text-xl"
                                key={study.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: study.id ? 1 : 0 }}
                                transition={{ duration: 0.75 }}
                            >
                                {study.content}
                            </motion.div>)}
                    </div>
                ))}
            </div>
        </section>
    );
}
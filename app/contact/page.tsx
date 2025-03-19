"use client";

import { Container } from "@/components/Container";
import { TransitionPage } from "@/components/TransitionPage";
import { MotionTransitions } from "@/components/Transitions";
import Image from "next/image";
import { useState } from "react";
import emailjs from "emailjs-com"; // Importamos EmailJS

// Importando iconos de react-icons
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e: any) => {
        e.preventDefault();

        setIsLoading(true);

        // Enviar correo con EmailJS
        emailjs.sendForm(
            "service_tbusdkj", // Sustituye por tu service_id de EmailJS
            "template_qnn2wfs", // Sustituye por tu template_id de EmailJS
            e.target, // El formulario completo
            "GLxhqgCQu5sw7axdm"
        )
            .then(
                (result) => {
                    console.log(result);
                    setIsSuccess(true);
                    setIsLoading(false);
                    setFormData({ name: '', message: '' });
                },
                (error) => {
                    setIsSuccess(false);
                    setIsLoading(false);
                }
            );
    };

    return (
        <Container>
            <TransitionPage />
            <MotionTransitions position="bottom" className="bottom-0 left-0 hidden md:block md:absolute">
                <Image
                    src="/avatar-works.png"
                    width={200} height={200}
                    className="w-full h-full"
                    alt="Avatar Portfolio"
                />
            </MotionTransitions>

            {/* Contact Card */}
            <div className="flex justify-center items-center mt-10">
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                    {/* Redes Sociales */}
                    <div className="flex justify-center gap-6 mb-6">
                        <a href="https://github.com/lucasbadino" target="_blank" className="hover:text-green-500">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/lucasbadino/" target="_blank" className="hover:text-green-500">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="mailto:lucas.badino.7@gmail.com" className="hover:text-green-500">
                            <FaEnvelope size={30} />
                        </a>
                        <a href="tel:+543574414058" className="hover:text-green-500">
                            <FaWhatsapp size={30} />
                        </a>
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-200">Contacto</h2>
                    <p className="text-gray-400 mt-2">¡Estoy disponible para proyectos interesantes! No dudes en ponerte en contacto.</p>

                    {/* Contact Form */}
                    <div className="mt-6">
                        <form onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-200">Tu Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 mt-1 border rounded-md border-gray-700 bg-gray-900 text-white"
                                    placeholder="Escribe tu nombre"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-200">Tu Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-2 mt-1 border rounded-md border-gray-700 bg-gray-900 text-white"
                                    placeholder="Escribe tu mensaje"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full"
                            >
                                {isLoading ? "Enviando..." : "Enviar"}
                            </button>
                        </form>

                        {isSuccess !== null && (
                            <div className={`mt-4 ${isSuccess ? "text-green-600" : "text-red-600"}`}>
                                {isSuccess ? "¡Mensaje enviado con éxito!" : "Hubo un error al enviar el mensaje."}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ContactPage;

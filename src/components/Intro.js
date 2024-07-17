"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";

const Intro = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left container */}
            <div className="w-full md:w-1/2 relative">
                <Image
                    src="/path-to-your-image.jpg"
                    alt="Image Description"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
            </div>
            {/* Right container */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-start bg-gray-900 text-white">
                <h1 className="text-4xl mb-4 relative">
                    <span className="border-b-2 border-white inline-block">
                        About Rizwan
                    </span>
                </h1>
                <h2 className="text-2xl text-blue-400 mb-4">Experienced Fullstack JavaScript Developer with 5 years of experience in developing innovative web applications across various industries including AI, trading platforms, automotive services, sales forecasting, and blockchain projects.</h2>
                <p className="text-lg mb-8">
                    I’m a Fullstack JavaScript Developer with a passion for developing innovative and user-friendly web applications.
                    <br/><br/>
                    With 5 years of experience, I have worked with a variety of programming languages and tools, including JavaScript, TypeScript, React.js, Next.js, Node.js, Nest.js, MongoDB, SQL, AWS, Docker, Kubernetes, and Microservices. I have successfully delivered numerous projects across various industries and domains, such as AI-based audience measurement, B2B trading platforms, automotive services, sales forecasting, blockchain research tools, cryptocurrency dashboards, and adventure planning.
                    <br/><br/>
                    My strong communication skills and project management experience enable me to work effectively with team members and deliver high-quality results. I hold a Bachelor’s Degree in Computer Science from Sindh Madressatul Islam University.
                </p>
                <div className="flex space-x-4">
                    <a
                        href="https://www.linkedin.com/in/mrizwanshaikh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-2xl"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/imrizwan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-2xl"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://stackoverflow.com/users/6189301/rizwan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-2xl"
                    >
                        <FaStackOverflow />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Intro;

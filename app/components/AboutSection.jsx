"use client"

import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>React</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>MySQL</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Harvard</li>
                <li>University of California, San Diego</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Web Dev Certified</li>
                <li>Mobile Dev Certified</li>
                <li>UI/UX Designer Certified</li>
            </ul>
        )
    },

]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image 
                src="/images/computer.png"
                alt="About Picture"
                width={500}
                height={500}
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className='text-base lg:text-lg'>
                    I am a passionate web developer, driven by an insatiable curiosity for all things digital. 
                    With a keen eye for design and a love for clean, efficient code, I craft websites that not only look stunning but also function seamlessly. 
                    My journey began with HTML and CSS, and I have since delved into JavaScript, React, and beyond.
                </p>
                <div className="flex flex-row mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        Skills
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        Education
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                        Certifications
                    </TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
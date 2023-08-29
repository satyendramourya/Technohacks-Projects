"use client"

import { useRef, useEffect, useState } from 'react'
import { Poppins } from 'next/font/google'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
const poppins = Poppins({ subsets: ['latin'], weight: "500" })

import projects from '../Data/projects'

const Projects = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <div className={`${poppins.className} py-[90px] text-center align-middle gap-3 flex flex-col`}>
            <h2 className='text-4xl font-bold text-slate-300'>Projects</h2>
            <p className='text-xl font-semibold text-slate-500 mb-10'> Things I&#39;ve built so far</p>
            <motion.div className='carousel  overflow-hidden'>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} ref={carousel} className='inner_carousel cursor-grab flex gap-3 '>
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )

}

export default Projects
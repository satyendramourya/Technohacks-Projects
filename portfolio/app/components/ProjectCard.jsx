"use client"

import Image from "next/image"
import { motion } from 'framer-motion'


const ProjectCard = ({ project }) => {
    return (
        <motion.div className="item ">
            <div className="shadow-md min-w-[240px] md:min-w-[400px]" >
                <Image src={project.image} alt={project.name} width="auto" className="rounded-lg m-2" />
            </div>
        </motion.div>
    )
}

export default ProjectCard
import techStack from "../Data/lib"
import Image from 'next/image'


import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: "500" })

const TechStack = () => {

    return (

        <div className={`${poppins.className} py-[90px] text-center align-middle gap-3 flex flex-col`}>
            <h2 className='text-lg md:text-4xl font-bold text-slate-300'>My Tech Stack</h2>
            <p className='text-md md:text-xl font-semibold text-slate-500'> Technologies I&#39;ve been working with recently</p>
            <div className='flex flex-wrap justify-center gap-3 mt-10'>
                {techStack.map((tech, index) => (
                    <div key={index} className='flex flex-col items-center justify-center gap-3 p-5 bg-transparent  rounded-md'>
                        {/* <img src={tech.img} alt={tech.name} className='w-20 h-20' /> */}
                        <Image src={tech.icon} alt={tech.name} width={50} height={50} />
                        {/* <Image src={tech.icon} alt={tech.name} width={auto} height={auto} /> */}
                        <p className='text-lg font-semibold text-slate-500'>{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechStack



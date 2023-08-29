import { Poppins } from 'next/font/google'
import Image from "next/image"
import Coffe_Cat from '../../public/Coffe_Cat.png'
import Coffe_Cat2 from '../../public/coffeeCat2.png'

const poppins = Poppins({ subsets: ['latin'], weight: "500" })


const Hero = () => {
    return (
        <div className={`${poppins.className} py-[90px] grid  md:grid-cols-2 gap-8`}>
            <div className='order-2 md:order-none' >
                <h1 className="text-2xl md:text-5xl font-bold leading-[120.69%]">Hi 👋,<br />
                    My name is<br />
                    <span className="text-indigo-700">Satyendra Mourya</span>.
                </h1>
                <p className="font-bold text-lg md:text-3xl py-3">Front-End  <span className="text-amber-400">Web Developer</span></p>
                <p className="text-slate-400 text-sm md:text-lg">I build all kinds of websites including e-commerce, blogs, portfolios, and more & meet their needs.</p>
                <div className="flex gap-2 md:gap-8 py-7">
                    <button className=" py-2 px-5 md:py-3 md:px-14 rounded-2xl border-2">Projects</button>
                    <button className="border-none bg-blue-700 py-2 px-8 md:py-3 md:px-14 rounded-2xl">CV</button>
                </div>
            </div>
            <div className='order-1 md:order-none flex items-center justify-center '>
                {/* <Image src={Coffe_Cat} alt="Coffe_Cat.png" width={300} height={300} /> */}
                <Image src={Coffe_Cat2} alt="Coffe_Cat.png" width={300} height={300} />
            </div>
        </div>
    )
}

export default Hero
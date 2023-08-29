import { DM_Sans } from 'next/font/google'
const dm_sans = DM_Sans({ subsets: ['latin'] })

const Footer = () => {
    return (
        <div className="py-[50px] w-full font-medium">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <ul className={`${dm_sans.className} hidden  lg:flex items-center justify-between gap-5`}>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Tech Stack</li>
                    <li className='cursor-pointer'>Projects</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
                <p>By  <span className="text-indigo-700">Satyendra Mourya</span></p>
            </div>
        </div>
    )
}

export default Footer
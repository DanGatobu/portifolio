
import imageAssetsVar from '../assets/images/imageAssets'
import { AboutContent } from '../assets/DanInfo'
import {motion} from 'framer-motion'

const AboutDan = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>About 
        <span className='text-neutral-500'>Me </span>
        </h1>
        <div className='flex flex-wrap'>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.9}}
            
            className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center '>
                    <img  className='rounded-2xl' src={imageAssetsVar.chillguy} alt="about" />
                </div>


            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.9}}
            className='w-full lg:w-1/2 lg:p-8'>

                <div className='flex items-center justify-center '>
                    <p className='my-2 max-w-xl py-6'>{AboutContent}</p>
                </div>
                

            </motion.div>

        </div>
        


    </div>
  )
}

export default AboutDan
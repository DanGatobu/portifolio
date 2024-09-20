

// import python,mogodb,postgressql ,django,flask,react,c#,js,wpf icon from react-icons

import {FaPython,FaReact,FaDatabase} from 'react-icons/fa';
import {motion} from 'framer-motion'


const DanTechnologies = () => {

    const iconVariants=(duration)=>({
        initial:{y:-10},
        animate:{y:[10,-10],transition:{duration:duration,repeat:Infinity,ease:'linear',repeatType:'reverse'}}
    });

  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        
        className='my-20 text-center text-4xl '>
            Technologies

        </motion.h1>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            animate='animate'
            variants={iconVariants(2.5)}
            initial='initial'
            
            className='rounded-2xl border-4 border-neutral-800 p-4'>

                <FaPython className='text-7xl text-cyan-500 mx-4' />

            </motion.div>
            <motion.div
            animate='animate'
            variants={iconVariants(2.5)}
            initial='initial'
            
            className='rounded-2xl border-4 border-neutral-800 p-4'>

                <FaReact className='text-7xl text-cyan-500 mx-4' />

            </motion.div>
            <motion.div
            animate='animate'
            variants={iconVariants(2.5)}
            initial='initial'
            className='rounded-2xl border-4 border-neutral-800 p-4'>

                <FaDatabase className='text-7xl text-cyan-500 mx-4' />

            </motion.div>




        </motion.div>


    </div>
  )
}

export default DanTechnologies
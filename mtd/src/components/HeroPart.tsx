import { HeroContent } from "../assets/DanInfo"
import imageAssetsVar from "../assets/images/imageAssets"
import { motion } from "framer-motion"


const HeroPart = () => {

const container=(delay:number)=>({
    hidden:{opacity:0 ,x:-100},
    visible:{opacity:1, transition:{delay:delay, duration:0.5},x:0}
})

    return (
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                  <div className="flex flex-col items-center lg:items-start">
                      <motion.h1
                      initial="hidden"
                        animate="visible"
                        variants={container(0)}
                       className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                          DAN GATOBU
  
                      </motion.h1>
                      <motion.span
                      initial="hidden"
                        animate="visible"
                        variants={container(0.5)}
                       className="bg-gradient-to-r from bg-pink-300 via-slate-500 to-purple-400 bg-clip-text text-3xl tracking-tight text-transparent">
                          SOFTWARE DEVELOPER
  
                      </motion.span>
                      <motion.p 
                        initial="hidden"
                            animate="visible"
                            variants={container(1)}

                      className="my-2 max-w -xl py-6 font-light tracking-tighter">{HeroContent} </motion.p>
  
                  </div>
  
              </div>

            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.2}}  src={imageAssetsVar.background} alt="ME" />

                </div>

            </div>
  
          </div>
      
      </div>
    )
  }
  
  export default HeroPart
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className="container pt-8">

      {/* //image1 */}


        <div className="grid xl:grid-cols-3 gap-4">
            <div className="relative xl:col-span-2 xl:row-start-1 ">
                <img className="w-50% h-full object-cover rounded-lg" src={require('../assets/h.png')} alt="hero image"/>
                <div className='absolute max-w-[470px] sm:ml-16 ml:8 top-[50%] -translate-y-[50%] sm:space-y-4'>
                  <p className='text-2xl hidden sm:block'>100% Original Dry Fruite</p>
                  <h2 className='text-2xl sm:text-4xl md:text-5xl font-bold'>
                    Dried Fruites Best Quality
                  </h2>
                   <p className="text-gray-500 text-xl pt-4 sm:pt-8"> Starting At </p> 
                   <div className='font-medium text-red-600 text-2xl sm:pd-8 pd-4'>
                    $18.36
                   </div>
                   <div className='bg-accentDark hover:bg-accent text-white rounded-full w-fit items-center gap-4 px-4 py-2 text[14px] sm:px-6 sm:py-3 cursor-pointer flex'>
                    Shop Now <BsArrowRight /> 
                   </div>

                </div>
            </div>

{/* //image 2 */}

            <div className='relative grid xl:grid-cols-1  gap-4'>
            <img className="w-full h-full object-cover rounded-lg" src={require('../assets/hero__2.png')} alt="hero image"/>
             <div className='absolute max-w-[470px] sm:ml-16 ml:8 top-[25%] -translate-y-[50%] sm:space-y-2'>
                  
                  <h2 className='text-2xl sm:text-3xl   font-bold'>
                    Best Yummy Pizza
                  </h2>
                   <p className="text-gray-500 text-xl pt-4 "> Starting At </p> 
                   <div className='font-medium text-red-600 sm:text-4xl  pb-8'>
                    $25
                   </div>
                   <div className='bg-accentDark hover:bg-accent text-white rounded-full w-fit  flex items-center  gap-4    text[14px] sm:px-6 sm:py-3 cursor-pointer '>
                    Shop Now <BsArrowRight /> 
                   </div> 

                 </div>




{/* //image 3 */}

                <div className='relative'>
            <img className="w-full h-50% object-cover rounded-lg" src={require('../assets/hero__3.png')} alt="hero image"/>
             <div className='absolute max-w-[470px] sm:ml-16 ml:8 top-[35%] -translate-y-[25%] sm:space-y-2'>
                  
                  <h2 className='text-2xl sm:text-3xl font-bold'>
                    Best Yummy Chipps
                  </h2>
                   <p className="text-gray-500 text-xl pt-4 "> Starting At </p> 
                   <div className='font-medium text-red-600 sm:text-4xl  pb-8'>
                    $10
                   </div>
                   <div className='bg-accentDark hover:bg-accent text-white rounded-full w-fit items-center gap-4 px-4 py-2 text[14px] sm:px-6 sm:py-3 cursor-pointer flex'>
                    Shop Now <BsArrowRight /> 
                   </div>

                </div>
            </div>
            </div>



            
            





        </div>
        
         </div>
  )
}

export default Hero

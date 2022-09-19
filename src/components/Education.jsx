import React from 'react'

const Education = () => {
  return (
    <div name="education" className='bg-white px-5 md:px-10 pb-16'>


      <div className="mx-10 md:mx-32 mb-8 mt-14">
        <p className="text-2xl md:text-4xl text-center font-bold text-black border-black dark:border-gray-500 ">
          Education
        </p>
      </div>


      <div className='space-y-10 hidden md:flex flex-col md:mb-24'>

        <div className='flex p-2 text-sm ml-8 mr-4 border-2 border-black px-2 md:px-6 py-2 bg-gradient-to-br from-cyan-300 to to-blue-300 hover:scale-105 shadow-sm  duration-300 rounded-md md:p-6 '>

          <div className='flex flex-col md:mx-10 space-y-2 font-bold'>

            <div>
            Computer Science and Engineering with Specialization in AI and ML
            </div>
            <div className='md:mx-4 font-semibold'>
              (Vellore Institute of Technology, Bhopal)
            </div>


          </div>


          <div className='flex flex-col ml-auto space-y-2 font-bold'>
            <div>
              Sep 2020 - May 2024 (Expected)
            </div>
            <div className=' md:mx-4 font-semibold'>
              (2nd Year GPA = 8.2/10)
            </div>

          </div>


        </div>



        <div className='flex p-2  border-2 border-black text-sm ml-8 mr-4 px-2  md:px-6 py-2 bg-gradient-to-br from-cyan-300 to to-blue-300 hover:scale-105 shadow-sm duration-300 rounded-md md:p-6 '>


          <div className='flex flex-col md:mx-10 space-y-2 font-bold'>

            <div>
              Class 12th, Non-medical (PCM) branch
            </div>
            <div className='md:mx-4 font-semibold'>
              (DAV Public School Chamba, HP)
            </div>


          </div>


          <div className='flex flex-col ml-auto space-y-2 font-bold '>
            <div>
              April 2018 - June 2019
            </div>
            <div className='font-semibold md:mx-4'>
              (Percentage-93.2%)
            </div>

          </div>


        </div>




        <div className='flex p-2  border-2 border-black text-sm ml-8 mr-4 px-2 md:px-6 py-2 bg-gradient-to-br from-cyan-300 to to-blue-300 hover:scale-105 shadow-sm  duration-300 rounded-md md:p-6 '>


          <div className='flex flex-col md:mx-10 space-y-2 font-bold'>

            <div>
              Class 10th
            </div>
            <div className='font-semibold'>
              (DAV Public School Chamba, HP)
            </div>


          </div>


          <div className='flex flex-col ml-auto space-y-2 font-bold'>
            <div>
              April 2016 - June 2017
            </div>
            <div className='font-semibold md:mx-4'>
              (Percentage - 86.2%)
            </div>

          </div>


        </div>

      </div>

      <div className='md:hidden flex flex-col space-y-8 dark:text-white'>

        <div className=' bg-gradient-to-r border-2 from-cyan-200 to-cyan-300 text-black shadow-md shadow-zinc-500 m-3 rounded-md ml-8 mr-4 text-center p-2'>
          <div>
          Computer Science and Engineering with Specialization in AI and ML
          </div>
          <div className='text-center'>
            (Vellore Institute of Technology, Bhopal)

          </div>
          <div className='pt-6 text-center'>
            Sep 2020 - May 2024 (Expected)
          </div>

          <div className='p-1 text-center '>
            (2nd Year GPA = 8.2/10)
          </div>
        </div>

        <div className='bg-gradient-to-r border-2 from-cyan-200 to-cyan-300 m-3 shadow-md text-black shadow-zinc-500 rounded-md ml-8 mr-4 text-center p-2'>
          <div>
            Class 12th
          </div>
          <div className='text-center'>
            (DAV Public School Chamba, HP)

          </div>
          <div className='pt-6 text-center'>

            April 2018 - June 2019
          </div>

          <div className='p-1 text-center '>
            (Percentage-93.2%)
          </div>
        </div>

        <div className='bg-gradient-to-r border-2 from-cyan-200 to-cyan-300 text-black m-3 shadow-md shadow-zinc-500 rounded-md ml-8 mr-4 p-2 text-center'>
          <div>
            Class 10th
          </div>
          <div className='text-center'>
            (DAV Public School Chamba, HP)

          </div>
          <div className='pt-6 text-center'>
            April 2016 - June 2017
          </div>

          <div className='p-1 text-center '>
            (Percentage-86.2%)
          </div>
        </div>


      </div>



    </div>
  )
}

export default Education
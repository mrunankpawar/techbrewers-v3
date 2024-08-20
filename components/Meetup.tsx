import React from 'react'
import Cards  from '@/components/Cards'
import CardCarousel from "@/components/Cards";


function Meetup() {
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
      
        <CardCarousel />
      </div>
    </div>
  )
}

export default Meetup

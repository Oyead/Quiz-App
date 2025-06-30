import React from 'react'
import Link from 'next/link'
const HomePageButton = () => {
  return (
            <div className="flex justify-center py-10">
      <Link href="/quiz" > 
    <button className="p-5 bg-[#000000] rounded-2xl cursor-pointer text-white">
      Click here to start
    </button></Link>
 
    </div>
  )
}

export default HomePageButton
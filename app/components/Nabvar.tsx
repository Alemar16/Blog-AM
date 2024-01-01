import Link from 'next/link'
import React from 'react'

const Nabvar = () => {
  return (
    <div className='mx-auto max-w-5xl px-6'>
        <div className='flex justify-between items-center h-16 w-full'>
            <Link href="/">
                <div>Blog AM</div>
            </Link>
            <div>theme</div>
        </div>
    </div>
  )
}

export default Nabvar
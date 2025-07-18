// "use client"

import HeroSection from '@/components/home/HeroSection'
import React from 'react'
import What from '@/components/home/What'
import FAQSection from '@/components/home/FAQSection'
const page = () => {
    return (
        <>
            <div className='bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_4px),linear-gradient(to_bottom,#80808012_1px,transparent_4px)] bg-[size:28px_28px] pointer-events-none'>
                <HeroSection />
                <What/>
                <FAQSection />
            </div>


        </>
    )
}
export default page
import Image from 'next/image'
import Link from 'next/link'
import {ReactNode} from 'react'


const RootLayout = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/">
        <Image src="/logo.svg" alt="logo" height={32} width={38} />
        <h2 className='text-primary-100'>PrepWise</h2>
        </Link>
      </nav>

      {children}
    </div>
  )
}

export default RootLayout
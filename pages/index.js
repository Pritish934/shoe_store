import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-900">Wear Your Own Style</h1>
            <p className="mb-8 text-yellow-500 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg">Buy Now</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full ">
            <Image className="object-top object-fill' rounded" width={'720px'} height={'600px'} src={'/bg_shoe_remove.png'}></Image>
          </div>
        </div>
        <section className="text-yellow-600  body-font my-3">
          <div className="container flex justify-center align-middle mx-auto ">
            <div className="flex justify-center flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <Link href={'/kids'}>
                <div className="cursor-pointer p-4 md:w-1/4 sm:mb-0 mb-6 rounded-md mx-1 bg-yellow-400">
                  <button className="rounded-full w-10 h-10 bg-yellow-100 p-0 border-0 inline-flex items-center justify-center text-yellow-500 ml-4">
                    <svg fill="currentColor" strokeLinecap="round" strokeJoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                  <div className="rounded-lg h-64 overflow-hidden">
                    <Image src={'/images.jpg'} height={'503px'} width={'1103px'} className='object-cover object-center '></Image>
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-500 mt-5">Shooting Stars</h2>
                  <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                </div>
              </Link>
              <Link href={'/men'}>
                <div className="cursor-pointer p-4 md:w-1/4 sm:mb-0 mb-6 rounded-md mx-1 bg-yellow-400">
                  <button className="rounded-full w-10 h-10 bg-yellow-100 p-0 border-0 inline-flex items-center justify-center text-yellow-500 ml-4">
                    <svg fill="currentColor" strokeLinecap="round" strokeJoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                  <div className="rounded-lg h-64 overflow-hidden">
                    <Image src={'/images (1).jpg'} height={'503px'} width={'1203px'} className='object-cover object-center '></Image>
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The Catalyzer</h2>
                  <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                </div>
              </Link>
              <Link href={'/women'}>
                <div className="cursor-pointer p-4 md:w-1/4 sm:mb-0 mb-6 rounded-md mx-1 bg-yellow-400">
                  <button className="rounded-full w-10 h-10 bg-yellow-100 p-0 border-0 inline-flex items-center justify-center text-yellow-500 ml-4">
                    <svg fill="currentColor" strokeLinecap="round" strokeJoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                  <div className="rounded-lg h-64 overflow-hidden">
                    <Image src={'/images (2).jpg'} height={'503px'} width={'1203px'} className='object-cover object-center '></Image>
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
                  <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

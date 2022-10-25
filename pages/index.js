import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-900">Wear Your Own Style</h1>
            <p className="mb-8 text-red-500 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">Buy Now</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full ">
            <Image className="object-top object-fill' rounded" width={'720px'} height={'600px'} src={'/preview.png'}></Image>
          </div>
        </div>
      </section>
    </>
  )
}

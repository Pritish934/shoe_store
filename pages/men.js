import React from 'react'
import Image from 'next/image'
import Product from '../models/Product'
import mongoose, { mongo } from 'mongoose'
import Link from 'next/link'

const Men = ({ products }) => {
console.log(Object.keys(products["Robust Running Shoe"]['color']))
  // console.log(products[0].img)
  
  return (
    <>
      <section className="text-yellow-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            {Object.keys(products).length !== 0 ? Object.keys(products).map((item) => {
              return <Link passHref href={'/'}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img src={products[item].img} width={'620px'} height={'460px'} className='object-cover object-center w-full h-full block'></img>
                </a>
                <div className="mt-4">
                  <h3 className="text-yellow-500 text-xs tracking-widest title-font mb-1">{products[item].brand}</h3>
                  <h2 className="text-grey-900 title-font text-lg font-medium">{products[item].title}</h2>
                  <p className="mt-1">{products[item].price}</p>
                </div>
                <div className="flex">
                  {Object.keys(products[item]['color']).map((col)=>{
                    return <img src={col} width={"100px"} height={'200px'}/>
                  })}
                  

{/*                 
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button> */}
                </div>
              </div>
              </Link>
            }) :
              <div>The product is out of stock It is comming soon</div>
            }


          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }

  let products = await Product.find({ category: "men" })
  let men = {}
  for (let item of products) {
    if (item.title in men) {
      if (!men[item.title].color.includes(item.color) && item.availableQty > 0) {
        men[item.title].color.push(item.color)
      }

      if (!men[item.title].size.includes(item.size) && item.availableQty > 0) {
        men[item.title].size.push(item.size)
      }
    }

    else {
      men[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        men[item.title].color = [item.color]
        men[item.title].size = [item.size]
      }
    }
  }

  return {
    props: { "products": JSON.parse(JSON.stringify(men)) }, // will be passed to the page component as props
  }
}

export default Men
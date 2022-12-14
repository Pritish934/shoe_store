import React, { useEffect, useState } from 'react'
import Product from '../../models/Product'
import mongoose, { mongo } from 'mongoose'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
const Post = ({ product, varients }) => {
  const router = useRouter()
  const slug = router.query
  const [color, setColor] = useState(product.color)
  const [size, setSize] = useState(product.size)
 
  const refreshVarients = (newSize, newColor) => {
    let url = `http://localhost:3000/products/${varients[newColor][newSize]['slug']}`
    window.location = url
  }

  console.log(size)
  console.log(varients)
  const arr = [[1, 2, 3]]

  return (
    <>
      <section className="text-yellow-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.img} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-yellow-500 text-3xl title-font font-medium mb-1">{product.title}</h1>
              <div className="flex mb-4">

              </div>
              <p className="leading-relaxed">{product.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-yellow-100 mb-5">


                <div className="flex">
                  {Object.keys(varients).map((item, index) => {
                    let size_lnk = ""
                    let out_put = Object.keys(varients[item]).map((lnk)=>{
                      return size_lnk = lnk
                    })
                    return <div onClick={()=>{refreshVarients(size_lnk,item)}}><Link href={varients[item][size_lnk]['slug']}><img className='mx-1 cursor-pointer' src={item} width={"30px"} height={'20px'}/></Link>
                    </div>
                  })}
                </div>

                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-yellow-300 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-base pl-3 pr-10">
                      {Object.keys(varients[color]).map((item, index) => {
                        return <option>{item}</option>
                      })}

                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-yellow-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-yellow-300">₹{product.price}</span>
                <button className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Button</button>
                <button className="rounded-full w-10 h-10 bg-yellow-200 p-0 border-0 inline-flex items-center justify-center text-yellow-500 ml-4">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
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

  let product = await Product.findOne({ slug: context.query.slug })
  let varients = await Product.find({ title: product.title, category: product.category })

  let colorSizeSlug = {}; //{color:{size:{slug:"wear-your-style"}}}
  for (let item of varients) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    }

    else {
      colorSizeSlug[item.color] = {}
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    }
  }


  return {
    props: { product: JSON.parse(JSON.stringify(product)), varients: JSON.parse(JSON.stringify(colorSizeSlug)) }, // will be passed to the page component as props
  }
}

export default Post
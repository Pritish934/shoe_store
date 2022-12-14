import React, { useState } from 'react'
import Product from '../models/Product'
import mongoose, { mongo } from 'mongoose'
import Link from 'next/link'

const Men = ({ products }) => {
  const [toggleColor, setToggleColor] = useState("hidden")

  
  return (
    <>
      <section className="text-yellow-600 body-font">
        <div className="container px-5 py-24 mx-auto" >
          <div className="flex flex-wrap -m-4"  onMouseOver={()=>{setToggleColor("flex")}} onMouseLeave={()=>{setToggleColor("hidden")}}>
            {Object.keys(products).length !== 0 ? Object.keys(products).map((item) => {
              return <Link passHref href={`/products/${products[item].slug}`}><div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
                <a className="block relative h-48 rounded overflow-hidden">
                  <div><img  src={products[item].img} width={'620px'} height={'460px'} className='object-center w-full h-full block'></img></div>
                </a>
                <div className="mt-4">
                  <h3 className="text-yellow-500 text-xs tracking-widest title-font mb-1">{products[item].brand}</h3>
                  <h2 className="text-grey-900 title-font text-lg font-medium">{products[item].title}</h2>
                  <p className="mt-1">₹{products[item].price}</p>
                </div>

                <div className={toggleColor}>
                  {Object.keys(products[item]['color']).map((col)=>{
                    return <img className='mx-1' src={products[item].color[col]} width={"30px"} height={'20px'}/>
                  })}
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
import React from 'react'
import productimg from "../Images/pricingimg.jpeg"
import "../CSS/Center.css"

function Product() {
  return (
    <>
      <div className='center'>
        <h1>Product</h1>
        <img src={productimg} alt="product" />
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores amet necessitatibus maiores suscipit, ut quas!</h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem mollitia, blanditiis dolorum quisquam consectetur laudantium exercitationem ea fugiat ipsa sequi dolore similique eius? Ipsum, eligendi nam eaque voluptatibus ad accusamus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem mollitia, blanditiis dolorum quisquam consectetur laudantium exercitationem ea fugiat ipsa sequi dolore similique eius? Ipsum, eligendi nam eaque voluptatibus ad accusamus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem mollitia, blanditiis dolorum quisquam consectetur laudantium exercitationem ea fugiat ipsa sequi dolore similique eius? Ipsum, eligendi nam eaque voluptatibus ad accusamus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem mollitia, blanditiis dolorum quisquam consectetur laudantium exercitationem ea fugiat ipsa sequi dolore similique eius? Ipsum, eligendi nam eaque voluptatibus ad accusamus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem mollitia, blanditiis dolorum quisquam consectetur laudantium exercitationem ea fugiat ipsa sequi dolore similique eius? Ipsum, eligendi nam eaque voluptatibus ad accusamus?</p>
      </div>
    </>
  )
}

export default Product
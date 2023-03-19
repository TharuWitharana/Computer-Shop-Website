import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us- com shop app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutus.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h2>About Us</h2>
          <p className="text-justify mt-2">
          Welcome to Techy Bubble, your one-stop-shop for all things tech! We are a computer shop that specializes in providing high-quality products and services to meet all of your technological needs. Our team of knowledgeable experts is committed to helping you find the right products to fit your lifestyle and budget. From desktops and laptops to peripherals and accessories, we offer a wide range of products to choose from. We also provide reliable repair services for your existing devices, ensuring that your technology is always up and running. At Techy Bubble, we are dedicated to providing excellent customer service and delivering top-notch products and services that exceed your expectations. Thank you for choosing Techy Bubble as your go-to computer shop!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About

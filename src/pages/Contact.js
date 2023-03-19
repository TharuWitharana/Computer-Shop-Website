import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us- com shop app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
        <img 
        src="/images/contactus.png"
        alt="contactus"
        style={{ width: "95%" }}
        />

        </div>
        <div className="col-md-4">
          <h3 className="bg-dark p-2 text-white text-center">Contact Us</h3>
          <p className="text-justify mt-2">
            Any query and info about product feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : techybubbleforu@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 0362287782
          </p>
          <p className="mt-3">
          <BiSupport /> : 0702287782
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

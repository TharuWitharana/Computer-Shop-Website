import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy- com shop app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p><h4>Warranty</h4>
              TEchy Bubble Computers’ Warranty Section provides a customer friendly service assuring the customer gets a fair experience. We always try to save both your time and assets by providing a fast and a reliable servi</p>
          <p><h4>Conditions</h4>
          <ol>
  <li>Warranty is only applicable under the ‘Warranty Terms and conditions’ of the Supplier.</li>
  <li>Warranty is only applicable during the time period mentioned in the Invoice. Date of the Invoice will be the Date of Purchase.</li>
  <li>Warranty is not applicable to the items with corrosions, burn marks or any physical damage.</li>
  <li>Warranty is only applicable to the extent of the proof of purchase produced. If no such proof exist, warranty cannot be claimed.</li>
  <li>Warranty covers only the manufacture defects. Damages or defects due to other causes are not covered by the warranty.</li>
  <li>Laptop battery and chargers carry only 01 year warranty.</li>
  
</ol>
 </p>
          
        </div>
      </div>
    </Layout>
  )
}

export default Policy

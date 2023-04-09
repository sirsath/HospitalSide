import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { format } from "date-fns"


export default function ClientAppoinmtnts() {
  const [clientData, setclientData] = useState()
  const [ClintContact, setClintContact] = useState()
  const getAllappoinment = async () => {
    const { data } = await axios.get(`http://localhost:5000/appoinment`)
    setclientData(data.result)
console.log(data.result);
}

const getAllContacts = async () => {
  const { data } = await axios.get(`http://localhost:5000/contacts`)
  console.log(data.result , "Contact");
  setClintContact(data.result)

}
useEffect(()=>{
  getAllappoinment()
  getAllContacts()
},[])

  return <>
   
   <div className="container mt-5">
    <div className="row">
        <div className="col-sm-8 offset-2">
          <h3 className='text-center m-4'>Client Appoitments</h3>
            <table class="table table-primary table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">A.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {
                clientData&&clientData.map((item,i)=> <tr>
                    <th scope="row">{i+1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    {/* <td>{item.chooseDateTime}</td> */}
                    <td>{format(new Date(item.chooseDateTime), 'dd/MMMM/yyyy')}</td>
                  
                  </tr>)
                }
                
                
              </tbody>
            </table>
        </div>

      <div className="col-sm-8 offset-2 mt-5">
        <h3 className='text-center m-4'>Client Contact</h3>
          <table class="table table-primary table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Contact No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Message</th>
                <th scope="col">Subject</th>
              </tr>
            </thead>
            <tbody>
             {
               ClintContact &&
               ClintContact.map((item , i) =>  <tr>
               <th scope="row">1</th>
               <td>{item.name}</td>
               <td>{item.email}</td>
               <td>{item.message}</td>
               <td>{item.subject}</td>
             </tr>)
             }
            </tbody>
          </table>
      </div>  
    </div>
   </div>
  </>
}

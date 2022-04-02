import React, { useEffect, useState } from 'react';
import SideNavigationBar from './SideNavigationBar';
import './Dashboard.css';
import QRCodeGenerator from './QRCodeGenerator/QRCodeGenerator';
import { Form, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {axiosInstance} from '../../AxiosSetup'

import './Dashboard.css';

const Sidebar = () => {
  //   const [select, setSelect] = useState(1);
  //   const user_data = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [insurancefile, setInsuranceFile] = useState({});
  const [pucFile, setPucFile] = useState({});
  const [registrationFile, setRegistrationFile] = useState({});
  const [qrLink, setqrLink] = useState("");
  const [info, setInfo] = useState({});
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  const getUserResponse = async () => {
    let response = await fetch(`http://localhost:5000/dashboard/${localStorage.getItem("email")}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const res = await response.json();
    if(res) setInfo(res); 
    console.log(res)
    setInfo(res);
    console.log(info);
  }

  useEffect(() => {
    getUserResponse()
  },[]);

  const insuranceHandler = async () => {
    const data = new FormData();
    data.append("image", insurancefile);
    data.append("email",localStorage.getItem("email"));

    try {
      let response = await axiosInstance.post("/upload/uploadinsurance", data );
      setMessage("Insurance has been uploaded successfully!!");
      setCount(count+1);
      setError("");

    } catch (error) {
      setMessage("PUC has been uploaded successfully!!");
      setTimeout(() => {
        setError("");
      }, 7000);
      console.log(error)
    }
  }

  const pucHandler = async () => {
    const data = new FormData();
    data.append("image", pucFile);
    data.append("email",localStorage.getItem("email"));

    try {
      let response = await axiosInstance.post("/upload/uploadpuc", data );
      setMessage("PUC has been uploaded successfully!!");
      setCount(count+1);
      setError("");

    } catch (error) {
      setMessage("PUC has been uploaded successfully!!");
      setTimeout(() => {
        setError("");
      }, 7000);
      console.log(error)
    }
  }

  const registrationHandler = async () => {
    const data = new FormData();
    data.append("image", registrationFile);
    data.append("email",localStorage.getItem("email"))
    // data.append("email", localStorage.getItem("email"));

    try {
      let response = await axiosInstance.post("/upload/uploadrc", data );
      console.log(response);
      setMessage("RC has been uploaded successfully!!");
      setCount(count+1);
      setError("");

    } catch (error) {
      setMessage("PUC has been uploaded successfully!!");
      setMessage("");
      setTimeout(() => {
        setError("");
      }, 7000);
      console.log(error)
    }

    // try {
    //   let response = await fetch("http://localhost:5000/upload/uploadrc", {
    //     method: "POST",
    //     body: data,
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   });

    // } catch (error) {
    //   setError(`There was some error !! Please try again`)
    //   setTimeout(() => {
    //     setError("");
    //   }, 7000);
    //   console.log(error)
    // }
  }

  const activateHandler = async (e) => {
    // if(count<3){
    //   setError("All the three files must be uploaded!!");
    //   return
    // }
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:5000/activate", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const res = await response.json();
      console.log(res.message);
      setqrLink(res);

    } catch (error) {
      setError(`There was some error !! Please try again`)
      setTimeout(() => {
        setError("");
      }, 7000);
      console.log(error)
    }
  }



  return (
    <>
      <div className='main'>
        <SideNavigationBar info={info} />

        <div className='container '>
          <div className='row flex_class_one'>
            <div className='col section_one'>
              <div class='p-4'>
                <div class='border border-gray-100 p-6 rounded-lg shadow-md bg-white'>
                  {qrLink && <QRCodeGenerator link={qrLink} />}
                  <QRCodeGenerator />
                </div>
              </div>
            </div>
            <div className='col section_one'>
              <div class='p-4 '>
                <div class='border border-gray-100 p-6 rounded-lg min-h-full shadow-md sub_section_one bg-white'>
                  <h2 class='text-lg text-gray-900 font-medium title-font mb-5'>
                    Name: {info.name}
                  </h2>
                  <h2 class='text-lg text-gray-900 font-medium title-font mb-5'>
                    Date Of Birth: {info.dob}
                  </h2>
                  <h2 class='text-lg text-gray-900 font-medium title-font mb-5 '>
                    Aadhaar Number: {info.aadharcard}
                  </h2>
                  <h2 class='text-lg text-gray-900 font-medium title-font mb-5 '>
                    Email ID: {info.email}
                  </h2>
                  <h2 class='text-lg text-gray-900 font-medium title-font mb-5 '>
                    Phone Number: 9864723990
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <Form>
            <section class='text-gray-600 body-font'>
              {message!=="" && <p style={{color:"green", fontStyle:"italic", fontWeight:"600", fontSize:"1rem"}}>{message}</p>}
              {error!=="" && <p style={{color:"red", fontStyle:"italic", fontWeight:"600", fontSize:"1rem"}}>{error}</p>}
              <div class='container px-5 mx-auto'>
                <div class='flex flex-wrap -m-4'>
                  <div class='p-4 lg:w-1/3'>
                    <div class='h-full px-8 pt-10 rounded-lg overflow-hidden text-center relative'>
                      <Form.Group
                        className='mb-3'
                        controlId='formPlaintextPassword'
                      >
                        <Form.Label className='upload_text'>
                          Insurance
                        </Form.Label>
                        <Col sm='10'>
                          <Form.Control type='file' name="insuranceFile" onChange={(e) => { setInsuranceFile(e.target.files[0]) }} />
                        </Col>
                        <span onClick={insuranceHandler} class="upload_plus_button shadow-md">+</span>
                      </Form.Group>
                    </div>
                  </div>
                  <div class='p-4 lg:w-1/3'>
                    <div class='h-full px-8 pt-10 rounded-lg overflow-hidden text-center relative'>
                      <Form.Group
                        className='mb-3'
                        controlId='formPlaintextPassword'
                      >
                        <Form.Label className='upload_text'>PUC</Form.Label>
                        <Col sm='10'>
                          <Form.Control type='file' name="pucFile" onChange={(e) => { setPucFile(e.target.files[0]) }} />
                        </Col>
                        <span onClick={pucHandler} class="upload_plus_button shadow-md">+</span>
                      </Form.Group>
                    </div>
                  </div>
                  <div class='p-4 lg:w-1/3'>
                    <div class='h-full px-8 pt-10 rounded-lg overflow-hidden text-center relative'>
                      <Form.Group
                        className='mb-3'
                        controlId='formPlaintextPassword'
                      >
                        <Form.Label className='upload_text'>
                          Registration Certificate
                        </Form.Label>
                        <Col sm='10'>
                          <Form.Control type='file' name="registrationFile" onChange={(e) => { setRegistrationFile(e.target.files[0]) }} />
                        </Col>
                        <span onClick={registrationHandler} class="upload_plus_button shadow-md">+</span>
                      </Form.Group>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="p-2 w-full">
              <button onClick={e => activateHandler(e)} class="flex mx-auto mt-10 text-white border-0 py-2 px-8 focus:outline-none text-lg dashborad_activate_btn">Activate</button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

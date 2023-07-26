import React,{useEffect, useState} from 'react'
import Header from './Header'
import {BsPerson} from 'react-icons/bs';
import{AiOutlinePlus} from 'react-icons/ai'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function Profile() {
    const [email,setEmail] = useState('')
    const googledata = JSON.parse(localStorage.getItem("googledata"))
    const nolanuserdata = JSON.parse(localStorage.getItem("nolanuserdata"))
    const [show, setShow] = useState(false);
const [carddetails,setCarddetails] = useState({
    cardnumber:'',
     fullname:"",
     date:"",
     cvv:""
})
const [cardsdata,setCardsdata] = useState([])
useEffect(()=>{
fetchusers()
},[googledata,nolanuserdata])
const fetchusers =()=>{
if(googledata?.email){
    return setEmail(googledata.email)
  }
  else if(nolanuserdata?.email){
    return setEmail(nolanuserdata.email)
  }

}

const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleInputChange= (event) => {
        const { name, value } = event.target;
        setCarddetails((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
      const handleclick=(event)=>{
        event.preventDefault()
        setCardsdata([...cardsdata,carddetails])
      console.log(cardsdata,'cards')
      }
      const handlelogout =(event)=>{
        event.preventDefault()
         localStorage.removeItem("googledata");
         localStorage.removeItem("nolanuserdata")
      }
  return (
    <div className='wallpaper2'>
     <Header /> 
     <h1 className='text-white margin_top_profile'>USER INFO</h1>
     <div>
    <BsPerson className='text-white' style={{fontSize:"40px",margin:"20px 0px 0px 80px"}}/>
    <h6 className='text-white  fw-900' style={{marginLeft:"80px",marginTop:"10px"}}>Full Name:<span style={{fontWeight:"300px",color:"blue"}}>{googledata ? googledata.name:""}</span></h6>
    <h6 className='text-white  fw-900' style={{marginLeft:"80px",marginTop:"10px"}}>Email:<span style={{fontWeight:"300px",color:"blue"}}>{email}</span></h6>
    <h6 className='text-white  fw-900' style={{marginLeft:"80px",marginTop:"10px"}}>Subscription Plan:</h6>
    <h6 className='text-white  fw-900' style={{marginLeft:"80px",marginTop:"10px"}}>Subscription Status:</h6>
    <button style={{padding:"10px 20px",borderRadius:"30px",marginLeft:"80px"}} onClick={handlelogout}>Log Out</button>
    <hr style={{border:"1px solid white"}}/>
    <div className='d-flex mb-5'>
    <h3 className='text-white  fw-bold margin_80' style={{marginTop:"10px",marginRight:"20px"}}>Payment Methods</h3>
    <button style={{padding:"10px 20px",borderRadius:"30px"}} onClick={handleShow}><AiOutlinePlus style={{marginRight:"10px"}}  />Create Payment method</button>
    </div>
    <div className='d-flex justify-content-center'>
    <table class="white-table text-dark" >
    <tr style={{height:"100px"}} >
      <th >Card</th>
      <th>Last 4 digits</th>
      <th>Expiration Date</th>
      <th>Actions</th>
    </tr>
 
    {cardsdata && cardsdata.map((data,index) => (
    <React.Fragment key={index}>
      <tr>
        <td>{data.fullname}</td>
        <td>{data.cardnumber.slice(-4)}</td> 
        <td>{data.date}</td>
        <td>{data.cvv}</td>
      </tr>
    </React.Fragment>
      ))}
 </table>
 </div>
 <hr style={{border:"1px solid white"}}/>
    <div className='d-flex mb-5'>
    <h3 className='text-white  fw-bold margin_80' style={{marginTop:"10px",marginRight:"20px"}}>Billing address</h3>
    </div><div className='d-flex justify-content-center'>
    <table class="white-table text-dark" >
    <tr style={{height:"100px"}} >
      <th >Amount</th>
      <th>Status</th>
      <th>Reason for failure</th>
      <th>Description</th>
      <th>Date</th>
      <th>Receipt</th>
    </tr>
 
    {/* {paymentdata && paymentdata.map((data,index) => (
    <React.Fragment key={index}>
      <tr>
        <td>{data.Amount}</td>
        <td>{data.Status}</td> 
        <td>{data.failure}</td>
        <td>{data.Description}</td>
        <td>{data.Date}</td>
        <td>{data.Receipt}</td>
      </tr>
    </React.Fragment>
      ))} */}
 </table>
 </div>
     </div>
     <>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Payment Method</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First and Lastname"
              autoFocus
              name="fullname" // Added name attribute to identify the input field
              value={carddetails.fullname}
              onChange={handleInputChange}
            />
          </Form.Group>
          <div className='d-flex'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Card number"
                name="cardnumber" 
                value={carddetails.cardnumber}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>MM/YY</Form.Label>
              <Form.Control
                type="date"
                placeholder="MM/YY"
                name="date" 
                value={carddetails.date}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="number"
                placeholder="CVV"
                name="cvv" // Added name attribute to identify the input field
                value={carddetails.cvv}
                onChange={handleInputChange}
              />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleclick}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default Profile

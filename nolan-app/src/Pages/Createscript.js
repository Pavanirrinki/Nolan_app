import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Multiselect } from "multiselect-react-dropdown";
import { Link } from 'react-router-dom';
import axios from 'axios';

const options = [
  { name: "Action", id: 1 },
  { name: "Adventure", id: 7 },
  { name: "Comedy", id: 2 },
  { name: "Detective/Noir", id: 3 },
  { name: "Drama", id: 4 },
  { name: "Fantasy", id: 5 },
  { name: "Horror", id: 6},
  { name: "Mystry", id: 7},
  { name: "Romance", id: 8},
  { name: "Thriller", id: 9},
  { name: "Western", id: 10},
  { name: "Sci-fi", id: 11},
  { name: "Mythology", id: 12},
];
function Createscript({data}) {
  const [title,setTitle] = useState('')
  const [plot,setPlot] = useState('')
  const [file,setFile] = useState([])
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([]);
  const [screenplaytitle,setScreenplaytitle] = useState('')
  const [showed, setShowed] = useState(false);

  const handleClosed = () => setShowed(false);
  const handleShowed = () => setShowed(true);

const handleSelect = (selectedList) => {
    setItems(selectedList);
    
  };
  const handleRemove = (selectedList) => {
    setItems(selectedList);
 };

 const handleFileChange = (event) => {
  console.log("lllllllllll")

  setFile(event.target.files[0]);
  console.log(file,'1234')
};
  const handleClose = () => {
    console.log(file)
    setShow(false);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      console.log(formData.get("file",'lllllllllllllllllllllllllllllllllllllllllllllll'));
    axios.post('http://localhost:4679/post_script',{
      Title:title,
      plot,
      screenplaytitle:"pavan",
      Genere:items,
      File:formData
    })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
  }
  const handleShow = () => setShow(true);
  return (
    <>
      <p onClick={handleShow}>
      {data}
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Script</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="untitled Screenplay"
                autoFocus
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              placeholder='Sci-fi adventure across multiverse'
            >
              <Form.Label>Plot</Form.Label>
              <Form.Control as="textarea" rows={34} value={plot}
                onChange={(e)=>setPlot(e.target.value)} />
            </Form.Group>
            <Form.Group style={{ position: "relative", display: "flex" }}>
                
  <Form.Control
    type="text"
    style={{
      padding: "30px 40px 30px 10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      width:'100%',
      borderRadius:"30px",
      backgroundColor:"#A4C193",
    }}
    onChange={(e)=>setScreenplaytitle(e.target.value)}
    placeholder="Suggest screenplay titles....."
  />
  <Button
    style={{
      position: "absolute",
      top: "50%",
      left: "65%",
      transform: "translateY(-50%)",
      padding: "10px 20px",
      backgroundColor: "white",
      color: "black",
      borderRadius: "5px",
      border: "1px solid black",
      borderRadius:"30px"
    }}
    onClick={handleShowed}
  >
    Suggest Titles
  </Button>
</Form.Group>

<Form.Label style={{margin:"10px",fontWeight:"500"}}>Genere</Form.Label>

<Multiselect 
          options={options} 
         selectedValues={items} 
          onSelect={handleSelect} 
          displayValue="name" 
          avoidHighlightFirstOption
        />
      <p className='text-center' style={{fontWeight:"bold",marginTop:"10px"}}>OR</p>
 <div className='d-flex justify-content-center'>
      <Form.Group className="mb-3" style={{ width: "100px", marginRight: "10px" }}>
        <Form.Control type="file" id="profile"  accept='.pdf' onChange={handleFileChange}/>
        <Form.Label htmlFor='profile' className='label' >Upload .pdf</Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" style={{ width: "100px", marginRight: "10px" }}>
        <Form.Control type="file" id="profile2"  />
        <Form.Label htmlFor='profile2' className='label' onClick={handleShowed}>Upload .FDX</Form.Label>
      </Form.Group>
    </div>
     </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
     
    
    
    
    
    
    
    
      <Modal show={showed} onHide={handleClosed} style={{backgroundColor:"black"}}>
        <Modal.Header closeButton>
          <Modal.Title>Upgrade your plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>To access this feature, please upgrade your plan.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosed}>
            Close
          </Button>
          <Link to="/Pricing">
          <Button variant="danger" onClick={handleClosed}>
            See prices
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
    
  );
}

export default Createscript;

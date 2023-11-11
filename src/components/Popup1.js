// // App.js
// import React, { useState, useEffect } from 'react';
// import { Button, Modal, Table, Form, Dropdown } from 'react-bootstrap';

// const App = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [invoiceId, setInvoiceId] = useState('');
//   const [address, setAddress] = useState('');
//   const [selectedCourse, setSelectedCourse] = useState('');
//   const [amount, setAmount] = useState(0);
//   const [status, setStatus] = useState('Pending');
//   const [data, setData] = useState([]);

//   const handleShow = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);

//   const handleCourseChange = (course) => {
//     setSelectedCourse(course);

//     // Logic to set the amount based on the selected course
//     // This is a placeholder and should be replaced with your actual logic
//     if (course === 'Course A') {
//       setAmount(100);
//     } else if (course === 'Course B') {
//       setAmount(150);
//     } else {
//       setAmount(0);
//     }
//   };

//   const handlePayment = () => {
//     // Logic to update the status based on the amount paid
//     // This is a placeholder and should be replaced with your actual logic
//     if (amount === 0) {
//       setStatus('Pending');
//     } else if (amount < 100) {
//       setStatus('Partial Payment');
//     } else {
//       setStatus('Paid');
//     }
//   };
  

//   const handleSubmit = () => {
//     // Logic to save the data to local storage
//     // This is a placeholder and should be replaced with your actual logic
//     const newData = {
//       name,
//       email,
//       invoiceId,
//       address,
//       date: new Date().toLocaleDateString(),
//       course: selectedCourse,
//       amount,
//       status,
//     };

//     setData([...data, newData]);
//     localStorage.setItem('invoiceData', JSON.stringify([...data, newData]));
//     handleClose();
//   };

//   useEffect(() => {
//     // Load data from local storage on component mount
//     const storedData = localStorage.getItem('invoiceData');
//     if (storedData) {
//       setData(JSON.parse(storedData));
//     }
//   }, []);

//   return (
//     <div>
//       <Button variant="primary" onClick={handleShow}>
//         Open Popup
//       </Button>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Invoice Information</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="invoiceId">
//               <Form.Label>Invoice ID</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter invoice ID"
//                 value={invoiceId}
//                 onChange={(e) => setInvoiceId(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="address">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Enter your address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="course">
//               <Form.Label>Select Course</Form.Label>
//               <Dropdown>
//                 <Dropdown.Toggle variant="success" id="dropdown-basic">
//                   {selectedCourse || 'Select a course'}
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                   <Dropdown.Item onClick={() => handleCourseChange('Course A')}>Course A</Dropdown.Item>
//                   <Dropdown.Item onClick={() => handleCourseChange('Course B')}>Course B</Dropdown.Item>
//                   {/* Add more courses as needed */}
//                 </Dropdown.Menu>
//               </Dropdown>
//             </Form.Group>

//             <Form.Group controlId="amount">
//               <Form.Label>Amount</Form.Label>
//               <Form.Control type="text" value={`$${amount}`} readOnly />
//             </Form.Group>

//             <Form.Group controlId="status">
//               <Form.Label>Status</Form.Label>
//               <Form.Control type="text" value={status} readOnly />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmit}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Invoice ID</th>
//             <th>Address</th>
//             <th>Date</th>
//             <th>Course</th>
//             <th>Amount</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.invoiceId}</td>
//               <td>{item.address}</td>
//               <td>{item.date}</td>
//               <td>{item.course}</td>
//               <td>{`$${item.amount}`}</td>
//               <td>{item.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default App;
// App.js
import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Dropdown, Table } from 'react-bootstrap';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState('Pending');
  const [invoiceId, setInvoiceId] = useState('');
  const [data, setData] = useState([]);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleCourseChange = (course) => {
    setSelectedCourse(course);

    // Placeholder logic to set the amount based on the selected course
    if (course === 'Course A') {
      setAmount(100);
    } else if (course === 'Course B') {
      setAmount(150);
    } else {
      setAmount(0);
    }
  };

  const handlePayment = () => {
    // Placeholder logic to update the status based on the amount paid
    if (amount === 0) {
      setStatus('Pending');
    } else if (amount < 100) {
      setStatus('Partial Payment');
    } else {
      setStatus('Paid');
    }
  };

  const generateInvoiceId = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (`0${currentDate.getMonth() + 1}`).slice(-2);
    const day = (`0${currentDate.getDate()}`).slice(-2);
    const hours = (`0${currentDate.getHours()}`).slice(-2);
    const minutes = (`0${currentDate.getMinutes()}`).slice(-2);
    const seconds = (`0${currentDate.getSeconds()}`).slice(-2);

    setInvoiceId(`${year}${month}${day}_${hours}${minutes}${seconds}`);
  };

  const handleSubmit = () => {
    handlePayment();

    const newData = {
      name,
      email,
      address,
      invoiceId,
      date: new Date().toLocaleDateString(),
      course: selectedCourse,
      amount,
      status,
    };

    setData([...data, newData]);
    localStorage.setItem('invoiceData', JSON.stringify([...data, newData]));

    handleClose();
  };

  useEffect(() => {
    const storedData = localStorage.getItem('invoiceData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <Button variant="primary" onClick={() => { generateInvoiceId(); handleShow(); }}>
        Open Popup
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invoice Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="course">
              <Form.Label>Select Course</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {selectedCourse || 'Select a course'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleCourseChange('Course A')}>Course A</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCourseChange('Course B')}>Course B</Dropdown.Item>
                  {/* Add more courses as needed */}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

            <Form.Group controlId="amount">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="text" value={`$${amount}`} readOnly />
            </Form.Group>

            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" value={status} readOnly />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Invoice ID</th>
            <th>Date</th>
            <th>Course</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>{item.invoiceId}</td>
              <td>{item.date}</td>
              <td>{item.course}</td>
              <td>{`$${item.amount}`}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default App;

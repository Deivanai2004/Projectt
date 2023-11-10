// // // // import React, { useState } from 'react';
// // // // import { Button, Modal } from 'react-bootstrap';

// // // // function PopupExample() {
// // // //   const [show, setShow] = useState(false);

// // // //   const handleClose = () => setShow(false);
// // // //   const handleShow = () => setShow(true);

// // // //   return (
// // // //     <>
// // // //       <Button variant="primary" onClick={handleShow}>
// // // //         create Invoice
// // // //       </Button>

// // // //       <Modal show={show} onHide={handleClose}>
// // // //         <Modal.Header closeButton>
// // // //           <Modal.Title>Popup Example</Modal.Title>
// // // //         </Modal.Header>
// // // //         <Modal.Body>
         
// // // //         </Modal.Body>
// // // //         <Modal.Footer>
// // // //           <Button variant="secondary" onClick={handleClose}>
// // // //             Close
// // // //           </Button>
// // // //         </Modal.Footer>
// // // //       </Modal>
// // // //     </>
// // // //   );
// // // // }

// // // // export default PopupExample;
// // // import React, { useState } from 'react';
// // // import { Modal, Button, Table } from 'react-bootstrap';

// // // const PopupTable = (props) => {
// // //   const [show, setShow] = useState(false);

// // //   const handleClose = () => setShow(false);
// // //   const handleShow = () => setShow(true);

// // //   return (
// // //     <div>
// // //       <Button variant="primary" onClick={handleShow}>
// // //         Open Popup
// // //       </Button>

// // //       <Modal show={show} onHide={handleClose}>
// // //         <Modal.Header closeButton>
// // //           <Modal.Title>Information Table</Modal.Title>
// // //         </Modal.Header>
// // //         <Modal.Body>
// // //           <Table striped bordered hover>
// // //             <thead>
// // //               <tr>
// // //                 <th>Column 1</th>
// // //                 <th>Column 2</th>
// // //                 <th>Column 3</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               <tr>
// // //                 <td>Data 1</td>
// // //                 <td>Data 2</td>
// // //                 <td>Data 3</td>
// // //               </tr>
// // //               {/* Add more rows here with your data */}
// // //             </tbody>
// // //           </Table>
// // //         </Modal.Body>
// // //         <Modal.Footer>
// // //           <Button variant="secondary" onClick={handleClose}>
// // //             Close
// // //           </Button>
// // //         </Modal.Footer>
// // //       </Modal>
// // //     </div>
// // //   );
// // // };

// // // export default PopupTable;
// // import React, { useState } from 'react';
// // import { Modal, Button, Form, Table } from 'react-bootstrap';

// // const UserInputModal = () => {
// //   const [show, setShow] = useState(false);
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [phoneNumber, setPhoneNumber] = useState('');
// //   const [userData, setUserData] = useState([]);

// //   const handleClose = () => setShow(false);
// //   const handleShow = () => setShow(true);

// //   const handleSubmit = () => {
// //     const newUser = { name, email, phoneNumber };
// //     setUserData([...userData, newUser]);
// //     setName('');
// //     setEmail('');
// //     setPhoneNumber('');
// //     handleClose();
// //   };

// //   return (
// //     <div>
// //       <Button variant="primary" onClick={handleShow}>
// //         Open Popup
// //       </Button>

// //       <Modal show={show} onHide={handleClose}>
// //         <Modal.Header closeButton>
// //           <Modal.Title>User Information</Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body>
// //           <Form>
// //             <Form.Group controlId="name">
// //               <Form.Label>Name</Form.Label>
// //               <Form.Control
// //                 type="text"
// //                 placeholder="Enter your name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //               />
// //             </Form.Group>
// //             <Form.Group controlId="email">
// //               <Form.Label>Email</Form.Label>
// //               <Form.Control
// //                 type="email"
// //                 placeholder="Enter your email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
// //             </Form.Group>
// //             <Form.Group controlId="phoneNumber">
// //               <Form.Label>Phone Number</Form.Label>
// //               <Form.Control
// //                 type="text"
// //                 placeholder="Enter your phone number"
// //                 value={phoneNumber}
// //                 onChange={(e) => setPhoneNumber(e.target.value)}
// //               />
// //             </Form.Group>
// //           </Form>
// //         </Modal.Body>
// //         <Modal.Footer>
// //           <Button variant="secondary" onClick={handleClose}>
// //             Close
// //           </Button>
// //           <Button variant="primary" onClick={handleSubmit}>
// //             Save
// //           </Button>
// //         </Modal.Footer>
// //       </Modal>
// //       {userData.length > 0 && (
// //         <Table striped bordered hover>
// //           <thead>
// //             <tr>
// //               <th>Name</th>
// //               <th>Email</th>
// //               <th>Phone Number</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {userData.map((user, index) => (
// //               <tr key={index}>
// //                 <td>{user.name}</td>
// //                 <td>{user.email}</td>
// //                 <td>{user.phoneNumber}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </Table>
// //       )}
// //     </div>
// //   );
// // };

// // export default UserInputModal;
import React, { useState } from 'react';
import { Modal, Button, Form, Table} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Badge } from 'react-bootstrap';
const UserInputModal = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [paidvalue,setpaidvalue] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [invoiceID, setInvoiceID] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [amount, setAmount] = useState('');

  const [userData, setUserData] = useState([]);

  const handleClose = () => {
    setShow(false);
    clearFields();
  };

  const handleShow = () => {
    generateUniqueID();
    setShow(true);
  };

  const clearFields = () => {
    setName('');
    setEmail('');
    setAddress('');
    setSelectedDate(null);
    setSelectedCourse('');
    setAmount('');
    setpaidvalue('');
  };

  const handleSubmit = () => {
    const newUser = {
      name,
      email,
      address,
      date: selectedDate,
      invoiceID,
      course: selectedCourse,
      amount,
      paidvalue,
    };
    setUserData([...userData, newUser]);
    handleClose();
  };

  const generateUniqueID = () => {
    const timestamp = Date.now();
    setInvoiceID(`23CBINV${timestamp}`);
  };

  const handleCourseChange = (e) => {
    const course = e.target.value;
    setSelectedCourse(course);

    // Set the amount based on the selected course
    const courseData = courses.find((c) => c.name === course);
    if (courseData) {
      setAmount(courseData.amount);
    } else {
      setAmount('');
    }
  };

  const courses = [
    { name: 'Full Stack Developement', amount: 5000 },
    { name: 'Front-End Developement', amount: 3000 },
    { name: 'Back-End Developement', amount: 3000 },
    { name: 'JavaScript Course', amount: 2000 },
  ];
    const getStatus = () => {
      if (paidvalue === '0') {
        return 'danger'; // Unpaid
      //   return(
      //   <Button variant="danger" onClick={handleShow}>
      //   unpaid
      // </Button>
      //   )
      } else if (paidvalue < amount) {
        return 'warning'; // Partially Paid
        // return(
        //   <Button variant="warning" onClick={handleShow}>
        //   partial
        // </Button>
        // )
      } else {
        return 'success'; // Paid
        // return(
        //   <Button variant="success" onClick={handleShow}>
        //   paid
        // </Button>
        // )
      }
    };
  
    const getStatusText = () => {
      if (paidvalue=== '0') {
        return 'Unpaid';
      } else if (paidvalue < amount) {
        return 'Partially Paid';
      } else {
        return 'Paid';
      }
    };
  

    

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Open Popup
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Information</Modal.Title>
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
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy/MM/dd"
              />
              {/* <Form.Control as="input" type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} /> */}
            </Form.Group>
                        <Form.Group controlId="course">
              <Form.Label>Course</Form.Label>
              <Form.Control as="select" value={selectedCourse} onChange={handleCourseChange}>
                <option value="">Select a course</option>
                {courses.map((course) => (
                  <option key={course.name} value={course.name}>
                    {course.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="amount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="text"
                placeholder="Amount"
                value={amount}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="paidvalue">
              <Form.Label>paidvalue</Form.Label>
              <Form.Control
                type="text"
                value={paidvalue}
                onChange={(e) => setpaidvalue(e.target.value)}
              />
               </Form.Group>
          </Form>
        </Modal.Body>
        <Badge bg={getStatus()}>{getStatusText()}</Badge>

        <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      {userData.length > 0 && (
        <Table striped bordered hover>
          <thead>
            {/* <tr> */}
            <tr>
              <th>Name</th>
              {/* <th>Email</th> */}
              {/* <th>Address</th> */}
              <th>Date</th>
              <th>Invoice ID</th>
              <th>Course</th>
              <th>Amount</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
      
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                {/* <td>{user.email}</td> */}
                {/* <td>{user.address}</td> */}
                <td>{user.date ? user.date.toDateString() : ''}</td>
                <td>{user.invoiceID}</td>
                <td>{user.course}</td>
                <td>{user.amount}</td>
                <td>{user.getStatusText } </td>

              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default UserInputModal;
// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form, Table } from 'react-bootstrap';
// import { v4 as uuidv4 } from 'uuid';

// const UserInputModal = () => {
//   const [show, setShow] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [invoiceID, setInvoiceID] = useState('');
//   const [selectedCourse, setSelectedCourse] = useState('');
//   const [amount, setAmount] = useState('');
//   const [userData, setUserData] = useState([]);
//   const [userStorage, setUserStorage] = useState([]);

//   useEffect(() => {
//     // Retrieve user data from localStorage when the component mounts
//     const storedData = localStorage.getItem('userData');
//     if (storedData) {
//       setUserStorage(JSON.parse(storedData));
//     }
//   }, []);

//   const saveUserDataToLocalStorage = (data) => {
//     const updatedData = [...userStorage, data];
//     setUserStorage(updatedData);
//     localStorage.setItem('userData', JSON.stringify(updatedData));
//   };

//   const handleClose = () => {
//     setShow(false);
//   };

//   const handleShow = () => {
//     setShow(true);
//     generateUniqueID();
//   };

//   const generateUniqueID = () => {
//     setInvoiceID(`INV-${uuidv4()}`);
//   };

//   const handleCourseChange = (e) => {
//     const course = e.target.value;
//     setSelectedCourse(course);

//     // Set the amount based on the selected course
//     const courseData = courses.find((c) => c.name === course);
//     if (courseData) {
//       setAmount(courseData.amount);
//     } else {
//       setAmount('');
//     }
//   };

//   const handleSubmit = () => {
//     const newUser = {
//       name,
//       email,
//       address,
//       date: selectedDate,
//       invoiceID,
//       course: selectedCourse,
//       amount,
//     };
//     setUserData([...userData, newUser]);
//     saveUserDataToLocalStorage(newUser);
//     handleClose();
//   };

//   const courses = [
//     { name: 'Course 1', amount: 100 },
//     { name: 'Course 2', amount: 200 },
//     { name: 'Course 3', amount: 300 },
//   ];

//   return (
//     <div>
//       <Button variant="primary" onClick={handleShow}>
//         Open Popup
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>User Information</Modal.Title>
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
//             <Form.Group controlId="address">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group controlId="date">
//               <Form.Label>Date</Form.Label>
//               <Form.Control as="input" type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
//             </Form.Group>
//             <Form.Group controlId="course">
//               <Form.Label>Course</Form.Label>
//               <Form.Control as="select" value={selectedCourse} onChange={handleCourseChange}>
//                 <option value="">Select a course</option>
//                 {courses.map((course) => (
//                   <option key={course.name} value={course.name}>
//                     {course.name}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Form.Group>
//             <Form.Group controlId="amount">
//               <Form.Label>Amount</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Amount"
//                 value={amount}
//                 readOnly
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmit}>
//             Save
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       {userData.length > 0 && (
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Address</th>
//               <th>Date</th>
//               <th>Invoice ID</th>
//               <th>Course</th>
//               <th>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userData.map((user, index) => (
//               <tr key={index}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.address}</td>
//                 <td>{user.date}</td>
//                 <td>{user.invoiceID}</td>
//                 <td>{user.course}</td>
//                 <td>{user.amount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </div>
//   );
// };

// export default UserInputModal;


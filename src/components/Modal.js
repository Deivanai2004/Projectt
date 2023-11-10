import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import "./style/Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      InvoiceID:"",
      NAME: "",
      Course: "",
      status: "paid",
      DATE:""
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.NAME && formState.COURSES && formState.status) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value  });
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (DATE) => {
    setSelectedDate(DATE);
  };
  const courses = [
    { name: 'Full Stack Developement', amount: 5000 },
    { name: 'Front-End Developement', amount: 3000 },
    { name: 'Back-End Developement', amount: 3000 },
    { name: 'JavaScript Course', amount: 2000 },
  ];
  const [selectedCourse, setSelectedCourse] = useState('');
  const [amount, setAmount] = useState('');

  const handleCourseChange = (e) => {
    const courseName = e.target.value;
    setSelectedCourse(courseName);

    // Find the amount for the selected course
    const selectedCourseObj = courses.find((course) => course.name === courseName);
    if (selectedCourseObj) {
      setAmount(selectedCourseObj.amount);
    }
  };
  const [invoiceID, setInvoiceID] = useState('');
  useEffect(() => {
    const newInvoiceID = generateUniqueID();
    setInvoiceID(newInvoiceID);
  }, []);
  const generateUniqueID = () => {
    const timestamp = Date.now();
    return `INV-${timestamp}`;
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="NAME">NAME</label>
            <input name="NAME" onChange={handleChange} value={formState.NAME} />
          </div>
          <div>
          <label>Invoice ID:</label>
          <input type="text" value={invoiceID} readOnly />
        </div>
          <div className="form-group">
            <label htmlFor="COURSES">COURSES</label>
            <textarea
              name="COURSES"
              onChange={handleChange}
              value={formState.COURSES}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="paid">paid</option>
              <option value="partiallypaid">partially paid</option>
              <option value="unpaid">unpaid</option>
            </select>
          </div>
          
      <div>
        <label>Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy/MM/dd" // You can customize the date format
        />
      </div>
      <div>
        <label>Course:</label>
        <select value={selectedCourse} onChange={handleCourseChange}>
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course.name} value={course.name}>
              {course.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input type="text" value={amount} readOnly />
      </div>
   
  <br></br>
  

          {errors && <div className="error">{`Please include: ${errors}`}</div>}
 <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { Modal, Button, Form, Col, Row } from 'react-bootstrap';

// import '../styles/Modal.css';

// export const MyModal = ({ closeModal, onSubmit, defaultValue }) => {
//   const [formState, setFormState] = useState(
//     defaultValue || {
//       InvoiceID: '',
//       NAME: '',
//       COURSES: '',
//       status: 'paid',
//       DATE: null,
//     }
//   );

//   const [errors, setErrors] = useState('');

//   const validateForm = () => {
//     if (formState.NAME && formState.COURSES && formState.status && formState.DATE) {
//       setErrors('');
//       return true;
//     } else {
//       let errorFields = [];
//       for (const [key, value] of Object.entries(formState)) {
//         if (!value) {
//           errorFields.push(key);
//         }
//       }
//       setErrors(errorFields.join(', '));
//       return false;
//     }
//   };

//   const handleChange = (e) => {
//     setFormState({ ...formState, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     onSubmit(formState);

//     closeModal();
//   };

//   const courses = [
//     { name: 'Full Stack Development', amount: 5000 },
//     { name: 'Front-End Development', amount: 3000 },
//     { name: 'Back-End Development', amount: 3000 },
//     { name: 'JavaScript Course', amount: 2000 },
//   ];

//   const [selectedCourse, setSelectedCourse] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleCourseChange = (e) => {
//     const courseName = e.target.value;
//     setSelectedCourse(courseName);

//     // Find the amount for the selected course
//     const selectedCourseObj = courses.find((course) => course.name === courseName);
//     if (selectedCourseObj) {
//       setAmount(selectedCourseObj.amount);
//     }
//   };

//   const [invoiceID, setInvoiceID] = useState('');

//   useEffect(() => {
//     const newInvoiceID = generateUniqueID();
//     setInvoiceID(newInvoiceID);
//   }, []);

//   const generateUniqueID = () => {
//     const timestamp = Date.now();
//     return `INV-${timestamp}`;
//   };

//   return (
//     <Modal show={true} onHide={closeModal}>
//       <Modal.Header closeButton>
//         <Modal.Title>My Modal</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form>
//           <Form.Group as={Row}>
//             <Form.Label column sm={2}>
//               NAME
//             </Form.Label>
//             <Col sm={10}>
//               <Form.Control name="NAME" onChange={handleChange} value={formState.NAME} />
//             </Col>
//           </Form.Group>
//           <Form.Group as={Row}>
//             <Form.Label column sm={2}>
//               Invoice ID:
//             </Form.Label>
//             <Col sm={10}>
//               <Form.Control type="text" value={invoiceID} readOnly />
//             </Col>
//           </Form.Group>
//           <Form.Group as={Row}>
//             <Form.Label column sm={2}>
//               COURSES
//             </Form.Label>
//             <Col sm={10}>
//               <Form.Control
//                 as="textarea"
//                 name="COURSES"
//                 onChange={handleChange}
//                 value={formState.COURSES}
//               />
//             </Col>
//           </Form.Group>
//           <Form.Group as={Row}>
//             <Form.Label column sm={2}>
//               Status
//             </Form.Label>
//             <Col sm={10}>
//               <Form.Control
//                 as="select"
//                 name="status"
//                 onChange={handleChange}
//                 value={formState.status}
//               >
//                 <option value="paid">paid</option>
//                 <option value="partiallypaid">partially paid</option>
//                 <option value="unpaid">unpaid</option>
//               </Form.Control>
//             </Col>
//           </Form.Group>
//           <Form.Group as={Row}>
//             <Form.Label column sm={2}>
//               Date
//             </Form.Label>
//             <Col sm={10}>
//               <DatePicker
//                 selected={formState.DATE}
//                 onChange={(date) => setFormState({ ...formState, DATE: date })}
//                 dateFormat="yyyy/MM/dd"
//               />
//             </Col>
//           </Form.Group>
//           <Form.Group as={Row}>
//             <Form.Label column sm={2}>
//               Course
//             </Form.Label>
//             <Col sm={10}>
//               <Form.Control as="select" value={selectedCourse} onChange={handleCourseChange}>
//                 <option value="">Select a course</option>
//                 {courses.map((course) => (
//                   <option key={course.name} value={course.name}>
//                     {course.name}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Col>
//           </Form.Group>
//           <Form.Group as={Row}>
//             <Form.Label column sm={2}>
//               Amount
//             </Form.Label>
//             <Col sm={10}>
//               <Form.Control type="text" value={amount} readOnly />
//             </Col>
//           </Form.Group>
//         </Form>
//         {errors && <div className="error">{`Please include: ${errors}`}</div>}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={closeModal}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handleSubmit}>
//           Submit
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

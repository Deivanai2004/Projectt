
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbar';
import Home from './components/Home'
import Popup from './components/Popup'


function App() {
  return (
    <div className="App">
      <Navbarr/>
      <Home/>
      <Popup/> 
    
    </div>
  );
}

export default App;
// import { useState } from "react";
// import Home from './Home'
// import "./App.css";
// import { Table } from "./Table";
// import { Modal } from "./Modal";

// function App() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [rows, setRows] = useState([]);
//   const [rowToEdit, setRowToEdit] = useState(null);

//   const handleDeleteRow = (targetIndex) => {
//     setRows(rows.filter((_, idx) => idx !== targetIndex));
//   };

//   const handleEditRow = (idx) => {
//     setRowToEdit(idx);

//     setModalOpen(true);
//   };

//   const handleSubmit = (newRow) => {
//     rowToEdit === null
//       ? setRows([...rows, newRow])
//       : setRows(
//           rows.map((currRow, idx) => {
//             if (idx !== rowToEdit) return currRow;

//             return newRow;
//           })
//         );
//   };

//   return (
    
//     <div className="App">
//       <Home/>
//       <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
//       <button onClick={() => setModalOpen(true)} className="btn">
//         Add
//       </button>
//       {modalOpen && (
//         <Modal
//           closeModal={() => {
//             setModalOpen(false);
//             setRowToEdit(null);
//           }}
//           onSubmit={handleSubmit}
//           defaultValue={rowToEdit !== null && rows[rowToEdit]}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Table } from 'react-bootstrap';
import {PaymentStatusBadge} from './PaymentStatusBadge';

const UserTable = ({ userData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Invoice ID</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Payment Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.invoiceID}</td>
            <td>{new Date(user.date).toDateString()}</td>
            <td>{user.amount}</td>
            <td>
              <PaymentStatusBadge amount={user.amount} />
            </td>
            <td>
              {/* Add other action buttons or actions here */}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;

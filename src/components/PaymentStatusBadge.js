import React from 'react';
import { Badge } from 'react-bootstrap';

const PaymentStatusBadge = ({ amount }) => {
  const getStatus = () => {
    if (amount === 0) {
      return 'danger'; // Unpaid
    } else if (amount < 1000) {
      return 'warning'; // Partially Paid
    } else {
      return 'success'; // Paid
    }
  };

  const getStatusText = () => {
    if (amount === 0) {
      return 'Unpaid';
    } else if (amount < 1000) {
      return 'Partially Paid';
    } else {
      return 'Paid';
    }
  };

  return (
    <Badge bg={getStatus()}>{getStatusText()}</Badge>
  );
};

export default PaymentStatusBadge;

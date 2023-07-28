import React from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import './Orders.css'
const OrdersPage = () => {
  const orders = [
    {
      id: 1,
      orderNumber: 'ORD123456',
      date: '2023-07-11',
      total: 199.99,
      status: 'Delivered',
    },
    {
      id: 2,
      orderNumber: 'ORD654321',
      date: '2023-07-10',
      total: 599.99,
      status: 'Shipped',
    },
    {
      id: 3,
      orderNumber: 'ORD987654',
      date: '2023-07-09',
      total: 149.99,
      status: 'Processing',
    },
    {
      id: 4,
      orderNumber: 'ORD567890',
      date: '2023-07-08',
      total: 299.99,
      status: 'Shipped',
    },
    // Add more orders as needed
  ];

  const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.spacing(2),
  }));

  const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
    fontWeight: 'bold',
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    borderBottom: 'none',
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:last-child td, &:last-child th': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  return (
    <div className='rrr'>
    <div className='orders-container'>
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableHeadCell>Order Number</StyledTableHeadCell>
              <StyledTableHeadCell>Date</StyledTableHeadCell>
              <StyledTableHeadCell>Total</StyledTableHeadCell>
              <StyledTableHeadCell>Status</StyledTableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <StyledTableRow key={order.id}>
                <StyledTableCell>{order.orderNumber}</StyledTableCell>
                <StyledTableCell>{order.date}</StyledTableCell>
                <StyledTableCell>Rupees: {order.total.toFixed(2)}</StyledTableCell>
                <StyledTableCell>{order.status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </div>
    </div>
  );
};

export default OrdersPage;

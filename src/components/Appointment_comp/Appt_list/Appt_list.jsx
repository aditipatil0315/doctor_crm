import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  useMediaQuery,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Appt_list = ({ appointments }) => {
  const [sortField, setSortField] = useState("time");
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleSortChange = (e) => {
    setSortField(e.target.value);
  };

  const sortedAppointments = [...appointments].sort((a, b) =>
    a[sortField] > b[sortField] ? 1 : -1
  );

  const handleCancel = (id) => {
    alert(`Cancel appointment with id: ${id}`);
    // implement logic
  };

  const handleReminder = (id) => {
    alert(`Send reminder for appointment with id: ${id}`);
    // implement logic
  };

  const handleDone = (id) => {
    alert(`Mark appointment with id: ${id} as done`);
    // implement logic
  };

  return (
    <Box width="100%" p={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        mb={2}
      >
        <Typography variant="h6">Today's Appointments</Typography>
        <Box>
          <Select value={sortField} onChange={handleSortChange} size="small">
            <MenuItem value="time">Time</MenuItem>
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="status">Status</MenuItem>
          </Select>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          size="small"
          aria-label="appointments table"
        >
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Patient Name</TableCell>
              {!isMobile && <TableCell>Age</TableCell>}
              {!isMobile && <TableCell>Treatment</TableCell>}
              <TableCell>Status</TableCell>
              {!isMobile && <TableCell>Date</TableCell>}
              <TableCell>Time</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedAppointments.map((appt, index) => (
              <TableRow key={appt.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{appt.name}</TableCell>
                {!isMobile && <TableCell>{appt.age}</TableCell>}
                {!isMobile && <TableCell>{appt.treatment}</TableCell>}
                <TableCell>{appt.status}</TableCell>
                {!isMobile && <TableCell>{appt.date}</TableCell>}
                <TableCell>{appt.time}</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="success"
                    onClick={() => handleDone(appt.id)}
                  >
                    <CheckCircleIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => handleReminder(appt.id)}
                  >
                    <NotificationsActiveIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleCancel(appt.id)}
                  >
                    <CancelIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Appt_list;

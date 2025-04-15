import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

const PatientList = ({ patients }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [editId, setEditId] = useState(null);
  const [editedPatient, setEditedPatient] = useState({});

  const handleEditClick = (patient) => {
    setEditId(patient.id);
    setEditedPatient(patient);
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditedPatient({});
  };

  const handleSaveEdit = () => {
    alert("Save edited patient: " + JSON.stringify(editedPatient));
    setEditId(null);
    // You can handle update logic here
  };

  const handleDelete = (id) => {
    alert(`Delete patient with id: ${id}`);
    // Handle delete logic here
  };

  const handleChange = (field, value) => {
    setEditedPatient((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Box width="100%" p={2}>
      <Typography variant="h6" mb={2}>
        Patient List
      </Typography>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              {!isMobile && <TableCell>Age</TableCell>}
              {!isMobile && <TableCell>Gender</TableCell>}
              <TableCell>Contact</TableCell>
              {!isMobile && <TableCell>Address</TableCell>}
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(patients || []).map((patient, index) => (
              <TableRow key={patient.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {editId === patient.id ? (
                    <TextField
                      value={editedPatient.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      size="small"
                      fullWidth
                    />
                  ) : (
                    patient.name
                  )}
                </TableCell>
                {!isMobile && (
                  <TableCell>
                    {editId === patient.id ? (
                      <TextField
                        value={editedPatient.age}
                        onChange={(e) => handleChange("age", e.target.value)}
                        size="small"
                        fullWidth
                      />
                    ) : (
                      patient.age
                    )}
                  </TableCell>
                )}
                {!isMobile && (
                  <TableCell>
                    {editId === patient.id ? (
                      <TextField
                        value={editedPatient.gender}
                        onChange={(e) => handleChange("gender", e.target.value)}
                        size="small"
                        fullWidth
                      />
                    ) : (
                      patient.gender
                    )}
                  </TableCell>
                )}
                <TableCell>
                  {editId === patient.id ? (
                    <TextField
                      value={editedPatient.contact}
                      onChange={(e) => handleChange("contact", e.target.value)}
                      size="small"
                      fullWidth
                    />
                  ) : (
                    patient.contact
                  )}
                </TableCell>
                {!isMobile && (
                  <TableCell>
                    {editId === patient.id ? (
                      <TextField
                        value={editedPatient.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                        size="small"
                        fullWidth
                      />
                    ) : (
                      patient.address
                    )}
                  </TableCell>
                )}
                <TableCell align="center">
                  {editId === patient.id ? (
                    <>
                      <IconButton
                        color="success"
                        onClick={() => handleSaveEdit()}
                      >
                        <SaveIcon />
                      </IconButton>
                      <IconButton
                        color="inherit"
                        onClick={() => handleCancelEdit()}
                      >
                        <CancelIcon />
                      </IconButton>
                    </>
                  ) : (
                    <>
                      <IconButton
                        color="primary"
                        onClick={() => handleEditClick(patient)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(patient.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {patients.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No patients found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PatientList;

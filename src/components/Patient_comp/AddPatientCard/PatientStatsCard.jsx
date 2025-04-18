// import React from "react";
// import {
//   Box,
//   Button,
//   Typography,
//   TextField,
//   Grid,
//   useMediaQuery,
//   useTheme,
//   Card,
//   CardContent,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";

// const AddPatientCard = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const stats = [
//     { label: "New Patients (24h)", value: 12 },
//     { label: "Today’s Patients", value: 8 },
//     { label: "Upcoming Appointments", value: 5 },
//   ];

//   return (
//     <Card
//       sx={{
//         width: { xs: "90vw", sm: "70vw", md: "40vw", lg: "30vw" },
//         margin: "auto",
//         mt: 4,
//         borderRadius: 3,
//         boxShadow: 3,
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<AddIcon />}
//           sx={{ textTransform: "none", fontWeight: 600 }}
//         >
//           Add Patient
//         </Button>
//       </Box>

//       <CardContent>
//         <Typography variant="h6" fontWeight={600} mb={2}>
//           Patient Stats
//         </Typography>
//         <Grid container spacing={2}>
//           {stats.map((stat, index) => (
//             <Grid item xs={12} sm={6} key={index}>
//               <Box
//                 sx={{
//                   backgroundColor: "#f5f5f5",
//                   borderRadius: 2,
//                   p: 2,
//                   textAlign: "center",
//                 }}
//               >
//                 <Typography variant="subtitle1" fontWeight={500}>
//                   {stat.label}
//                 </Typography>
//                 <Typography variant="h6" fontWeight={700} color="primary">
//                   {stat.value}
//                 </Typography>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </CardContent>

//       <Box sx={{ p: 2, textAlign: "center" }}>
//         <TextField
//           fullWidth={isMobile}
//           size="small"
//           placeholder="Search Patients..."
//           sx={{
//             width: { xs: "100%", sm: "60%" },
//           }}
//         />
//       </Box>
//     </Card>
//   );
// };

// export default AddPatientCard;


import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardContent, 
  Typography, 
  Button, 
  TextField, 
  InputAdornment,
  Grid,
  Box
} from '@mui/material';
import { PersonAdd, Search } from '@mui/icons-material';

const PatientCard = () => {
  const stats = [
    { value: 24, label: 'New Patients (24h)' },
    { value: 18, label: "Today's Appointments" },
    { value: 156, label: 'Active Patients' },
  ];

  return (
    <Card sx={{
      width: 'auto',
      minWidth: 300,
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      border: 'none',
      bgcolor: '#fafafa'
    }}>
      <CardHeader
        title="Patient Overview"
        titleTypographyProps={{ 
          fontSize: '1.1rem',
          fontWeight: 600,
          color: 'text.primary'
        }}
        action={
          <Button 
            variant="contained" 
            size="small"
            startIcon={<PersonAdd />}
            sx={{
              borderRadius: '6px',
              textTransform: 'none',
              bgcolor: '#673ab7',
              '&:hover': { bgcolor: '#5e35b1' }
            }}
          >
            Add New
          </Button>
        }
        sx={{ 
          p: 2,
          pb: 1,
          borderBottom: '1px solid #eee'
        }}
      />
      
      <CardContent sx={{ p: 2 }}>
        <Grid container spacing={2} justifyContent="space-between">
          {stats.map((stat, index) => (
            <Grid item key={index} sx={{ flex: 1, minWidth: 100 }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 1.5,
                height: '90px',
                bgcolor: 'white',
                borderRadius: '8px',
                border: '1px solid #f0f0f0'
              }}>
                <Typography sx={{ 
                  fontWeight: 700, 
                  fontSize: '1.5rem', 
                  color: '#673ab7',
                  lineHeight: 1
                }}>
                  {stat.value}
                </Typography>
                <Typography sx={{ 
                  fontSize: '0.75rem', 
                  color: 'text.secondary',
                  textAlign: 'center',
                  mt: 0.5,
                  lineHeight: 1.2
                }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
      
      <Box sx={{ p: 2, pt: 0 }}>
        <TextField
          placeholder="Search patients..."
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
              bgcolor: 'white',
              fontSize: '0.875rem',
              '& fieldset': { borderColor: '#e0e0e0' },
              '&:hover fieldset': { borderColor: '#b39ddb' },
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: '#9575cd', fontSize: '1.1rem' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Card>
  );
};

export default PatientCard;

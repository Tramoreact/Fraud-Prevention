// // import { useState, useEffect } from "react";
// // import {
// //   Box,
// //   Button,
// //   Dialog,
// //   DialogActions,
// //   DialogContent,
// //   DialogTitle,
// //   MenuItem,
// //   Pagination,
// //   Paper,
// //   Select,
// //   Stack,
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   TextField,
// //   Typography,
// // } from "@mui/material";
// // import axios from "axios";
// // import Config from "./Config";
// // const statusColors: Record<string, "success" | "error" | "warning"> = {
// //   Low: "success",
// //   High: "error",
// //   Medium: "warning",
// // };

// // type formvaluesProps = {
// //   type: string;
// //   value: string;
// //   remarks: string;
// // };

// // const FraudPreventionShield = () => {
// //   // const navigate= useNavigate();
// //   const [page, setPage] = useState(1);
// //   const [users, setUsers] = useState<any[]>([]);
// //   const [open, setOpen] = useState(false);
// //   const [openSecondDialog, setOpenSecondDialog] = useState(false);
// //   const [selectedType, setSelectedType] = useState<string>("");
// //   const [successDialog, setSuccessDialog] = useState(false);
// //   const [formData, setFormData] = useState<formvaluesProps>({
// //     type: "",
// //     value: "",
// //     remarks: "",
// //   });

// //   const handleOpen = () => setOpen(true);
// //   const handleClose = () => setOpen(false);
// //   const hanldeClick= ()=> {
// //     // navigte
// //   }

// //   const fetchData = async () => {
// //     try {
// //       const response = await axios.get(`${Config.API_URL}/suspicious`);
// //       if (response?.status === 200) {
// //         setUsers(response.data.data);
// //         console.log("Fetched users Data:", response.data.data);
// //       }
// //     } catch (error) {
// //       console.error("Error fetching users", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const recordsPerPage = 8;
// //   const paginatedData = users.slice(
// //     (page - 1) * recordsPerPage,
// //     page * recordsPerPage
// //   );
// //   const totalPages = Math.ceil(users.length / recordsPerPage);

// //   const handleSubmitBlock = async () => {
// //     try {
// //       const params = new URLSearchParams();
// //       params.append("type", formData.type);
// //       params.append("value", formData.value);
// //       params.append("remarks", formData.remarks);

// //       console.log("Sending formvalues", params.toString());

// //       const response = await axios.post(
// //         `${Config.API_URL}/suspicious`,
// //         params,
// //         {
// //           headers: {
// //             "Content-Type": "application/x-www-form-urlencoded",
// //           },
// //         }
// //       );

// //       if (response.status === 200) {
// //         console.log("formdata", formData);
// //         fetchData();
// //         setOpenSecondDialog(false);
// //         setFormData({ type: "", value: "", remarks: "" });
// //         setSuccessDialog(true);
// //       }
// //     } catch (error: any) {
// //       console.error("Error:", error.response?.data || error.message);
// //       alert("Failed ");
// //     }
// //   };

// //   return (
// //     <Box p={2}>
// //       <Typography variant="h5" mb={2}>
// //         Fraud Prevention Shield
// //       </Typography>

// //       <Stack direction="row" spacing={2} mb={2} flexWrap="wrap">
// //         <TextField placeholder="Type here..." sx={{ minWidth: 200 }} />
// //         <Select displayEmpty defaultValue="" sx={{ minWidth: 180 }}>
// //           <MenuItem value="">Status</MenuItem>
// //           {Object.keys(statusColors).map((status) => (
// //             <MenuItem key={status} value={status}>
// //               {status}
// //             </MenuItem>
// //           ))}
// //         </Select>
// //         <TextField type="date" defaultValue="2022-02-08" />
// //         <TextField type="date" defaultValue="2022-02-08" />
// //         <Button variant="contained">Search</Button>

// //         <Button variant="contained" onClick={handleOpen}>
// //           Add to block List
// //         </Button>

// //         <Button variant="contained" onClick={handleOpen}>
// //           Blocked List
// //         </Button>


// //         {/* Dialog 1 - Select Type */}
// //         <Dialog open={open} onClose={handleClose}>
// //           <DialogTitle>Select Type</DialogTitle>
// //           <DialogContent>
// //             <TableBody>
// //               {[
// //                 "Aadhaar Number",
// //                 "Address",
// //                 "Amount",
// //                 "Amount Range",
// //                 "Biometric identifiers",
// //                 "CA Number",
// //                 "CIN Number",
// //                 "City",
// //                 "Country",
// //                 "Credit Card Number",
// //                 "Date",
// //                 "Debit Card Number",
// //                 "Device Serial Number",
// //                 "District",
// //                 "Domain",
// //                 "Driving License",
// //                 "Email",
// //                 "Entity Name",
// //                 "Geo Location",
// //                 "GST Number",
// //                 "IFSC Code",
// //                 "IMEI Number",
// //               ].map((type) => (
// //                 <MenuItem
// //                   key={type}
// //                   onClick={() => {
// //                     setSelectedType(type);
// //                     setFormData((prev) => ({ ...prev, type }));
// //                     setOpen(false);
// //                     setOpenSecondDialog(true);
// //                   }}
// //                 >
// //                   {type}
// //                 </MenuItem>
// //               ))}
// //             </TableBody>
// //           </DialogContent>
// //         </Dialog>

// //         {/* Dialog 2 - Enter Value and Remarks */}
// //         <Dialog
// //           open={openSecondDialog}
// //           onClose={() => setOpenSecondDialog(false)}
// //         >
// //           <DialogTitle>Enter Value & Remarks for {selectedType}</DialogTitle>
// //           <DialogContent>
// //             <Stack spacing={2} mt={1}>
// //               <TextField
// //                 label="Value"
// //                 fullWidth
// //                 value={formData.value}
// //                 onChange={(e) =>
// //                   setFormData((prev) => ({ ...prev, value: e.target.value }))
// //                 }
// //               />
// //               <TextField
// //                 label="Remarks"
// //                 fullWidth
// //                 value={formData.remarks}
// //                 onChange={(e) =>
// //                   setFormData((prev) => ({ ...prev, remarks: e.target.value }))
// //                 }
// //               />
// //             </Stack>
// //           </DialogContent>
// //           <DialogActions>
// //             <Button onClick={() => setOpenSecondDialog(false)}>Cancel</Button>
// //             <Button variant="contained" onClick={handleSubmitBlock}>
// //               Confirm
// //             </Button>
// //           </DialogActions>
// //         </Dialog>
// //       </Stack>

// //       <Dialog
// //         open={successDialog}
// //         onClose={() => setSuccessDialog(false)}
// //       >
// //         <DialogTitle>Success</DialogTitle>
// //         <DialogContent>
// //           <Typography>
// //             The item has been successfully added to the block list.
// //           </Typography>
// //         </DialogContent>
// //       </Dialog>

// //       <Paper variant="outlined">
// //         <TableContainer>
// //           <Table size="medium">
// //             <TableHead>
// //               <TableRow>
// //                 <TableCell>Date</TableCell>
// //                 <TableCell>Risk Level</TableCell>
// //                 <TableCell>Remarks</TableCell>
// //                 <TableCell>Triggred Values</TableCell>
// //               </TableRow>
// //             </TableHead>
// //             <TableBody>
// //               {paginatedData.map((row: any, idx: number) => {
// //                 const createdAt = new Date(
// //                   row.timestamp?.$date || row.createdAt
// //                 );
// //                 const formattedDate = createdAt.toLocaleDateString();
// //                 const formattedTime = createdAt.toLocaleTimeString();

// //                 return (
// //                   <TableRow key={idx}>
// //                     <TableCell>
// //                       {formattedDate}
// //                       <br />
// //                       {formattedTime}
// //                     </TableCell>
// //                     <TableCell>
// //                       {row.risk_score <= 0.5 ? (
// //                         <Box
// //                           sx={{
// //                             width: "60px",
// //                             height: "30px",
// //                             bgcolor: "#FCFBEA",
// //                             color: "#C8A51A",
// //                             fontWeight: "bold",
// //                             borderColor: "#EDDB57",
// //                             border: 0.25,
// //                             borderRadius: 4,
// //                             alignContent: "center",
// //                             textAlign: "center",
// //                           }}
// //                         >
// //                           Low
// //                         </Box>
// //                       ) : row.risk_score <= 0.8 ? (
// //                         <Box
// //                           sx={{
// //                             width: "70px",
// //                             height: "30px",
// //                             bgcolor: "#FDF3E8",
// //                             color: "#E77F25",
// //                             fontWeight: "bold",
// //                             borderColor: "#FEBC83",
// //                             border: 0.25,
// //                             borderRadius: 4,
// //                             alignContent: "center",
// //                             textAlign: "center",
// //                           }}
// //                         >
// //                           Medium
// //                         </Box>
// //                       ) : (
// //                         <Box
// //                           sx={{
// //                             width: "60px",
// //                             height: "30px",
// //                             bgcolor: "#FEF2F2",
// //                             color: "#EF4444",
// //                             fontWeight: "bold",
// //                             borderColor: "#FCA5A5",
// //                             border: 0.25,
// //                             borderRadius: 4,
// //                             alignContent: "center",
// //                             textAlign: "center",
// //                           }}
// //                         >
// //                           High
// //                         </Box>
// //                       )}
// //                     </TableCell>
// //                     <TableCell style={{ whiteSpace: "pre-line" }}>
// //                       {row.reasons?.[2] || []}
// //                     </TableCell>
// //                     <TableCell style={{ whiteSpace: "pre-line" }}>
// //                       {row.triggers?.length > 0
// //                         ? row.triggers.map((trigger: any, index: number) => (
// //                             <div key={index}>
// //                               <strong>{trigger.type}</strong>: {trigger.blocked}
// //                             </div>
// //                           ))
// //                         : "-"}
// //                     </TableCell>
// //                   </TableRow>
// //                 );
// //               })}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //       </Paper>

// //       <Box mt={2} display="flex" justifyContent="flex-end">
// //         <Pagination
// //           count={totalPages}
// //           page={page}
// //           onChange={(_, val) => setPage(val)}
// //         />
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default FraudPreventionShield;

// import React from 'react'
// import Dashboard from './Dashboard/Dashboard'

// const App = () => {
//   return (
//     <div>
//       <Dashboard></Dashboard>
//     </div>
//   )
// }

// export default App

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AppRoutes from "./Routes/Approutes";

const App = () => {
  return <AppRoutes />;;
};

export default App;

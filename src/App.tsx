// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Chip,
//   IconButton,
//   MenuItem,
//   Pagination,
//   Paper,
//   Select,
//   Stack,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   Typography,
// } from "@mui/material";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import axios from "axios";
// import { red } from "@mui/material/colors";

// const statusColors: Record<string, "success" | "error" | "warning"> = {
//   Low: "success",
//   High: "error",
//   Medium: "warning",
// };

// const FraudPreventionShield = () => {
//   const [page, setPage] = useState(1);
//   const [users, setUsers] = useState<any[]>([]);
//   const [statusFilter, setStatusFilter] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [searchClicked, setSearchClicked] = useState(false); // To trigger filter

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("/api/suspicious");
//       if (response?.status === 200) {
//         setUsers(response.data.data);
//         console.log("Fetched Data:", response.data.data);
//       }
//     } catch (error) {
//       console.error("Error fetching users", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const recordsPerPage = 8;
//   const paginatedData = users.slice(
//     (page - 1) * recordsPerPage,
//     page * recordsPerPage
//   );
//   const totalPages = Math.ceil(users.length / recordsPerPage);

//   return (
//     <Box p={2}>
//       <Typography variant="h5" mb={2}>
//         Fraud Prevention Shield
//       </Typography>

//       <Stack direction="row" spacing={2} mb={2} flexWrap="wrap">
//         {/* <Select displayEmpty defaultValue="" sx={{ minWidth: 150 }}>
//           <MenuItem value="" disabled>
//             Search By
//           </MenuItem>
//           <MenuItem value="email">Email</MenuItem>
//           <MenuItem value="leadId">Lead ID</MenuItem>
//         </Select> */}

//         <TextField placeholder="Type here..." sx={{ minWidth: 200 }} />
//         <Select displayEmpty defaultValue="" sx={{ minWidth: 180 }}>
//           <MenuItem value="">Status</MenuItem>
//           {Object.keys(statusColors).map((status) => (
//             <MenuItem key={status} value={status}>
//               {status}
//             </MenuItem>
//           ))}
//         </Select>
//         <TextField type="date" defaultValue="2022-02-08" />
//         <TextField type="date" defaultValue="2022-02-08" />
//         <Button variant="contained">Search</Button>
//       </Stack>

//       <Paper variant="outlined">
//         <TableContainer>
//           <Table size="medium">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Date</TableCell>
//                 <TableCell>Risk Level</TableCell>
//                 <TableCell>Remarks</TableCell>
//                 <TableCell>Triggred Values</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {paginatedData.map((row: any, idx: number) => {
//                 const createdAt = new Date(
//                   row.createdAt?.$date || row.createdAt
//                 );
//                 const formattedDate = createdAt.toLocaleDateString();
//                 const formattedTime = createdAt.toLocaleTimeString();

//                 return (
//                   <TableRow key={idx}>
//                     <TableCell>
//                       {formattedDate}
//                       <br />
//                       {formattedTime}
//                     </TableCell>

//                     <TableCell>
//                       {row.risk_score <= 0.5 ? (
//                         <Box
//                           sx={{
//                             width: "60px",
//                             height: "30px",
//                             bgcolor: "#FCFBEA",
//                             color: "#C8A51A",
//                             fontWeight: "bold",
//                             borderColor: "#EDDB57",
//                             border: 0.25,
//                             borderRadius: 4,
//                             alignContent: "center",
//                             textAlign: "center",
//                           }}
//                         >
//                           Low
//                         </Box>
//                       ) : row.risk_score <= 0.8 ? (
//                         <Box
//                           sx={{
//                             width: "70px",
//                             height: "30px",
//                             bgcolor: "#FDF3E8",
//                             color: "#E77F25",
//                             fontWeight: "bold",
//                             borderColor: "#FEBC83",
//                             border: 0.25,
//                             borderRadius: 4,
//                             alignContent: "center",
//                             textAlign: "center",
//                           }}
//                         >
//                           Medium
//                         </Box>
//                       ) : (
//                         <Box
//                           sx={{
//                             width: "60px",
//                             height: "30px",
//                             bgcolor: "#FEF2F2",
//                             color: "#EF4444",
//                             fontWeight: "bold",
//                             borderColor: "#FCA5A5",
//                             border: 0.25,
//                             borderRadius: 4,
//                             alignContent: "center",
//                             textAlign: "center",
//                           }}
//                         >
//                           High
//                         </Box>
//                       )}
//                     </TableCell>

//                     <TableCell style={{ whiteSpace: "pre-line" }}>
//                       {(row.rules_flagged?.[2] || []).join("\n") || "-"}
//                     </TableCell>

//                     {/* New column for Triggered Checks */}
//                     <TableCell style={{ whiteSpace: "pre-line" }}>
//                       {row.triggers?.length > 0
//                         ? row.triggers.map((trigger: any, index: number) => (
//                             <div key={index}>
//                               <strong>{trigger.type}</strong>: {trigger.blocked}
//                             </div>
//                           ))
//                         : "-"}
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Paper>

//       <Box mt={2} display="flex" justifyContent="flex-end">
//         <Pagination
//           count={totalPages}
//           page={page}
//           onChange={(_, val) => setPage(val)}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default FraudPreventionShield;
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import PropTypes from 'prop-types';


const statusColors: Record<string, "success" | "error" | "warning"> = {
  Low: "success",
  High: "error",
  Medium: "warning",
};

const FraudPreventionShield = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<any[]>([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

 const fetchData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/suspicious`);
    if (response?.status === 200) {
      setUsers(response.data.data);
      console.log("Fetched Data response:", response.data.data);
    }
  } catch (error) {
    console.error("Error fetching users", error);
  }
};

  useEffect(() => {
    fetchData();
  }, []);

  const recordsPerPage = 8;

  const filterUsers = () => {
    return users.filter((user) => {
      const createdAt = new Date(user.createdAt?.$date || user.createdAt);
      const riskScore = user.risk_score;

      // Determine risk level
      let riskLevel = "";
      if (riskScore <= 0.5) riskLevel = "Low";
      else if (riskScore <= 0.8) riskLevel = "Medium";
      else riskLevel = "High";

      // Date range filter
      const inDateRange =
        (!startDate || createdAt >= new Date(startDate)) &&
        (!endDate || createdAt <= new Date(endDate));

      // Status filter
      const matchesStatus = !statusFilter || riskLevel === statusFilter;

      return inDateRange && matchesStatus;
    });
  };

  const filteredUsers = filterUsers();
  const paginatedData = filteredUsers.slice(
    (page - 1) * recordsPerPage,
    page * recordsPerPage
  );
  const totalPages = Math.ceil(filteredUsers.length / recordsPerPage);

  return (
    <Box p={2}>
      <Typography variant="h5" mb={2}>
        Fraud Prevention Shield
      </Typography>

      <Stack direction="row" spacing={2} mb={2} flexWrap="wrap">
        <TextField placeholder="Type here..." sx={{ minWidth: 200 }} />
        <Select
          displayEmpty
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          sx={{ minWidth: 180 }}
        >
          <MenuItem value="">Status</MenuItem>
          {Object.keys(statusColors).map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
        <TextField
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <TextField
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => {
            setPage(1);
            setSearchClicked(!searchClicked); // trigger rerender
          }}
        >
          Search
        </Button>
      </Stack>

      <Paper variant="outlined">
        <TableContainer>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Risk Level</TableCell>
                <TableCell>Remarks</TableCell>
                <TableCell>Triggred Values</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedData.map((row: any, idx: number) => {
                const createdAt = new Date(
                  row.createdAt?.$date || row.createdAt
                );
                const formattedDate = createdAt.toLocaleDateString();
                const formattedTime = createdAt.toLocaleTimeString();

                return (
                  <TableRow key={idx}>
                    <TableCell>
                      {formattedDate}
                      <br />
                      {formattedTime}
                    </TableCell>

                    <TableCell>
                      {row.risk_score <= 0.5 ? (
                        <Box
                          sx={{
                            width: "60px",
                            height: "30px",
                            bgcolor: "#FCFBEA",
                            color: "#C8A51A",
                            fontWeight: "bold",
                            borderColor: "#EDDB57",
                            border: 0.25,
                            borderRadius: 4,
                            alignContent: "center",
                            textAlign: "center",
                          }}
                        >
                          Low
                        </Box>
                      ) : row.risk_score <= 0.8 ? (
                        <Box
                          sx={{
                            width: "70px",
                            height: "30px",
                            bgcolor: "#FDF3E8",
                            color: "#E77F25",
                            fontWeight: "bold",
                            borderColor: "#FEBC83",
                            border: 0.25,
                            borderRadius: 4,
                            alignContent: "center",
                            textAlign: "center",
                          }}
                        >
                          Medium
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            width: "60px",
                            height: "30px",
                            bgcolor: "#FEF2F2",
                            color: "#EF4444",
                            fontWeight: "bold",
                            borderColor: "#FCA5A5",
                            border: 0.25,
                            borderRadius: 4,
                            alignContent: "center",
                            textAlign: "center",
                          }}
                        >
                          High
                        </Box>
                      )}
                    </TableCell>

                    <TableCell style={{ whiteSpace: "pre-line" }}>
                      {(row.rules_flagged?.[2] || []).join("\n") || "-"}
                    </TableCell>

                    <TableCell style={{ whiteSpace: "pre-line" }}>
                      {row.triggers?.length > 0
                        ? row.triggers.map((trigger: any, index: number) => (
                            <div key={index}>
                              <strong>{trigger.type}</strong>:{" "}
                              {trigger.blocked}
                            </div>
                          ))
                        : "-"}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Box mt={2} display="flex" justifyContent="flex-end">
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, val) => setPage(val)}
        />
      </Box>
    </Box>
  );
};

export default FraudPreventionShield;

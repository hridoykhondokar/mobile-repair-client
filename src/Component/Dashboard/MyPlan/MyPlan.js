import React, { useEffect, useContext, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserContext } from '../../../App';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';




const MyPlan = () => {
  const [loggedInUser] = useContext(UserContext)
  const [plansDetails, setPlansDetails] = useState([]);


  useEffect(() => {
    fetch(`https://mighty-island-77789.herokuapp.com/plansDetails/${loggedInUser.email}`)
      .then(res => res.json())
      .then(data => setPlansDetails(data))
  }, [loggedInUser.email]);


  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-3">
          <SideBar></SideBar>
        </div>
        {plansDetails.length ?
          <div className="col-md-9">
            <h1>Your Plans</h1>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontWeight: "bold" }} align="center">Name</TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="center">Ordered Plan</TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="center">Price</TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="center">Status</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {plansDetails.length &&
                    plansDetails.map((pd) => (
                      <TableRow
                        key={pd._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell align="center">{pd.name}</TableCell>
                        <TableCell align="center">{pd.plan}</TableCell>
                        <TableCell align="center">$ {pd.price}</TableCell>
                        <TableCell style={{ color: 'red', textTransform: 'capitalize' }} align="center">{pd.status}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          :
            <CircularProgress />
  

        }
      </div>
    </div>
  );
};

export default MyPlan;
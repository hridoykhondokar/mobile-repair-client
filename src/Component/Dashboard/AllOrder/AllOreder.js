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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'




const AllOrder = () => {
  const [loggedInUser] = useContext(UserContext)
  const [plansDetails, setPlansDetails] = useState([]);


  useEffect(() => {
    fetch(`https://mighty-island-77789.herokuapp.com/plansDetails`)
      .then(res => res.json())
      .then(data => setPlansDetails(data))
  }, [plansDetails]);


  const handleDoneStatus = (id) => {
    const updateData = {
        status: 'done'
    }
    fetch(`https://mighty-island-77789.herokuapp.com/updateStatus/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateData)
    })
        .then(res => res.json())
        .then(data => {
            console.log('updated done');
        })
}
const handleOngoingStatus = (id) => {
    const updateData = {
        status: 'ongoing'
    }
    fetch(`https://mighty-island-77789.herokuapp.com/updateStatus/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateData)
    })
        .then(res => res.json())
        .then(data => {
            console.log('updated ongoing')
        })
}


  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-3">
          <SideBar></SideBar>
        </div>
        <div className="col-md-9">
          <h1>Manage All Plans</h1>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }} align="center">Name</TableCell>
                  <TableCell style={{ fontWeight: "bold" }} align="center">Ordered Plan</TableCell>
                  <TableCell style={{ fontWeight: "bold" }} align="center">Price</TableCell>
                  <TableCell style={{ fontWeight: "bold" }} align="center">Status</TableCell>
                  <TableCell style={{ fontWeight: "bold" }} align="center">Work</TableCell>

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
                      {
                        pd?.status === "ongoing" &&
                        <TableCell>
                          <button className="btn btn-success w-100" onClick={() => handleDoneStatus(pd._id)} >Done</button>
                        </TableCell>
                      }
                      {
                        pd?.status === "pending" &&
                        <TableCell>
                          <button className="btn btn-info w-100" onClick={() => handleOngoingStatus(pd._id)} >Ongoing</button>
                        </TableCell>
                      }
                      {
                        pd?.status === "done" &&
                        <TableCell>
                          <button className="btn btn-secondary w-100"><FontAwesomeIcon icon={faPhone} /></button>
                        </TableCell>
                      }

                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default props => {
  console.log(props)
    return(
        <>
            <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Author</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">@</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          <TableRow>
            <TableCell rowSpan={3}>{props.data.author}</TableCell>
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
        </>
    )
}
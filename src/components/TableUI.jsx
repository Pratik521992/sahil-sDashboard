import React from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardContent from './CardContent';


export default props => {
console.log(props.data.payload.VEHICLE.AMBIENT_AIR_TEMP.cmdResult)
  return (
    <>
      <Paper >
        <Typography variant="h5" component="h3">
          Sample Dashboard.
        </Typography>
        
        <Grid container spacing={12}>
          <Grid item xs={3}>
            <CardContent data1={props.data.author} data2={props.data.type} />
          </Grid>
          <Grid item xs={3}>
            <CardContent data1={props.data.payload.ACCELERATION.unit} data2={props.data.payload.ACCELERATION.value} />
          </Grid>
          <Grid item xs={3}>
            <CardContent data1={props.data.payload.VEHICLE.AMBIENT_AIR_TEMP.cmdResult} data2={props.data.payload.VEHICLE.AMBIENT_AIR_TEMP.cmdName} />
          </Grid>
          <Grid item xs={3}>
            <CardContent data1={props.data.payload.VEHICLE.ENGINE_COOLANT_TEMP.cmdResult} data2={props.data.payload.VEHICLE.ENGINE_COOLANT_TEMP.cmdName} />
          </Grid>
          <Grid item xs={3}>
            <CardContent data1={props.data.payload.VEHICLE.SPEED.cmdResult} data2={props.data.payload.VEHICLE.SPEED.cmdName} />
          </Grid>
          <Grid item xs={3}>
            <CardContent data1={props.data.payload.VEHICLE.CONTROL_MODULE_VOLTAGE.cmdResult} data2={props.data.payload.VEHICLE.CONTROL_MODULE_VOLTAGE.cmdName} />
          </Grid>
          <Grid item xs={3}>
            <CardContent data1={props.data.payload.VEHICLE.ENGINE_LOAD.cmdResult} data2={props.data.payload.VEHICLE.ENGINE_LOAD.cmdName} />
          </Grid>
          <Grid item xs={3}>
            <CardContent data1={props.data.payload.VEHICLE.ENGINE_RPM.cmdResult} data2={props.data.payload.VEHICLE.ENGINE_RPM.cmdName} />
          </Grid>
          <Grid item xs={3}>
            <CardContent data1={props.data.payload.VEHICLE.THROTTLE_POS.cmdResult} data2={props.data.payload.VEHICLE.THROTTLE_POS.cmdName} />
          </Grid>
          <Grid item xs={3}>
            <CardContent data1={props.data.payload.VEHICLE.FUEL_LEVEL.cmdResult} data2={props.data.payload.VEHICLE.FUEL_LEVEL.cmdName} />
          </Grid>
          <Grid item xs={3}>
            <CardContent data1={props.data.payload.VEHICLE.ENGINE_OIL_TEMP.cmdResult} data2={props.data.payload.VEHICLE.ENGINE_OIL_TEMP.cmdName} />
          </Grid>
          <Grid item xs={3}>
            <CardContent data1={props.data.payload.VEHICLE.FUEL_PRESSURE.cmdResult} data2={props.data.payload.VEHICLE.FUEL_PRESSURE.cmdName} />
          </Grid>
          
        </Grid>
      </Paper>
    </>
  )
}
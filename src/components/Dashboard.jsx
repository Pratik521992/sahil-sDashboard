import React,{ Component } from 'react';
import TableUI from './TableUI';

class Dashboard extends Component {
    state = {
        "author": "TataiOBD",
        "type": "LOCATION",
        "payload": {
            "ACCELERATION": {
                "unit": "G",
                "value": 0.005
            },
            "VEHICLE": {
                "AMBIENT_AIR_TEMP": {
                    "cmdResult": "54C",
                    "cmdName": "Ambient Air Temperature",
                    "cmdID": "AMBIENT_AIR_TEMP"
                },
                "ENGINE_COOLANT_TEMP": {
                    "cmdResult": null,
                    "cmdName": "Engine Coolant Temperature",
                    "cmdID": "ENGINE_COOLANT_TEMP"
                },
                "SPEED": {
                    "cmdResult": "",
                    "cmdName": "Vehicle Speed",
                    "cmdID": "SPEED"
                },
                "CONTROL_MODULE_VOLTAGE": {
                    "cmdResult": "",
                    "cmdName": "Control Module Power Supply ",
                    "cmdID": "CONTROL_MODULE_VOLTAGE"
                },
                "ENGINE_LOAD": {
                    "cmdResult": "",
                    "cmdName": "Engine Load",
                    "cmdID": "ENGINE_LOAD"
                },
                "ENGINE_RPM": {
                    "cmdResult": "",
                    "cmdName": "Engine RPM",
                    "cmdID": "ENGINE_RPM"
                },
                "ENGINE_RUNTIME": {
                    "cmdResult": "",
                    "cmdName": "Engine Runtime",
                    "cmdID": "ENGINE_RUNTIME"
                },
                "THROTTLE_POS": {
                    "cmdResult": "",
                    "cmdName": "Throttle Position",
                    "cmdID": "THROTTLE_POS"
                },
                "FUEL_TYPE": {
                    "cmdResult": "",
                    "cmdName": "Fuel Type",
                    "cmdID": "FUEL_TYPE"
                },
                "FUEL_CONSUMPTION_RATE": {
                    "cmdResult": "",
                    "cmdName": "Fuel Consumption Rate",
                    "cmdID": "FUEL_CONSUMPTION_RATE"
                },
                "FUEL_LEVEL": {
                    "cmdResult": "",
                    "cmdName": "Fuel Level",
                    "cmdID": "FUEL_LEVEL"
                },
                "ENGINE_OIL_TEMP": {
                    "cmdResult": "",
                    "cmdName": "Engine oil temperature",
                    "cmdID": "ENGINE_OIL_TEMP"
                },
                "FUEL_PRESSURE": {
                    "cmdResult": "",
                    "cmdName": "Fuel Pressure",
                    "cmdID": "FUEL_PRESSURE"
                }
            },
            "TS": 1553348422606
        }
    }
    render(){
        return(
            <>
                <h2>Dashboard!!</h2>
                < TableUI data={this.state}/>
            </>
        )
    }
}

export default Dashboard;
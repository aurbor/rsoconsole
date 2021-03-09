import React from 'react'
import { List, Datagrid, TextField, NumberField, ChipField, EditButton, DeleteButton } from 'react-admin'
import Avatar from '@material-ui/core/Avatar';
import seahawks from '../img/teams/seahawks.png'

export const playerList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField label="Player Name" source="name" />
                <TextField label= "Position" source="position" />
                <ChipField label="NFL Team" avatar={<Avatar src={seahawks} />} source="nflTeam" />
                <NumberField label="Salary" source="salary" options={{style: "currency", currency: "USD"}} />
                <TextField label="UFA Year" source="ufaYear" />
                <EditButton basePath="/players" />
                <DeleteButton basePath="/players" />
            </Datagrid>
        </List>
    )
}

export default playerList

import React from 'react'
import { List, Datagrid, TextField, NumberField, ChipField, EditButton, DeleteButton } from 'react-admin'

export const playerList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="name" />
                <ChipField source="position" />
                <TextField source="nflTeam" />
                <NumberField source="salary" options={{style: "currency", currency: "USD"}} />
                <TextField source="ufaYear" />
                <EditButton basePath="/players" />
                <DeleteButton basePath="/players" />
            </Datagrid>
        </List>
    )
}

export default playerList

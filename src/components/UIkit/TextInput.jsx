import React from "react";
import TextField from "@material-ui/core";
import { PinDropSharp } from "@material-ui/icons";

const TextInput = (props) => {
    return (
        <TextField
            fullWidth={props.fullWidth}
            label={props.label}
            margin="dence"
            multiline={props.multiline}
            required={props.required}
            rows={props.rows}
            value={props.value}
            type={props.type}
            onChange={props.onChange}
        />
    )
}

export default TextInput;
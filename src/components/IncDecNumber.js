import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { incNumber, decNumber } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const IncDecNumber = () => {


    const changeNumber = useSelector(state => state.changeTheNumber)

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button onClick={() => dispatch(incNumber(1))}>+</Button>
                    <Button disabled>{changeNumber}</Button>
                    <Button onClick={() => dispatch(decNumber())}>-</Button>
                </ButtonGroup>
            </Box>
        </React.Fragment>
    )
}

export default IncDecNumber;
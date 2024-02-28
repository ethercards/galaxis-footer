import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';

type Props = {
  value?: number;
};
const MyCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);

  const onMinus = () => {
    setCounter((prev) => prev - 1);
  };

  const onPlus = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <Box>
      <h1>Counter: {counter}</h1>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" onClick={onMinus}>
            -
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={onPlus}>
            +
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyCounter;

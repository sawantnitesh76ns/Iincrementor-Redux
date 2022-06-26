import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IncDecNumber from './components/IncDecNumber';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#d8d8d8', height: '100vh', display: "flex", justifyContent: "center", alignItems: "center" }} >
          <IncDecNumber />
        </Box>
      </Container>
    </React.Fragment>

  );
}

export default App;

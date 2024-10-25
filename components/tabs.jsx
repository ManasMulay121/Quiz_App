import * as React from 'react';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Centeredtabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ flexGrow: 1 }}>
      <Tabs 
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        centered
        sx={{ height: '48px' }}
      >
        <Tab label="Questions" value="one" sx={{ fontSize: 16, color: '#5f6368', height: '48px', fontWeight: '600', fontFamily: 'Google Sans', textTransform: 'lowercase' }} />
        <Tab label="Responses" value="two" sx={{ fontSize: 16, color: '#5f6368', height: '48px', fontWeight: '600', fontFamily: 'Google Sans', textTransform: 'lowercase' }} />
      </Tabs>
    </Paper>
  );
}

export default Centeredtabs;

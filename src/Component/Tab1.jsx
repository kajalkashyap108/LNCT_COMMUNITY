import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tabtext from './Tabtext';
const data = [
  { date: "Today", year: "2023", heading: "Event One", description: "Description for event one." },
  { date: "02", year: "2023", heading: "Event Two", description: "Description for event two." },
  { date: "03", year: "2023", heading: "Event Three", description: "Description for event three." },
];
export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" />
            <Tab label="News" value="2" />
            <Tab label="Activities" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"> 
         {data.map((item,index)=>(
          <Tabtext
              key={index}
              date={item.date}
              year={item.year}
              heading={item.heading}
              description={item.description} />

        ))}


        </TabPanel>
        
        <TabPanel value="2">News</TabPanel>
        <TabPanel value="3">Activities</TabPanel>
      </TabContext>

    </Box>
  );
}

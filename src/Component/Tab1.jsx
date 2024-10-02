import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tabtext from './Tabtext';
const data = [
  { date: "Today", year: "2023", heading: "The Era of Zero is Comming!", description: "hmm honge kaamyaab" },
  { date: "june", year: "2020", heading: "Trading Ethereum Derivatives", description: "pura hai viswaas." },
  { date: "june 01", year: "2020", heading: "How do i Add margin to a Position", description: "honge kaabtaab ek din" },
  { date: "May 29", year: "2020", heading: "What are Conditional orders?", description: "honge kaabtaab ek din" },
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

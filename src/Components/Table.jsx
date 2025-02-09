import React, { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // For creating and applying the theme
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'; // For the table component

import './Table.css';

const data = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska',
  },
];

const Table = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName', // Access nested data with dot notation
        header: 'First Name',
        size: 150,
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
        size: 150,
      },
      {
        accessorKey: 'address', // Normal accessorKey
        header: 'Address',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
      },
    ],
    []
  );

  // Create a custom dark theme for the table
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
           mode: "dark"// Force dark mode regardless of global theme
        },
        
      }),
    []
  );
   




  return (
    
      <div className="containerTable">
        <ThemeProvider theme={theme}>
        <MaterialReactTable columns={columns} data={data} />
        </ThemeProvider></div>
     
    
  );
};

export default Table;
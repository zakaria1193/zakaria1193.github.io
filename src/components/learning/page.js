
import { useState } from 'react';
import { Box, Grid, Chip, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Common components
import Topbar from '../Topbar';

const theme = createTheme();

const SectionTitle = ({ title }) => {
  return (
    <Box mt={2} mb={1}>
      <Typography variant="h4">{title}</Typography>
    </Box>
  )
}

const TagChip = ({ label, selected, onClick }) => {
  return (
    <Chip
      label={label}
      variant={selected ? 'filled' : 'outlined'}
      onClick={onClick}
      sx={{ mr: 1, mb: 1 }}
    />
  )
}


const Content = ({ items, activeLabel }) => {
  return (
    <Box>
      {items.map(item => {
        if (!activeLabel || item.labels.includes(activeLabel)) {
          return (
            <Box display="flex" alignItems="center" p={2} boxShadow={2} key={item.id}>
              <Box flex={1}>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body1">{item.description}</Typography>
              </Box>
              <Box>
                {item.labels.map(label => (
                  <TagChip
                    key={label}
                    label={label}
                    selected={label === activeLabel}
                    onClick={() => activeLabel !== label && setActiveLabel(label)}
                  />
                ))}
              </Box>
            </Box>
          )
        } else {
          return null;
        }
      })}
    </Box>
  )
}

function Page() {
  const [activeLabel, setActiveLabel] = useState(null);

  const items = [
    {
      id: 1,
      title: 'Git',
      description: 'Git is a distributed version control system for tracking changes in source code during software development.',
      labels: ['compilation', 'peripherals']
    },
    {
      id: 2,
      title: 'GCC',
      description: 'The GNU Compiler Collection is a collection of compilers and libraries for C, C++, Objective-C, Fortran, Ada, and other programming languages.',
      labels: ['compilation']
    },
    {
      id: 3,
      title: 'GDB',
      description: 'GDB is a debugger for the C, C++, and Fortran programming languages. It allows you to see what is going on inside another program while it executes.',
      labels: ['compilation', 'debugging']
    },
    {
      id: 4,
      title: 'Make',
      description: 'Make is a build automation tool that automatically builds executable programs and libraries from source code by reading files called Makefiles.',
      labels: ['compilation', 'automation']
    }
  ];

  return (
    <Box>
      <Topbar />
      <Box mt={2} p={2}>
        <SectionTitle title="Compilation Peripherals" />
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {['compilation', 'peripherals', 'debugging', 'automation'].map(label => (
            <TagChip
              key={label}
              label={label}
              selected={label === activeLabel}
              onClick={() => setActiveLabel(label)}
            />
          ))}
        </Box>
        <Content items={items} activeLabel={activeLabel} />
      </Box>
    </Box>
    )
}

export default Page

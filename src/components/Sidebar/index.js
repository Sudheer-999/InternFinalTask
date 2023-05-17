import {Box, Paper} from '@mui/material'
import {makeStyles} from '@mui/styles'

import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import ListItemIcon from '@mui/material/ListItemIcon'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import GridViewIcon from '@mui/icons-material/GridView'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import LogoutIcon from '@mui/icons-material/Logout'

const drawerWidth = 265

const Sidebar = () => {
  const useStyles = makeStyles(() => ({
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      backgroundColor: '#27187c',
      borderRadius: '0px',
      color: 'yellow',
    },
  }))

  const classes = useStyles()

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '265px'}}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRadius: '0px',
          },
        }}
        variant="permanent"
        anchor="left"
        classes={{paper: classes.drawerPaper}}
      >
        <Paper
          sx={{backgroundColor: '#27187c', color: 'white', borderRadius: '0px'}}
          className={classes.drawerPaper}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    color: 'white',
                    alignItems: 'center',
                    marginBottom: '-5px',
                    marginTop: '10px',
                  }}
                >
                  <GridViewIcon sx={{marginRight: '30px'}} />
                  <ListItemText>Dashboard</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            {[
              'Manage Subscription',
              'Young Brain',
              'Mid Career',
              'Vendor',
              'Consultant',
            ].map(text => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <BusinessCenterIcon sx={{color: 'white'}} />
                  </ListItemIcon>
                  <ListItemText sx={{fontFamily: 'revert'}} primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  color: 'white',
                  alignItems: 'center',
                  marginTop: '-10px',
                }}
              >
                <GridViewIcon sx={{marginRight: '30px'}} />
                <ListItemText sx={{fontFamily: 'revert'}}>Reports</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  color: 'white',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <LogoutIcon sx={{marginRight: '30px'}} />
                <ListItemText>Sign Out</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </Paper>
      </Drawer>
    </Box>
  )
}
export default Sidebar

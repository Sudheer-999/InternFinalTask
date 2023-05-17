import {Link} from 'react-router-dom'
import {BiEditAlt} from 'react-icons/bi'
import {IconButton, Box} from '@mui/material'
import HolidayTable from '../HolidayTable'
import OthersTable from '../OthersTable'
import ModalItem from '../ModalItem'

const Home = () => (
  <Box sx={{marginLeft: '265px'}}>
    <Box
      component="main"
      sx={{flexGrow: 1, backgroundColor: 'background.default', p: 3}}
    >
      <Box
        sx={{
          backgroundColor: '#D7D0FF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '10px',
          borderRadius: '5px',
        }}
        size="small"
      >
        <div style={{fontFamily: 'revert', color: '#27187c'}}>
          <span style={{fontSize: '20px'}}>|</span> Corporate Information
        </div>

        <Link to="/register">
          <IconButton>
            <BiEditAlt style={{fontSize: '17px', color: 'black'}} />
          </IconButton>
        </Link>
      </Box>
    </Box>
    <Box sx={{padding: '22px', display: 'flex', alignItems: 'center'}}>
      <Box
        sx={{
          backgroundColor: '#D7D0FF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '10px',
          borderRadius: '5px',
          width: '50%',
          marginTop: '-291px',
          marginRight: '10px',
        }}
      >
        <div style={{fontFamily: 'revert', color: '#27187c'}}>
          <span style={{fontSize: '22px', fontWeight: '600'}}>|</span>{' '}
          Allowances
        </div>

        <ModalItem />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          paddingTop: '30px',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#D7D0FF',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '10px',
            borderRadius: '5px',
            width: '100%',
          }}
        >
          <div style={{fontFamily: 'revert', color: '#27187c'}}>
            <span style={{fontSize: '20px', fontWeight: '600'}}>|</span> Others
          </div>

          <IconButton>
            <BiEditAlt style={{fontSize: '17px', color: 'black'}} />
          </IconButton>
        </Box>
        <OthersTable />
        <Box
          sx={{
            backgroundColor: '#D7D0FF',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '10px',
            borderRadius: '5px',
            width: '100%',
          }}
        >
          <div style={{fontFamily: 'revert', color: '#27187c'}}>
            <span style={{fontSize: '20px', fontWeight: '600'}}>|</span>{' '}
            Holidays
          </div>

          <IconButton>
            <BiEditAlt style={{fontSize: '17px', color: 'black'}} />
          </IconButton>
        </Box>
        <HolidayTable />
      </Box>
    </Box>
  </Box>
)

export default Home

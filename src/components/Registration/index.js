import {useState} from 'react'
import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import {BsAsterisk} from 'react-icons/bs'

import {DemoContainer} from '@mui/x-date-pickers/internals/demo'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {DatePicker} from '@mui/x-date-pickers/DatePicker'

const Registration = () => {
  const [foriegnOwned, setForeignOwned] = useState('')

  const [value, setValue] = useState(null)

  const handleChange = event => {
    setForeignOwned(event.target.value)
  }

  return (
    <Box
      sx={{
        marginLeft: '265px',
        width: '92vw',
      }}
    >
      <Box
        sx={{
          marginBottom: '10px',
          flexDirection: 'row',
          flexWrap: 'wrap',
          display: 'flex',
        }}
      >
        <Box
          sx={{
            padding: '20px',
            width: '45%',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Business Description{' '}
            <BsAsterisk
              style={{fontSize: '10px', marginLeft: '5px', color: 'red'}}
            />
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            multiline
            rows={3}
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '45%',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Corporate Philosophy{' '}
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            multiline
            rows={3}
          />
        </Box>
      </Box>
      <Box sx={{flexDirection: 'row', flexWrap: 'wrap', display: 'flex'}}>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Company Name{' '}
            <BsAsterisk
              style={{fontSize: '10px', marginLeft: '5px', color: 'red'}}
            />
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Industry
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Mail ID{' '}
            <BsAsterisk
              style={{fontSize: '10px', marginLeft: '5px', color: 'red'}}
            />
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Phone Number{' '}
            <BsAsterisk
              style={{fontSize: '10px', marginLeft: '5px', color: 'red'}}
            />
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Location{' '}
            <BsAsterisk
              style={{fontSize: '10px', marginLeft: '5px', color: 'red'}}
            />
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Website
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Working Hours{' '}
            <BsAsterisk
              style={{fontSize: '10px', marginLeft: '5px', color: 'red'}}
            />
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Establishment Date{' '}
            <BsAsterisk
              style={{fontSize: '10px', marginLeft: '5px', color: 'red'}}
            />
          </InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={['DatePicker']}
              sx={{marginTop: '-10px'}}
              size="small"
            >
              <DatePicker
                value={value}
                format="DD-MM-YYYY"
                onChange={newValue => setValue(newValue)}
                sx={{
                  width: '400px',
                }}
                size="small"
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Initial Capital{' '}
            <BsAsterisk
              style={{fontSize: '10px', marginLeft: '5px', color: 'red'}}
            />
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Representative{' '}
            <BsAsterisk
              style={{fontSize: '10px', marginLeft: '5px', color: 'red'}}
            />
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Branch{' '}
            <BsAsterisk
              style={{fontSize: '10px', marginLeft: '5px', color: 'red'}}
            />
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Number Of Employees{' '}
            <BsAsterisk
              style={{fontSize: '10px', marginLeft: '5px', color: 'red'}}
            />
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Sales Revenue{' '}
            <BsAsterisk
              style={{fontSize: '10px', marginLeft: '5px', color: 'red'}}
            />
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Operation Profit{' '}
            <BsAsterisk
              style={{fontSize: '10px', marginLeft: '5px', color: 'red'}}
            />
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Average Age Of Employees
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Stock
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Linkedin Link
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Twitter Link
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Facebook Link
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Instagram Link
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
        <Box
          sx={{
            padding: '20px',
            width: '30%',
            marginTop: '-25px',
          }}
        >
          <InputLabel
            htmlFor="bs"
            sx={{
              fontSize: '13px',
              marginBottom: '3px',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Youtube Link
          </InputLabel>
          <TextField
            id="bs"
            variant="outlined"
            style={{width: '100%'}}
            size="small"
          />
        </Box>
      </Box>
      <FormControl sx={{padding: '20px', marginTop: '-15px'}}>
        <FormLabel
          sx={{fontSize: '14px'}}
          id="demo-controlled-radio-buttons-group"
        >
          Foreign Owned
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={foriegnOwned}
          onChange={handleChange}
          sx={{display: 'flex', flexDirection: 'row'}}
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <Box sx={{marginLeft: '550px', marginBottom: '30px', marginTop: '-10px'}}>
        <Button
          variant="contained"
          sx={{backgroundColor: '#27187C', width: '198px', height: '45px'}}
        >
          SAVE
        </Button>
      </Box>
    </Box>
  )
}
export default Registration

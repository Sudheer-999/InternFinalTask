import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import {styled} from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import {BiEditAlt} from 'react-icons/bi'
import {BsAsterisk} from 'react-icons/bs'
import {Box, RadioGroup, FormControlLabel, Radio} from '@mui/material'

const BootstrapDialog = styled(Dialog)(({theme}) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

function BootstrapDialogTitle(props) {
  const {children, onClose} = props

  return (
    <DialogTitle sx={{m: 0, p: 2}}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 2,
            top: 4,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}

BootstrapDialogTitle.defaultProps = {
  children: null,
}

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false)
  const [results, setResults] = React.useState([])

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const [salarySystem, setSalarySystem] = React.useState('')
  const [moreHolidays, setMoreHolidays] = React.useState('')
  const [generous, setGenerous] = React.useState('')
  const [enhanced, setEnhanced] = React.useState('')
  const [support, setSupport] = React.useState('')
  const [reduced, setReduced] = React.useState('')
  const [careLeave, setCareLeave] = React.useState('')
  const [rent, setRent] = React.useState('')
  const [family, setFamily] = React.useState('')
  const [stock, setStock] = React.useState('')
  const [sideJob, setSideJob] = React.useState('')
  const [mentor, setMentor] = React.useState('')
  const [career, setCareer] = React.useState('')

  const handleChange = event => {
    const opinion = event.target.value
    const result = {name: 'Salary System Based On Meritocracy', option: opinion}
    setResults(prev => [...prev, result])
    setSalarySystem(event.target.value)
  }

  const handleMoreChange = event => {
    const opinion = event.target.value
    const result = {name: '120 Or More Annual Holidays', option: opinion}
    setResults(prev => [...prev, result])
    setMoreHolidays(event.target.value)
  }

  const handleGenerousChange = event => {
    const opinion = event.target.value
    const result = {name: 'Generous Welfare Benifits', option: opinion}
    setResults(prev => [...prev, result])
    setGenerous(event.target.value)
  }

  const handleEnhancedChange = event => {
    const opinion = event.target.value
    const result = {name: 'Enhanced Education And Training', option: opinion}
    setResults(prev => [...prev, result])
    setEnhanced(event.target.value)
  }

  const handleSupportChange = event => {
    const opinion = event.target.value
    const result = {
      name: 'Support System For Acquriring Qualification',
      option: opinion,
    }
    setResults(prev => [...prev, result])
    setSupport(event.target.value)
  }

  const handleReducedChange = event => {
    const opinion = event.target.value
    const result = {name: 'Reduced Working Hours System', option: opinion}
    setResults(prev => [...prev, result])
    setReduced(event.target.value)
  }

  const handleCareChange = event => {
    const opinion = event.target.value
    const result = {name: 'Maternity Care Leave System', option: opinion}
    setResults(prev => [...prev, result])
    setCareLeave(event.target.value)
  }

  const handleRentChange = event => {
    const opinion = event.target.value
    const result = {name: 'Company Housing / Rent Subsidy', option: opinion}
    setResults(prev => [...prev, result])
    setRent(event.target.value)
  }

  const handleFamilyChange = event => {
    const opinion = event.target.value
    const result = {name: 'Family Allowance', option: opinion}
    setResults(prev => [...prev, result])
    setFamily(event.target.value)
  }

  const handleStockChange = event => {
    const opinion = event.target.value
    const result = {name: 'Employee Stock Ownership', option: opinion}
    setResults(prev => [...prev, result])
    setStock(event.target.value)
  }

  const handleSideJobChange = event => {
    const opinion = event.target.value
    const result = {name: 'Side Job Available', option: opinion}
    setResults(prev => [...prev, result])
    setSideJob(event.target.value)
  }

  const handleMentorChange = event => {
    const opinion = event.target.value
    const result = {name: 'Mentor System', option: opinion}
    setResults(prev => [...prev, result])
    setMentor(event.target.value)
  }

  const handleCareerChange = event => {
    const opinion = event.target.value
    const result = {name: 'Career Consulting', option: opinion}
    setResults(prev => [...prev, result])
    setCareer(event.target.value)
  }

  console.log(results)

  return (
    <div>
      <Button variant="normal" onClick={handleClickOpen}>
        <BiEditAlt style={{fontSize: '17px', color: 'black'}} />
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Allowances
        </BootstrapDialogTitle>
        <DialogContent sx={{}}>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <BsAsterisk
              style={{
                color: 'red',
                fontSize: '10px',
                marginRight: '30px',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '500px',
              }}
            >
              <Typography sx={{fontFamily: 'revert'}}>
                Salary System Based On Meritocracy
              </Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={salarySystem}
                onChange={handleChange}
                sx={{display: 'flex', flexDirection: 'row'}}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Box>
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <BsAsterisk
              style={{color: 'red', fontSize: '10px', marginRight: '30px'}}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '500px',
              }}
            >
              <Typography>120 Or More Annual Holidays</Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={moreHolidays}
                onChange={handleMoreChange}
                sx={{display: 'flex', flexDirection: 'row'}}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',

              alignItems: 'center',
            }}
          >
            <BsAsterisk
              style={{color: 'red', fontSize: '10px', marginRight: '30px'}}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '500px',
              }}
            >
              <Typography>Generous Welfare Benifits</Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={generous}
                onChange={handleGenerousChange}
                sx={{display: 'flex', flexDirection: 'row'}}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',

              alignItems: 'center',
            }}
          >
            <BsAsterisk
              style={{color: 'red', fontSize: '10px', marginRight: '30px'}}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '500px',
              }}
            >
              <Typography>Enhanced Education And Training</Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={enhanced}
                onChange={handleEnhancedChange}
                sx={{display: 'flex', flexDirection: 'row'}}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',

              alignItems: 'center',
            }}
          >
            <BsAsterisk
              style={{color: 'red', fontSize: '10px', marginRight: '30px'}}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '500px',
              }}
            >
              <Typography>
                Support System For Acquriring Qualification
              </Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={support}
                onChange={handleSupportChange}
                sx={{display: 'flex', flexDirection: 'row'}}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',

              alignItems: 'center',
            }}
          >
            <BsAsterisk
              style={{color: 'red', fontSize: '10px', marginRight: '30px'}}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '500px',
              }}
            >
              <Typography>Reduced Working Hours System</Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={reduced}
                onChange={handleReducedChange}
                sx={{display: 'flex', flexDirection: 'row'}}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',

              alignItems: 'center',
            }}
          >
            <BsAsterisk
              style={{color: 'red', fontSize: '10px', marginRight: '30px'}}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '500px',
              }}
            >
              <Typography>Maternity Care Leave System</Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={careLeave}
                onChange={handleCareChange}
                sx={{display: 'flex', flexDirection: 'row'}}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',

              alignItems: 'center',
            }}
          >
            <BsAsterisk
              style={{color: 'red', fontSize: '10px', marginRight: '30px'}}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '500px',
              }}
            >
              <Typography>Company Housing/Rent Subsidy</Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={rent}
                onChange={handleRentChange}
                sx={{display: 'flex', flexDirection: 'row'}}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',

              alignItems: 'center',
            }}
          >
            <BsAsterisk
              style={{color: 'red', fontSize: '10px', marginRight: '30px'}}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '500px',
              }}
            >
              <Typography>Family Allowance</Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={family}
                onChange={handleFamilyChange}
                sx={{display: 'flex', flexDirection: 'row'}}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',

              alignItems: 'center',
            }}
          >
            <BsAsterisk
              style={{color: 'red', fontSize: '10px', marginRight: '30px'}}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '500px',
              }}
            >
              <Typography>Employee Stock Ownership</Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={stock}
                onChange={handleStockChange}
                sx={{display: 'flex', flexDirection: 'row'}}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',

              alignItems: 'center',
            }}
          >
            <BsAsterisk
              style={{color: 'red', fontSize: '10px', marginRight: '30px'}}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '500px',
              }}
            >
              <Typography>Side Job Available</Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={sideJob}
                onChange={handleSideJobChange}
                sx={{display: 'flex', flexDirection: 'row'}}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography sx={{marginLeft: '40px'}}>Mentor System</Typography>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={mentor}
              onChange={handleMentorChange}
              sx={{display: 'flex', flexDirection: 'row'}}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography sx={{marginLeft: '40px'}}>Career Consulting</Typography>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={career}
              onChange={handleCareerChange}
              sx={{display: 'flex', flexDirection: 'row'}}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </Box>
        </DialogContent>
        <DialogActions sx={{display: 'flex', justifyContent: 'center'}}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#27187C',
              width: '140px',
              height: '45px',
              marginBottom: '14px',
            }}
            autoFocus
            onClick={handleClose}
          >
            SAVE
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}

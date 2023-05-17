import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(name, info) {
  return {name, info}
}

const rows = [
  createData('Retention Rate Of New Graduate Hires', 'Over 50%'),
  createData('Work Style (Overseas Bases)', 'Yes'),
  createData('Working Environment', 'Not Working'),
]

const OthersTable = () => (
  <TableContainer
    component={Paper}
    sx={{
      marginBottom: '20px',
      boxShadow: 'none',
      borderBottom: '1px solid #e6e4e1',
      borderRadius: '0px',
    }}
  >
    <Table size="small" aria-label="a dense table">
      <TableBody>
        {rows.map(row => (
          <TableRow
            key={row.name}
            sx={{
              '&:last-child td, &:last-child th': {border: 0},
              borderRadius: '0px',
              boxShadow: '0',
            }}
          >
            <TableCell
              sx={{
                backgroundColor: '#F7F7F7',
                fontFamily: 'revert',
                padding: '10px 20px',
                fontWeight: '500',
                borderRadius: '0px',
                boxShadow: 'none',
              }}
              component="th"
              scope="row"
            >
              {row.name}
            </TableCell>
            <TableCell
              sx={{
                fontFamily: 'revert',
                color: row.info === 'Yes' ? 'green' : 'black',
              }}
              align="center"
            >
              {row.info}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default OthersTable

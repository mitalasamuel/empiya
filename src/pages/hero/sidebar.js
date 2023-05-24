import { Box, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Divider from '@mui/material/Divider';


const Sidebar = () => {

  const Styles = {
    textDecoration: 'none',
    padding: '0 1rem',
    color: '#678',
    fontSize: '1.1rem'
  }
  return (
    <>
      <Box>
        <Box minWidth={['100%','100%','20rem']}>
          {/* <Divider color='white'display={['none','none','flex']} textAlign="right" sx={{ borderRightWidth: .4, color: 'white' }}> */}
          <Box>
          <Button style={{ textTransform: 'capitalize' }}>
              <Link href='/' style={Styles}>Send</Link>
            </Button>
          </Box>
          {/* </Divider> */}
          {/* <Divider color='white'display={['none','none','flex']} textAlign="right"> */}
            <Box>
            <Button style={{ textTransform: 'capitalize' }}>
              <Link href='/' style={Styles}>Receive</Link>
            </Button>
            </Box>
          {/* </Divider> */}
          {/* <Divider color='white'display={['none','none','flex']} textAlign="right"> */}
           <Box>
           <Button style={{ textTransform: 'capitalize' }}>
              <Link href='/' style={Styles}>Trade</Link>
            </Button>
           </Box>
          {/* </Divider> */}
        </Box>
      </Box>
    </>
  )
}

export default Sidebar

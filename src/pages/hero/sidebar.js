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
        <Box minWidth={['100%', '10rem', '10rem', '30rem']} display={['none', 'none', 'block', 'block']}>
          {/* <Divider color='white'display={['none','none','flex']} textAlign="right" sx={{ borderRightWidth: .4, color: 'white' }}> */}
          <Box margin={['0', '0 0 0 0']}>
            <Button style={{ textTransform: 'capitalize' }}>
            </Button>
            <Box sx={{ width: "100%" }}>
              <Button
              size='small'
                sx={{ background: "linear-gradient(135deg, #4aaffd 0%, #FF8E53 100%)", height: '.1px', width: ['0', '2rem', '1rem', '12rem'] }}
                variant="determinate"

              />
              <Link href='/' style={Styles}>Exchange</Link>
            </Box>  </Box>
            <Box margin={['0', '2rem 0']}>

               <Box sx={{ width: "100%" }}>
              <Button
              size='small'
                sx={{ background: "linear-gradient(135deg, #4aaffd 0%, #FF8E53 100%)", height: '.1px', width: ['0', '3rem', '5rem', '12rem'] }}
                variant="determinate"

              />
              <Link href='/' style={Styles}>Send</Link>
            </Box>
          </Box>
          <Box margin={['0', '2rem 0']}>
            <Box sx={{ width: "100%" }}>
              <Button
                sx={{ background: "linear-gradient(135deg, #4aaffd 0%, #FF8E53 100%)", width: ['0', '2rem', '3rem', '12rem'] }}
                variant="determinate"
              />
              <Link href='/' style={Styles}>Receive</Link>
            </Box>
          </Box>
          <Box margin={['0', '0 0 0 0']}>
            <Box sx={{ width: "100%" }}>
              <Button
                sx={{ background: "linear-gradient(135deg, #4aaffd 0%, #FF8E53 100%)",width:['0', '3rem', '5rem', '12rem'] }}
                variant="determinate"
              />
              <Link href='/' style={Styles}>Trade</Link>

            </Box>
            <Button style={{ textTransform: 'capitalize' }}>
            </Button>
          </Box>
          {/* </Divider> */}
        </Box>
        <Box minWidth={['100%', '100%', '30rem']} display={['flex', 'flex', 'none', 'none']}>
          {/* <Divider color='white'display={['none','none','flex']} textAlign="right" sx={{ borderRightWidth: .4, color: 'white' }}> */}
          <Box margin={['0', '0 0 0 0']}>
            <Box sx={{ width: "100%" }}>
              <Button>              <Link href='/' style={Styles}>Exchange</Link>
              </Button>
            </Box>
          </Box>
          <Box margin={['0', '0 0 0 0']}>
            <Box sx={{ width: "100%" }}>
              <Button>              <Link href='/' style={Styles}>Send</Link>
              </Button>
            </Box>
          </Box>
          <Box>
            <Box sx={{ width: "100%" }}>
              <Button
              >
                <Link href='/' style={Styles}>Receive</Link>
              </Button>
            </Box>
          </Box>
          <Box margin={['0', '0 0 0 0']}>
            <Box sx={{ width: "100%" }}>
              <Button>
                <Link href='/' style={Styles}>Trade</Link>
              </Button>
            </Box>
          </Box>
          {/* </Divider> */}
        </Box>
      </Box>
    </>
  )
}

export default Sidebar

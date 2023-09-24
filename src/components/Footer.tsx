import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box sx={{my:6}}>
        <Box sx={{textAlign: 'center'}}>
            <Facebook sx={{mx: 3, fontSize:'50px'}}/>
            <Instagram sx={{mx: 3, fontSize:'50px'}}/>
            <Twitter sx={{mx: 3, fontSize:'50px'}}/>
            <LinkedIn sx={{mx: 3, fontSize:'50px'}}/>
        </Box>
        <Typography sx={{
            textAlign:'center',
            mt:3,
            fontSize: '14px',
            lineHeight:'21px'
        }}>Copyright ©2020 All rights reserved </Typography>
    </Box>
  )
}

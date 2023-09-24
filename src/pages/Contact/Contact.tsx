import { Box, Chip, Container, Typography } from "@mui/material";
import { Props } from "../Home/Home";

export default function Contact({isMobile} : Props) {

    let titleLineH = ''
    let titleSize = ''
    let boxPadding = 0
    let fsHeading1 = ''
    let fsHeading2 = ''
    let boxMarginTop = 0
    if(isMobile){
        boxPadding = 15
        fsHeading1 = '30px'
        fsHeading2 = '24px'
        titleSize = '34px'
        titleLineH = '50px'
        boxMarginTop = 0
    } else {
        boxPadding = 5
        fsHeading1 = '26px'
        fsHeading2 = '20px'
        titleSize = '30px'
        titleLineH = '40px'
        boxMarginTop = 7
    }
  return (
    <Box sx={{mt:boxMarginTop}}>
      <Container>
        <Box sx={{px: 'auto', p:boxPadding}}>
          <Typography
            sx={{
              fontSize: `${titleSize}`,
              fontWeight: 700,
              lineHeight: `${titleLineH}`,
            }}
          >
            Designing Dashboards with usability in mind
          </Typography>
          <Box sx={{ display: "flex", my: 4 }}>
            <Chip
              label="2020"
              sx={{
                bgcolor: "#FF7C7C",
                color: "white",
                fontSize: "18px",
                fontWeight: 900,
              }}
            />
            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: "30px",
                color: "#21243D",
                ml: 5,
              }}
            >
              Dashboard, User Experience Design
            </Typography>
          </Box>
          <Typography>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography>
          <Box sx={{my:4}}>
            <img style={{width: '100%', height:'100%'}} src="./img/Featured01.jpeg" />
          </Box>
          <Typography sx={{
            fontWeight: 500,
            lineHeight:'60px',
            fontSize:`${fsHeading1}`
          }}>Heading 1</Typography>
          <Typography
          sx={{
            fontWeight: 500,
            lineHeight:'60px',
            fontSize:`${fsHeading2}`
          }}
          >Heading 2</Typography>
          <Typography>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
          <Box sx={{my:4}}>
            <img style={{width: '100%', height:'100%'}} src="./img/Featured02.jpeg" />
          </Box>
          <Box sx={{my:4}}>
            <img style={{width: '100%', height:'100%'}} src="./img/Featured01.jpeg" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

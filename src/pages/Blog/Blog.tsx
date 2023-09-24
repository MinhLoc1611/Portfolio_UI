import { Box, Container, Typography } from "@mui/material";
import CardBlog from "./CardBlog/CardBlog";
import { Props } from "../Home/Home";

export default function Blog({isMobile} : Props) {
    
    let boxPadding = 0
    let titleSize = ''
    let boxMarginTop = 0
    if(isMobile){
        boxPadding = 15
        titleSize = '44px'
        boxMarginTop = 0
    } else {
        boxPadding = 5
        titleSize = '30px'
        boxMarginTop = 3
    }
  return (
    <Box sx={{mt:boxMarginTop}}>
      <Container sx={{ mx: "auto" }}>
        <Box sx={{px:'auto', p:boxPadding}}>
          <Typography
            sx={{
              fontSize: `${titleSize}`,
              fontWeight: 700,
              lineHeight: "60px",
            }}
            gutterBottom
          >
            Blog
          </Typography>
            <CardBlog/>
            <CardBlog/>
            <CardBlog/>
            <CardBlog/>
        </Box>
      </Container>
    </Box>
  );
}

import { Box, Chip, Container, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ mt: { xs: 7, sm: 5, md: 0 } }}>
      <Container>
        <Box sx={{ px: "auto", p: { sm: 5, md: 15, xs: 3 } }}>
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "34px" },
              fontWeight: 700,
              lineHeight: { xs: "40px", md: "50px" },
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
          <Box sx={{ my: 4 }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="./img/Featured01.jpeg"
            />
          </Box>
          <Typography
            sx={{
              fontWeight: 500,
              lineHeight: "60px",
              fontSize: { xs: "26px", md: "30px" },
            }}
          >
            Heading 1
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              lineHeight: "60px",
              fontSize: { xs: "20px", md: "26px" },
            }}
          >
            Heading 2
          </Typography>
          <Typography>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography>
          <Box sx={{ my: 4 }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="./img/Featured02.jpeg"
            />
          </Box>
          <Box sx={{ my: 4 }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="./img/Featured01.jpeg"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

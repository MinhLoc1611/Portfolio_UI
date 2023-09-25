import { Box, Typography, Grid, Chip, Container } from "@mui/material";

export default function Works() {
  return (
    <Box sx={{ mt: { xs: 5, md: 0 } }}>
      <Container>
        <Grid container sx={{ px: "auto", p: { xs: 5, md: 15 } }} spacing={5}>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: { xs: "30px", md: "44px" },
                fontWeight: { xs: 700, md: 900 },
                lineHeight: "60px",
              }}
              gutterBottom
            >
              Work
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              pb: 5,
              borderBottom: "1px solid #E0E0E0",
            }}
          >
            <Grid container spacing={4}>
              <Grid item md={4}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  src="./img/Featured01.jpeg"
                />
              </Grid>
              <Grid item md={8}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 700,
                    lineHeight: "44px",
                  }}
                >
                  Designing Dashboards
                </Typography>
                <Box sx={{ display: "flex", my: 4 }}>
                  <Chip
                    label="2020"
                    sx={{
                      bgcolor: "#142850",
                      color: "white",
                      fontSize: "18px",
                      fontWeight: 900,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "20px",
                      lineHeight: "30px",
                      color: "#8695A4",
                      ml: 5,
                    }}
                  >
                    Dashboard
                  </Typography>
                </Box>
                <Typography>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              pb: 5,
              borderBottom: "1px solid #E0E0E0",
            }}
          >
            <Grid container spacing={4}>
              <Grid item md={4}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  src="./img/Featured02.jpeg"
                />
              </Grid>
              <Grid item md={8}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 700,
                    lineHeight: "44px",
                  }}
                >
                  Vibrant Portraits of 2020
                </Typography>
                <Box sx={{ display: "flex", my: 4 }}>
                  <Chip
                    label="2020"
                    sx={{
                      bgcolor: "#142850",
                      color: "white",
                      fontSize: "18px",
                      fontWeight: 900,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "20px",
                      lineHeight: "30px",
                      color: "#8695A4",
                      ml: 5,
                    }}
                  >
                    Illustration
                  </Typography>
                </Box>
                <Typography>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              pb: 5,
              borderBottom: "1px solid #E0E0E0",
            }}
          >
            <Grid container spacing={4}>
              <Grid item md={4}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  src="./img/Featured01.jpeg"
                />
              </Grid>
              <Grid item md={8}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 700,
                    lineHeight: "44px",
                  }}
                >
                  36 Days of Malayalam type
                </Typography>
                <Box sx={{ display: "flex", my: 4 }}>
                  <Chip
                    label="2018"
                    sx={{
                      bgcolor: "#142850",
                      color: "white",
                      fontSize: "18px",
                      fontWeight: 900,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "20px",
                      lineHeight: "30px",
                      color: "#8695A4",
                      ml: 5,
                    }}
                  >
                    Typography
                  </Typography>
                </Box>
                <Typography>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

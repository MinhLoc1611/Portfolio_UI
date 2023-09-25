import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";

export default function Home() {

  return (
    <Box sx={{ mt: {xs:10, md:15} }}>
      <Box>
        <Container>
        <Grid container sx={{ px: "auto", p: 5 }} spacing={3}>
            <Grid item xs={12} md={7} sx={{order:{xs:2, md:1}, textAlign:{xs:'center', md:'left'}}}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "44px",
                  lineHeight: "60px",
                  mb: 4,
                }}
              >
                Hi, I am John, <br /> Creative Technologist
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0px",
                  mb: 4,
                }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FF6464",
                  ":hover": { bgcolor: "red" },
                  mb: 4,
                }}
              >
                Download Resume
              </Button>
            </Grid>
            <Grid item xs={12} md={5} sx={{order:{xs:1, md:2}}}>
              <Box sx={{display:'flex', justifyContent:'center'}}>
                <Avatar
                  alt="John"
                  src="./img/avatar.jpg"
                  sx={{
                    width: 243,
                    height: 243,
                    boxShadow: "-0.4em 0.4em 0 0 #EDF7FA",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ mt: 5, bgcolor: "#EDF7FA" }}>
        <Container>
          <Grid container sx={{ px: "auto", p: 5 }} spacing={3}>
            <Grid item xs={12} sx={{ paddingTop: "0px !important" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    fontSize: "22px",
                    lineHeight: "24px",
                  }}
                >
                  Recent posts
                </Typography>
                <Typography
                  sx={{
                    lineHeight: "24px",
                    color: "#00A8CC",
                    textDecorationLine: "underline",
                    cursor: "pointer",
                  }}
                >
                  View all
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box sx={{ p: 3 }} bgcolor={"white"}>
                <Typography
                  sx={{
                    fontSize: "26px",
                    fontWeight: 700,
                    lineHeight: "38px",
                  }}
                  gutterBottom
                >
                  Making a design system from scratch
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      lineHeight: "26px",
                      pr: 5,
                      borderRight: "1px solid",
                    }}
                  >
                    12 Feb 2020
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      lineHeight: "26px",
                      pl: 5,
                    }}
                  >
                    Design Pattern
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    my: 3,
                  }}
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box sx={{ p: 3 }} bgcolor={"white"}>
                <Typography
                  sx={{
                    fontSize: "26px",
                    fontWeight: 700,
                    lineHeight: "38px",
                  }}
                  gutterBottom
                >
                  Creating pixel perfect icons in Figma
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      lineHeight: "26px",
                      pr: 5,
                      borderRight: "1px solid",
                    }}
                  >
                    12 Feb 2020
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      lineHeight: "26px",
                      pl: 5,
                    }}
                  >
                    Figma, Icon Design
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    my: 3,
                  }}
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Container>
          <Grid container sx={{ px: "auto", p: 5 }} spacing={3}>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: "22px",
                  lineHeight: "24px",
                }}
              >
                Featured works
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                pb: 3,
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
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                pb: 3,
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
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                pb: 3,
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
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

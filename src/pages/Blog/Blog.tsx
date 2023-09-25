import { Box, Container, Typography } from "@mui/material";
import CardBlog from "./CardBlog/CardBlog";

export default function Blog() {
  return (
    <Box sx={{ mt: { xs: 5, md: 0 } }}>
      <Container sx={{ mx: "auto" }}>
        <Box sx={{ px: "auto", p: { xs: 3, sm:5, md: 15 } }}>
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "44px" },
              fontWeight: 700,
              lineHeight: "60px",
            }}
            gutterBottom
          >
            Blog
          </Typography>
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </Box>
      </Container>
    </Box>
  );
}

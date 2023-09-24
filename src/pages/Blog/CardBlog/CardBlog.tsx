import { Box, Typography } from "@mui/material";

export default function CardBlog() {
  return (
    <Box sx={{
        pb:3,
        borderBottom: '1px solid  #E0E0E0',
        mb:3
    }}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "30px",
          lineHeight: "44px",
        }}
        gutterBottom
      >
        UI Interactions of the week
      </Typography>
      <Box sx={{display: 'flex', mb:2}}>
        <Typography
          sx={{
            fontSize: "20px",
            pr: 3,
            borderRight: "1px solid black",
          }}
        >
          12 Feb 2019
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            pl: 3,
            color: "#8695A4",
          }}
        >
          12 Feb 2019
        </Typography>
      </Box>
      <Typography>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </Typography>
    </Box>
  );
}

import { Box, Button, Container, Link, Typography } from "@mui/material";

function Home() {
  return (
    <section className="home">
      <Box component={"div"}>
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            mt: { xs: 5, sm: 7, xl: 10 },
            columnGap: "20px",
          }}
        >
          <Box
            component={"div"}
            className="home__left"
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "1.125rem",
                  sm: "1.5rem",
                  lg: "1.8rem",
                  xl: "2rem",
                },
                fontWeight: "bold",
                textAlign: { xs: "center", sm: "left" },
              }}
              variant="h1"
            >
              Welcome to my project defence ✅
            </Typography>
            <Typography
              sx={{
                fontWeight: "normal",
                fontSize: { sm: "0.8rem", md: "1rem", xl: "1.125rem" },
                mt: 1,
                textAlign: { xs: "center", sm: "left" },
              }}
              component={"h5"}
            >
              Here you can easily create forms for your business, studies and
              e.t.c
            </Typography>
            <Button href="/auth" variant="contained" sx={{ mt: 3, mb: 3 }}>
              Start
            </Button>
          </Box>
          <Box className="home__right" component={"div"}>
            <img
              src="https://picsum.photos/id/237/500/500"
              alt="img of a dog"
              className="home__img"
              width={500}
              height={500}
            />
          </Box>
        </Container>
      </Box>
    </section>
  );
}

export default Home;

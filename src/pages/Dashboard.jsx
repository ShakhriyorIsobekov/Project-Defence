import { Box, Button, Container, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Dashboard() {
  return (
    <section>
      <Box component={"div"}>
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: "peru",
            margin: "50px auto",
            p: 4,
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Card sx={{ maxWidth: 300, minHeight: 300 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  Sh
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shahriyor Isobekov"
              subheader="September 14, 2016"
            />
            <CardContent>
              <Typography sx={{ color: "text.secondary" }} variant="body2">
                Create a new template...
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "5rem",
                  textAlign: "center",
                }}
                variant="body2"
              >
                +
              </Typography>
              <Box
                component={"div"}
                sx={{ display: "flex", justifyContent: "end" }}
              >
                <Button
                  href="/template:id"
                  variant="outlined"
                  sx={{
                    backgroundColor: "#555",
                    color: "#fff",
                    textTransform: "capitalize",
                  }}
                >
                  Try
                </Button>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 300, minHeight: 300 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  Sh
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shahriyor Isobekov"
              subheader="September 14, 2016"
            />

            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Using this template you can create a simple form for your
                employers. There are all neccessary forms for the user. For
                example: Firstname, Lastname, Address and e.t.c. Feel free to
                use :)
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button
                href="/template:id"
                variant="outlined"
                sx={{
                  backgroundColor: "#555",
                  color: "#fff",
                  ml: "auto",
                  textTransform: "capitalize",
                }}
              >
                Try
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 300, minHeight: 300 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  Sh
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shahriyor Isobekov"
              subheader="September 14, 2016"
            />

            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Using this template you can create a simple form for your
                employers. There are all neccessary forms for the user. For
                example: Firstname, Lastname, Address and e.t.c. Feel free to
                use :)
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button
                href="/template:id"
                variant="outlined"
                sx={{
                  backgroundColor: "#555",
                  color: "#fff",
                  ml: "auto",
                  textTransform: "capitalize",
                }}
              >
                Try
              </Button>
            </CardActions>
          </Card>
        </Container>
      </Box>
    </section>
  );
}

export default Dashboard;

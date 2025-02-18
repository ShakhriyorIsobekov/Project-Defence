import { Box, Button } from "@mui/material";

function Logout() {
  return (
    <section>
      <Box component={"div"}>
        <Button variant="contained" sx={{ backgroundColor: "red", ml: 2 }}>
          Logout
        </Button>
      </Box>
    </section>
  );
}

export default Logout;

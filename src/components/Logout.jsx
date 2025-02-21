import { Box, Button } from "@mui/material";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { clearAuthToken } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    clearAuthToken();
    navigate("/auth/login");
  };

  return (
    <section>
      <Box component={"div"}>
        <Button
          onClick={handleLogout}
          variant="contained"
          sx={{ backgroundColor: "red", ml: 2 }}
        >
          Logout
        </Button>
      </Box>
    </section>
  );
}

export default Logout;

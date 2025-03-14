//toast
import { toast } from "react-hot-toast";
// mui
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
// react hook form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// zod
import { z } from "zod";
// react
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../components/useAuth";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

function Login() {
  const navigate = useNavigate();
  const { setAuthToken } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // error messages
  const [formError, setFormError] = useState(null);

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await fetch(
        "https://vumxpbp6rd.execute-api.eu-north-1.amazonaws.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          // credentials: "include",
        }
      );
      if (response.ok) {
        const result = await response.json();
        setAuthToken(result.token);
        console.log(result);
        console.log("Login successful", result);
        toast.success("Login successful ✅");
        setFormError(null);
        navigate("/dashboard");
      } else {
        console.log("Email or Password is incorrect! ❌");
        // toast.error("Something went wrong... ❌");
        setFormError("Email or Password is incorrect! ❌");
        throw new Error("Login failed");
      }
    } catch (err) {
      console.log("Error", err.message);
      // toast.error("Something went wrong... ❌");
      setFormError("Email or Password is incorrect! ❌");
    }
  };

  return (
    <section className="login">
      <Box
        component={"div"}
        sx={{
          maxWidth: "900px",
          width: "100%",
          margin: "100px auto",
          backgroundColor: "lightblue",
          p: { xs: 3, sm: 5, md: 7, lg: 10 },
          borderRadius: "20px",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "1.6rem",
                  sm: "1.8rem",
                  lg: "2rem",
                },
                fontWeight: "bold",
                mb: 2,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Login
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1rem", sm: "1rem", lg: "1.124rem" },
                mb: 4,
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
              }}
            >
              Login in order to continue...
            </Typography>
            {formError && (
              <Typography
                variant="h5"
                sx={{
                  color: "red",
                  fontSize: "1.125rem",
                  textAlign: "center",
                  mb: 3,
                }}
              >
                {formError}
              </Typography>
            )}
            <TextField
              required
              id="outlined-required-first"
              label="Email"
              sx={{ backgroundColor: "#ebebeb", borderRadius: "10px" }}
              {...register("email")}
              type="email"
            />
            {errors.email && (
              <Typography
                variant="h5"
                sx={{ color: "red", mt: 1, fontSize: "1rem" }}
              >
                {errors.email.message}
              </Typography>
            )}
            <TextField
              type="password"
              required
              id="outlined-required-second"
              label="Password"
              {...register("password")}
              sx={{ mt: 6, backgroundColor: "#ebebeb", borderRadius: "10px" }}
            />
            {errors.password && (
              <Typography
                variant="h5"
                sx={{ color: "red", mt: 1, fontSize: "1rem" }}
              >
                {errors.password.message}
              </Typography>
            )}
            <Button
              sx={{ mt: 5 }}
              disabled={isSubmitting}
              type="submit"
              variant="contained"
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </Button>
          </Box>
        </Container>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
            mt: 5,
            flexDirection: { xs: "column", sm: "row" },
            rowGap: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1rem",
                lg: "1.125rem",
                xl: "1.2rem",
              },
            }}
            variant="h4"
          >
            Do not have an account?{" "}
            <Link sx={{ fontWeight: "bold" }} href="register">
              Create Account
            </Link>
          </Typography>
          <Link
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1rem",
                lg: "1.125rem",
                xl: "1.2rem",
              },
              fontWeight: "bold",
            }}
            href="/forget"
          >
            Forgot Password?
          </Link>
        </Box>
      </Box>
    </section>
  );
}

export default Login;

// if (!response.ok) {
//   console.log("Email or Password is incorrect! ❌");
//   toast.error("Something went wrong... ❌");
//   setFormError("Email or Password is incorrect! ❌");
//   throw new Error("Login failed");
// }

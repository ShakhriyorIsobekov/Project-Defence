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
// navigate

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

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
        }
      );
      if (!response.ok) {
        console.log("Email or Password is incorrect! ❌");
        alert("Email or Password is incorrect! ❌");
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const result = await response.json();
      console.log("Login successful", result);
      alert("Login successful ✅");
      console.log(data);
    } catch (err) {
      console.log("Error", err);
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
            <TextField
              required
              id="outlined-required-first"
              label="Email"
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
              sx={{ mt: 6 }}
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

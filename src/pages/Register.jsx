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
//toast
import toast from "react-hot-toast";

const schema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(4),
});

function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // sending data to backend
      const response = await fetch(
        "https://project-defence-backend-jkxejtcui-shakhriyors-projects-9715e1dc.vercel.app/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Registration Failed");
      }

      const result = await response.json();
      toast.success("Registeration successful 🎉");
      console.log("Registration successful", result);
    } catch (err) {
      console.log("ERROR", err);
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
              Register
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
              Register in order to continue...
            </Typography>
            <TextField
              id="outlined-required-first"
              label="Username"
              sx={{ mb: 6 }}
              {...register("username")}
            />
            <TextField
              required
              id="outlined-required-second"
              label="Email"
              {...register("email")}
            />
            {errors.email && (
              <Typography
                variant="h5"
                sx={{
                  color: "red",
                  mt: 1,
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                {errors.email.message}
              </Typography>
            )}
            <TextField
              required
              id="outlined-required-third"
              label="Password"
              {...register("password")}
              sx={{ mt: 6 }}
            />
            {errors.password && (
              <Typography
                variant="h5"
                sx={{
                  color: "red",
                  mt: 1,
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
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
            <Box
              component={"div"}
              sx={{ display: "flex", justifyContent: "end", mt: 5 }}
            >
              <Link
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1rem",
                    lg: "1.125rem",
                    xl: "1.2rem",
                  },
                  fontWeight: "bold",
                }}
                href="/auth/login"
              >
                Sign In
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
}

export default Register;

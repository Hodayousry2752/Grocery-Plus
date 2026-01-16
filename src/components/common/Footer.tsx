import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <Box sx={{ background: "#f8fbfd", mt: 10 }}>
      <Container  sx={{ py: 6 }}>
<Stack
  direction={{ xs: "column", md: "row" }}
  spacing={25}
  justifyContent="space-between"
  alignItems="flex-start"
>
          {/* Left */}
          <Box flex={1}>
            <Typography variant="h5" fontWeight={700} color="primary.main">
              Grocery+
            </Typography>

            <Stack direction="row" spacing={1} mt={2}>
              <IconButton size="small"><Instagram /></IconButton>
              <IconButton size="small"><Linkedin /></IconButton>
              <IconButton size="small"><Facebook /></IconButton>
            </Stack>

            <Typography variant="body2" mt={3} maxWidth={300}>
              Grocery platform offering fresh produce, daily essentials,
              personalized recommendations, and seamless ordering with secure
              payments and real-time tracking.
            </Typography>

            <Typography variant="body2" mt={3}>
              📍 5th Settlement, New Cairo, Cairo, Egypt
            </Typography>
            <Typography variant="body2">
              ✉️ help@groceryplus.com
            </Typography>
          </Box>

          {/* Links */}
          <Box>
            <Typography fontWeight={600} mb={2}>Support</Typography>
            <Typography>FAQ</Typography>
            <Typography>Contact Us</Typography>
            <Typography>Chat</Typography>
          </Box>

          <Box>
            <Typography fontWeight={600} mb={2}>Services</Typography>
            <Typography>Order tracking</Typography>
            <Typography>Smart List</Typography>
            <Typography>Sign - up</Typography>
          </Box>

          <Box>
            <Typography fontWeight={600} mb={2}>Terms and Policies</Typography>
            <Typography>About Us</Typography>
            <Typography>Terms Of Use</Typography>
            <Typography>Privacy Policy</Typography>
            <Typography>Return Policy</Typography>
            <Typography>Cookies Policy</Typography>
          </Box>
        </Stack>
      </Container>

      {/* Bottom Bar */}
      <Box sx={{ background: "#0b4a6f", py: 2 }}>
        <Typography textAlign="center" color="#fff" variant="body2">
          © 2025 GroceryPlus - Smart Grocery, Delivered Fast. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

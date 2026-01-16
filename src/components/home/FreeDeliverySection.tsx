import { Box, Container, Typography, Button, Stack, Paper } from "@mui/material";

const FreeDeliverySection = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 10 }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        {/* Left Banner */}
        <Paper
          sx={{
            flex: 1,
            p: 4,
            borderRadius: 4,
            backgroundColor: "#d1cdc7",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: 260,
          }}
        >
          <Box maxWidth={260}>
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: "var(--color-primary)",
                color: "#fff",
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                fontSize: 12,
                mb: 2,
              }}
            >
              Free delivery
            </Box>

            <Typography variant="h5" fontWeight={700} mb={1}>
              Free delivery over £50
            </Typography>

            <Typography variant="body2" mb={3}>
              Shop £50 product and get free delivery anywhere.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--color-primary-btns)",
                "&:hover": {
                  backgroundColor: "var(--color-primary)",
                },
              }}
            >
              Shop Now →
            </Button>
          </Box>

          <Box
            component="img"
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400"
            alt="Delivery"
            sx={{
              height: 220,
              display: { xs: "none", sm: "block" },
            }}
          />
        </Paper>

        {/* Right Banner */}
        <Paper
          sx={{
            flex: 1,
            p: 4,
            borderRadius: 4,
            backgroundColor: "var(--color-primary)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: 260,
          }}
        >
          <Box maxWidth={260}>
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: "rgba(255,255,255,0.25)",
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                fontSize: 12,
                mb: 2,
              }}
            >
              60% off
            </Box>

            <Typography variant="h5" fontWeight={700} mb={1}>
              Organic Food
            </Typography>

            <Typography variant="body2" mb={3}>
              Save up to 60% off on your first order
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "var(--color-primary)",
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                },
              }}
            >
              Shop Now →
            </Button>
          </Box>

          <Box
            component="img"
            src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=400"
            alt="Organic Food"
            sx={{
              height: 220,
              display: { xs: "none", sm: "block" },
            }}
          />
        </Paper>
      </Stack>
    </Container>
  );
};

export default FreeDeliverySection;

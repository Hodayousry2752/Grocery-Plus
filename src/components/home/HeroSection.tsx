import { Box, Button, Typography, Stack } from '@mui/material';
import { ArrowRight } from 'lucide-react';
import heroImage from "../../assets/Hreo-img.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #346781 0%, #2a536b 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
        p:{xs:5 ,md:3},
        mb: 6,
      }}
    >
      <div>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box sx={{ maxWidth: 600 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Don't miss our daily
              <Box component="span" sx={{ color: '#FFD700', display: 'block' }}>
                amazing deals.
              </Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{ mb: 4, opacity: 0.9, fontSize: { xs: '1.1rem', md: '1.5rem' } }}
            >
              Save up to 60% off on your first order
            </Typography>
            <Button
              variant="contained"
              endIcon={<ArrowRight />}
              sx={{
                backgroundColor: 'white',
                color: '#346781',
                fontSize: '1.1rem',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              Shop Now
            </Button>
          </Box>
          <Box
            component="img"
            src={heroImage}
            alt="Grocery Deals"
            sx={{
              width: { xs: '100%', md: '50%' },
              height:{xs:"80%"}
            }}
          />
        </Stack>
      </div>
    </Box>
  );
};

export default HeroSection;
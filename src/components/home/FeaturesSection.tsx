import { Box, Container, Typography, Stack, Divider } from '@mui/material';
import { Tag, RefreshCw, Truck } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Tag size={28} />,
      title: 'Best Prices & Deals',
      description: "Don't miss our daily amazing deals and prices",
      color: '#346781',
    },
    {
      icon: <RefreshCw size={28} />,
      title: 'Refundable',
      description: 'If your items have damage we agree to refund it',
      color: '#346781',
    },
    {
      icon: <Truck size={28} />,
      title: 'Free delivery',
      description: 'Do purchase over $50 and get free delivery anywhere',
      color: '#346781',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={6}
        justifyContent="space-between"
      >
        {features.map((feature, index) => (
          <Stack
            key={index}
            direction="row"
            spacing={2}
            alignItems="flex-start"
            sx={{ flex: 1 }}
          >
            <Box sx={{ color: feature.color, mt: '2px' }}>
              {feature.icon}
            </Box>

            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: '#1f2937',
                  mb: 0.5,
                }}
              >
                {feature.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: '#6b7280',
                  maxWidth: 260,
                  lineHeight: 1.6,
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>

      {/* الخط الفاصل تحتهم */}
      <Divider sx={{ mt: 6 }} />
    </Container>
  );
};

export default FeaturesSection;

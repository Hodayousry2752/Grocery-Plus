import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  Rating,
} from "@mui/material";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const categories = ["Vegetables", "Fruits", "Coffe & teas", "Meat"];

const hotDeals = [
  {
    name: "Redish 500g",
    rating: 4,
    reviews: 4,
    originalPrice: 15.99,
    discountedPrice: 12,
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300",
  },
  {
    name: "Potatos 1g",
    rating: 3,
    reviews: 3,
    originalPrice: 25.99,
    discountedPrice: 20,
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300",
  },
  {
    name: "Tomatos 200g",
    rating: 4,
    reviews: 5,
    originalPrice: 28.99,
    discountedPrice: 24,
    image:
      "https://images.unsplash.com/photo-1546470427-227c3d6a7bb8?w=300",
  },
  {
    name: "Green Beans 350g",
    rating: 3,
    reviews: 2,
    originalPrice: 12.99,
    discountedPrice: 8,
    image:
      "https://images.unsplash.com/photo-1582515073490-dc0c1f5f7b09?w=300",
  },
  {
    name: "Broccoli 1kg",
    rating: 3,
    reviews: 2,
    originalPrice: 20,
    discountedPrice: 17,
    image:
      "https://images.unsplash.com/photo-1584270354949-1d0f4f9e6a4b?w=300",
  },
];

const HotDealsSection = () => {
  const [active, setActive] = useState("Vegetables");

  return (
    <Container maxWidth="lg" sx={{ mb: 10 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4" fontWeight={700}>
          Hot Deals
        </Typography>

        <Stack direction="row" spacing={3}>
          {categories.map((cat) => (
            <Typography
              key={cat}
              onClick={() => setActive(cat)}
              sx={{
                cursor: "pointer",
                fontWeight: active === cat ? 600 : 400,
                color:
                  active === cat
                    ? "var(--color-primary)"
                    : "text.secondary",
              }}
            >
              {cat}
            </Typography>
          ))}
        </Stack>
      </Box>

      {/* Cards */}
      <Stack direction="row" spacing={3}>
        {hotDeals.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: 220,
              borderRadius: 2,
              border: "1px solid #eee",
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                height: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>

            <CardContent sx={{ pt: 0 }}>
              <Typography variant="caption" color="text.secondary">
                Vegetables
              </Typography>

              <Typography fontWeight={600} fontSize={14}>
                {item.name}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Rating size="small" value={item.rating} readOnly />
                <Typography variant="caption" color="text.secondary">
                  ({item.reviews})
                </Typography>
              </Box>

              <Typography variant="caption" color="text.secondary">
                By Mr.food
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 1.5,
                }}
              >
                <Box>
                  <Typography
                    fontWeight={700}
                    color="var(--color-primary)"
                  >
                    £{item.discountedPrice}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      textDecoration: "line-through",
                      color: "text.secondary",
                    }}
                  >
                    £{item.originalPrice}
                  </Typography>
                </Box>

                <Button
                  size="small"
                  variant="contained"
                  startIcon={<ShoppingCart size={14} />}
                  sx={{
                    backgroundColor: "var(--color-primary-btns)",
                    fontSize: 12,
                    px: 2,
                    "&:hover": {
                      backgroundColor: "var(--color-primary)",
                    },
                  }}
                >
                  Add
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default HotDealsSection;

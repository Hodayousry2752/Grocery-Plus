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

const newProducts = [
  {
    name: "Papayas 5kg",
    rating: 4,
    reviews: 4,
    originalPrice: 90.99,
    discountedPrice: 80,
    image: "https://images.unsplash.com/photo-1610832743406-45c0c2bc1f65?w=300",
  },
  {
    name: "Peaches 2kg",
    rating: 4,
    reviews: 3,
    originalPrice: 57.8,
    discountedPrice: 55,
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=300",
  },
  {
    name: "Blackberries",
    rating: 4,
    reviews: 5,
    originalPrice: 65,
    discountedPrice: 60,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=300",
  },
  {
    name: "Apples 8kg",
    rating: 4,
    reviews: 2,
    originalPrice: 50.99,
    discountedPrice: 45,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=300",
  },
  {
    name: "Persimmon 1kg",
    rating: 4,
    reviews: 2,
    originalPrice: 37,
    discountedPrice: 35,
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=300",
  },
];

const NewProductsSection = () => {
  const [active, setActive] = useState("Fruits");

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
          New Product
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
        {newProducts.map((item, index) => (
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
                Fruits
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
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  mt: 1.5,
                }}
              >
                <Box>
                  <Typography fontWeight={700} color="var(--color-primary)">
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

export default NewProductsSection;

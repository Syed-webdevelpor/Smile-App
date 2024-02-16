import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { logo } from "./SmallComponents/Images";
import "./footer.css";
const footerArray = [
  {
    head: "Offer",
    textArray: [
      {
        name: "smile.car",
        link: "/#car",
      },
      {
        name: "smile.home",
        link: "/#home",
      },
      {
        name: "smile.bike",
        link: "/#bike",
      },
      {
        name: "smile.travel",
        link: "/#travel",
      },
      {
        name: "smile.legal",
        link: "/#legal",
      },
      {
        name: "smile.life",
        link: "/#life",
      },
      {
        name: "smile.health",
        link: "/#health",
      },
    ],
  },
  {
    head: "Service & Help",
    textArray: [
      {
        name: "Damage report",
        link: "/#Damage_report",
      },
      {
        name: "My Documents",
        link: "/#My_Documents",
      },
      {
        name: "Report changes",
        link: "/#Report_changes",
      },
      {
        name: "Contact",
        link: "/#contact",
      },
      {
        name: "FAQ",
        link: "/#faq",
      },
    ],
  },
  {
    head: "About Us",
    textArray: [
      {
        name: "Blog",
        link: "/#Blog",
      },
      {
        name: "Jobs and careers",
        link: "/#jobs",
      },
      {
        name: "About Us",
        link: "/#about_us",
      },
      {
        name: "Smile fan shop",
        link: "/#shop",
      },
      {
        name: "Social media community",
        link: "/#media",
      },
      {
        name: "Smile meta experience",
        link: "/#meta",
      },
    ],
  },
  {
    head: "sustainability",
    textArray: [
      {
        name: "smile.green",
        link: "/#green",
      },
      {
        name: "commitments",
        link: "/#commitments",
      },
      {
        name: "E-documents",
        link: "/#e-documents",
      },
      {
        name: "Viva con Agua",
        link: "/#viva",
      },
      {
        name: "eMobility",
        link: "/#eMobility",
      },
    ],
  },
  {
    head: "Legal",
    textArray: [
      {
        name: "Imprint",
        link: "/#imprint",
      },
      {
        name: "Data protection",
        link: "/#security",
      },
      {
        name: "Legal Notice",
        link: "/#notice",
      },
    ],
  },
];

function Footer() {
  return (
    <Box>
      <Container>
        <Grid container spacing={4} px={3}>
          <Grid item xs={12} sm={6} md={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "start" },
                alignItems: { xs: "center", md: "start" },
                flexDirection: "column",
              }}
            >
              <Box component={"img"} alt="" src={logo} width={"80px"} />
            </Box>
          </Grid>
          {footerArray.map(({ head, textArray }, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              key={head}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "start", md: "start" },
                flexDirection: "column",
              }}
            >
              <Box pl={{ xs: 0, sm: 3, md: 10 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: { xs: "18px", sm: "20px" },
                    fontWeight: { xs: "600", sm: "700" },
                    color: "#e95d0f",
                  }}
                >
                  {head}
                </Typography>
                {textArray.map(({ name, link }) => (
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#868685",
                      fontFamily: "Montserrat",
                      fontSize: "14px",
                      fontWeight: "700",
                      my: 2,
                      cursor: "pointer",
                    }}
                  >
                    {name}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import "./Perfil.css";
import { useNavigate } from "react-router-dom";
import logo_edwar from "../../resource/logo_edwar2.png";
import edwar from "../../resource/perfil_edwar.jpg";
import Hoja_de_Vida_Edwar_Marin from "../../resource/Hoja_de_Vida_Edwar_Marin.png";
import Hoja_de_Vida_Edwar_Marin_certificados from "../../resource/Hoja_de_Vida_Edwar_Marin_certificados.pdf";

import AspectRatio from "@mui/joy/AspectRatio";
import Box2 from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography2 from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import Button from "@mui/joy/Button";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import CardContent from "@mui/joy/CardContent";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Perfil() {
  const navigate = useNavigate();

  const images = [
    {
      url: logo_edwar,
      title: "Volver al Inicio",
      width: "30%",
      onClick: () => {
        navigate("/");
      },
    },
  ];

  return (
    <div>
      <div className="App">
        <div className="contenedor_titulo_perfil">
          <h1 className="titulo_perfil">Perfil</h1>
          <h3 className="descripcion_perfil">Éste es el perfil de Edwar:</h3>
        </div>
      </div>
      ,
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <Box2 sx={{ minHeight: 350 }}>
          <Card
            color="success"
            invertedColors
            size="lg"
            variant="soft"
            sx={(theme) => ({
              width: 300,
              gridColumn: "span 2",
              flexDirection: "row",
              flexWrap: "wrap",
              resize: "horizontal",
              overflow: "hidden",
              gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
              transition: "transform 0.3s, border 0.3s",
              "&:hover": {
                borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                transform: "translateY(-2px)",
              },
              "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },
            })}
          >
            <AspectRatio
              variant="soft"
              sx={{
                flexGrow: 1,
                display: "contents",
                "--AspectRatio-paddingBottom":
                  "clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))",
              }}
            >
              <img src={edwar} loading="lazy" alt="" />
            </AspectRatio>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 200,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <div>
                  <Typography2 level="title-lg">
                    <Link
                      href="#container-responsive"
                      overlay
                      underline="none"
                      sx={{
                        color: "text.primary",
                        "&.Mui-focusVisible:after": { outlineOffset: "-4px" },
                      }}
                    >
                      Edwar Andrés Marín Morales
                    </Link>
                  </Typography2>
                  <Typography2 level="body-sm">Neira, Caldas</Typography2>
                </div>
                <IconButton
                  size="sm"
                  variant="plain"
                  color="neutral"
                  sx={{ ml: "auto", alignSelf: "flex-start" }}
                >
                  <FavoriteBorderRoundedIcon color="danger" />
                </IconButton>
              </Box>
              <AspectRatio
                variant="soft"
                sx={{
                  "--AspectRatio-paddingBottom":
                    "clamp(0px, (100% - 200px) * 999, 300px)",
                  pointerEvents: "none",
                }}
              >
                <img alt="" src={edwar} />
              </AspectRatio>
              <Box sx={{ display: "flex", gap: 1.5, mt: "auto" }}>
                <div>
                  <Typography level="body-xs">Estudiante</Typography>
                  <Typography level="body-sm">
                    Ingeniería en sistemas y computación
                  </Typography>
                </div>
              </Box>
            </Box>
          </Card>
          
        </Box2>
        <Card
            color="danger"
            invertedColors
            size="lg"
            variant="soft"
            sx={{ width: 320 }}
          >
            <div>
              <Typography level="title-lg">Hoja de vida</Typography>
              <Typography level="body-sm">Edwar Andrés Marín Morales</Typography>
              <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
              >
                <BookmarkAdd />
              </IconButton>
            </div>
            <AspectRatio minHeight="300px" maxHeight="200px">
              <img
                src={Hoja_de_Vida_Edwar_Marin}
                srcSet={Hoja_de_Vida_Edwar_Marin}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <CardContent orientation="horizontal">
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
              >
                <Link
                disabled={false}
                level="title-sm"
                underline="none"
                variant="solid"
                href={Hoja_de_Vida_Edwar_Marin_certificados}
                target='_blank'
              >
                Visitar
              </Link>
              </Button>
            </CardContent>
          </Card>
      </div>
      ,
      <Box
        style={{ display: "flex", justifyContent: "center", gap: "30px" }}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
        }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
            onClick={image.onClick}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </div>
  );
}

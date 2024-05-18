import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import "./Contacto.css";
import { useNavigate } from "react-router-dom";
import logo_edwar from "../../resource/logo_edwar2.png";
import edwar from "../../resource/perfil_edwar.jpg";

import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography2 from "@mui/joy/Typography";
import Box2 from "@mui/joy/Box";
import SvgIcon from "@mui/joy/SvgIcon";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

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

export default function Contacto() {
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
        <div className="contenedor_titulo_contacto">
          <h1 className="titulo_contacto">Contacto</h1>
          <h3 className="descripcion_contacto">
            Para más información aquí te dejo mis contactos:
          </h3>
        </div>
      </div>
      ,
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            width: 320,
            maxWidth: "100%",
            boxShadow: "lg",
          }}
        >
          <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
            <Avatar src={edwar} sx={{ "--Avatar-size": "4rem" }} />
            <Chip
              size="sm"
              variant="soft"
              color="primary"
              sx={{
                mt: -1,
                mb: 1,
                border: "3px solid",
                borderColor: "background.surface",
              }}
            >
              PRO
            </Chip>
            <Typography2 level="title-lg">
              Edwar Andrés Marín Morales
            </Typography2>
            <Typography2 level="body-sm" sx={{ maxWidth: "24ch" }}>
              Hola, Soy estudiante de noveno semestre de ingeniería en sistemas
              y computación de la Universidad de Caldas.
            </Typography2>
            <Box2
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
                "& > button": { borderRadius: "2rem" },
              }}
            >
              <IconButton variant="soft">
                <FacebookRoundedIcon />
              </IconButton>
              <IconButton variant="soft">
                <GitHubIcon />
              </IconButton>
              <IconButton variant="soft">
                <YouTubeIcon />
              </IconButton>
            </Box2>
          </CardContent>
          <CardOverflow sx={{ bgcolor: "background.level1" }}>
            <CardActions buttonFlex="1">
              <ButtonGroup
                variant="outlined"
                sx={{ bgcolor: "background.surface" }}
              >
                <Button>Mensaje</Button>
                <Button>Contactar</Button>
              </ButtonGroup>
            </CardActions>
          </CardOverflow>
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

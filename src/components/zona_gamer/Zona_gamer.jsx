import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import "./Zona_gamer.css";
import { useNavigate } from "react-router-dom";
import logo_edwar from "../../resource/logo_edwar2.png";
import edwar_gamer from "../../resource/logo_edwar_gamer.png";

import logo_fc24 from "../../resource/logo_fc24.png";
import logo_call from "../../resource/logo_call.jpg";
import logo_american from "../../resource/logo_american.png";
import logo_minecraft from "../../resource/logo_minecraft.jpg";

import AspectRatio from "@mui/joy/AspectRatio";
import Box2 from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography2 from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

import Button from "@mui/joy/Button";
import CardContent from "@mui/joy/CardContent";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

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

export default function Zona_gamer() {
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
        <div className="contenedor_titulo_zona_gamer">
          <h1 className="titulo_zona_gamer">Zona Gamer</h1>
          <h3 className="descripcion_zona_gamer">
            Éstos son los juegos que estoy jugando en el momento:
          </h3>
        </div>
      </div>
      ,
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <Box2 sx={{ minHeight: 350 }}>
          <Card
            color="warning"
            invertedColors
            orientation="vertical"
            size="lg"
            variant="solid"
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
              <img src={edwar_gamer} loading="lazy" alt="" />
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
                      href="/zona_gamer"
                      overlay
                      underline="none"
                      sx={{
                        color: "text.primary",
                        "&.Mui-focusVisible:after": { outlineOffset: "-4px" },
                      }}
                    >
                      edwar2marin
                    </Link>
                  </Typography2>
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
                <img alt="" src={edwar_gamer} />
              </AspectRatio>
              <Box sx={{ display: "flex", gap: 1.5, mt: "auto" }}>
                <div>
                  <Typography level="body-xs">XBOX ONE</Typography>
                  <Typography level="body-sm">
                    Aficionado por los video juegos.
                  </Typography>
                </div>
              </Box>
            </Box>
          </Card>
        </Box2>
      </div>
      ,
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <Card
          sx={{ width: 320 }}
          color="warning"
          invertedColors
          orientation="vertical"
          size="lg"
          variant="soft"
        >
          <div>
            <Typography level="title-lg">FC24</Typography>
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
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img src={logo_fc24} srcSet={logo_fc24} loading="lazy" alt="" />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body-xs">edwar2marin</Typography>
            </div>
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
                href="https://www.twitch.tv/edwar2marin"
                target='_blank'
              >
                Visitar
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card
          sx={{ width: 320 }}
          color="warning"
          invertedColors
          orientation="vertical"
          size="lg"
          variant="soft"
        >
          <div>
            <Typography level="title-lg">Call of Dutty - Warzone</Typography>
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
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img src={logo_call} srcSet={logo_call} loading="lazy" alt="" />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body-xs">edwar99lds</Typography>
            </div>
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
                href="https://www.twitch.tv/edwar2marin"
                target='_blank'
              >
                Visitar
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card
          sx={{ width: 320 }}
          color="warning"
          invertedColors
          orientation="vertical"
          size="lg"
          variant="soft"
        >
          <div>
            <Typography level="title-lg">American truk simulator</Typography>
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
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src={logo_american}
              srcSet={logo_american}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body-xs">edwar2marin</Typography>
            </div>
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
                href="https://www.twitch.tv/edwar2marin"
                target='_blank'
              >
                Visitar
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card
          sx={{ width: 320 }}
          color="warning"
          invertedColors
          orientation="vertical"
          size="lg"
          variant="soft"
        >
          <div>
            <Typography level="title-lg">Minecraft</Typography>
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
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src={logo_minecraft}
              srcSet={logo_minecraft}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body-xs">edwar2marin</Typography>
            </div>
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
                href="https://www.twitch.tv/edwar2marin"
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

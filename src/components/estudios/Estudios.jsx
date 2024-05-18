import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import "./Estudios.css";
import { useNavigate } from "react-router-dom";
import logo_edwar from "../../resource/logo_edwar2.png";
import logoSena from "../../resource/logoSena.png";
import logoU from "../../resource/Logo_80_anos_Universidad_de_Caldas_Azul.png";
import certificado_auditoria from "../../resource/Certificado_aprobacion_auditoria_informatica_conceptualizacion.pdf"
import certificado_pedagogia_humana from "../../resource/Certificado_aprobacion_pedagogia_humana.pdf"
import certificado_estrategias_pedagogicas from "../../resource/Certificado_aprobacion_estrategias_pedagogicas_desarrollo_pensamiento.pdf"
import certificado_iot from "../../resource/Certificado_aprobacion_diseño_soluciones_iot.pdf"

import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography2 from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import Link from "@mui/joy/Link";

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

export default function Estudios() {
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
        <div className="contenedor_titulo_estudios">
          <h1 className="titulo_estudios">Estudios</h1>
          <h3 className="descripcion_estudios">
            Éstos son los estudios realizados por Edwar hasta el momento:
          </h3>
        </div>
      </div>
      ,
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <Card
          sx={{ width: 320 }}
          color="danger"
          invertedColors
          orientation="vertical"
          size="md"
          variant="soft"
        >
          <div>
            <Typography level="title-lg">
              INGENIERÍA EN SISTEMAS Y COMPUTACIÓN
            </Typography>
            <Typography level="body-sm">Actualmente</Typography>
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
            <img src={logoU} srcSet={logoU} loading="lazy" alt="" />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body-xs">Universidad de Caldas</Typography>
            </div>
            <Button
              variant="solid"
              size="md"
              color="primary"
              aria-label="Explore Bahamas Islands"
              sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            >
              <Link
                level="title-sm"
                underline="none"
                variant="solid"
                href="https://ingenierias.ucaldas.edu.co/oferta-academica/
              ingenieria-de-sistemas-y-computacion/"
              target='_blank'
              >
                Visitar
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card
          sx={{ width: 320 }}
          color="danger"
          invertedColors
          orientation="vertical"
          size="md"
          variant="soft"
        >
          <div>
            <Typography level="title-lg">
              AUDITORIA INFORMATICA: CONCEPTUALIZACION
            </Typography>
            <Typography level="body-sm">2 Mar 2024</Typography>
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
            <img src={logoSena} srcSet={logoSena} loading="lazy" alt="" />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body-xs">
                El servicio Nacional de Aprendizaje SENA
              </Typography>
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
                href={certificado_auditoria}
                target='_blank'
              >
                Certificado
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card
          sx={{ width: 320 }}
          color="danger"
          invertedColors
          orientation="vertical"
          size="md"
          variant="soft"
        >
          <div>
            <Typography level="title-lg">PEDAGOGIA HUMANA</Typography>
            <Typography level="body-sm">28 Nov 2023</Typography>
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
            <img src={logoSena} srcSet={logoSena} loading="lazy" alt="" />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body-xs">
                El servicio Nacional de Aprendizaje SENA
              </Typography>
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
                href={certificado_pedagogia_humana}
                target='_blank'
              >
                Certificado
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      ,
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <Card
          sx={{ width: 320 }}
          color="danger"
          invertedColors
          orientation="vertical"
          size="md"
          variant="soft"
        >
          <div>
            <Typography level="title-lg">
              ESTRATEGIAS PEDAGOGICAS PARA EL DESARROLLO DEL PENSAMIENTO
            </Typography>
            <Typography level="body-sm">14 Nov 2023</Typography>
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
            <img src={logoSena} srcSet={logoSena} loading="lazy" alt="" />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body-xs">
                El servicio Nacional de Aprendizaje SENA
              </Typography>
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
                href={certificado_estrategias_pedagogicas}
                target='_blank'
              >
                Certificado
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card
          sx={{ width: 320 }}
          color="danger"
          invertedColors
          orientation="vertical"
          size="md"
          variant="soft"
        >
          <div>
            <Typography level="title-lg">
              DISEÑO DE SOLUCIONES DE INTERNET DE LAS COSAS
            </Typography>
            <Typography level="body-sm">29 Sep 2023</Typography>
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
            <img src={logoSena} srcSet={logoSena} loading="lazy" alt="" />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body-xs">
                El servicio Nacional de Aprendizaje SENA
              </Typography>
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
                href={certificado_iot}
                target='_blank'
              >
                Certificado
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

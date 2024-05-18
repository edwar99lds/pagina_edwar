import React, { useState, useRef, useEffect } from "react";
import "./Inicio.css";
import { useNavigate } from "react-router-dom";
import { Typography2 } from "@mui/material";

//import * as React from 'react';
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

import edwar1 from "../../resource/edwar1.jpeg";
import edwar2 from "../../resource/edwar2.jpeg";
import edwar_video from "../../resource/edwar_video.mp4";

/**
 *
 * @returns
 */
function Inicio() {
  return (
    <div>
      <div className="App">
        <div className="contenedor_titulo_inicio">
          <h1 className="titulo_inicio">Bienvenido</h1>
          <h3 className="descripcion_inicio">
            Página de Edwar Andrés Marín Morales.
          </h3>
        </div>
      </div>
      <Box
        component="ul"
        sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
      >
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
          <CardCover>
            <img
              src={edwar1}
              srcSet={edwar2}
              loading="lazy"
              alt=""
            />
          </CardCover>
          <CardContent>
            <Typography
              level="body-lg"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              Image
            </Typography>
          </CardContent>
        </Card>
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
          <CardCover>
            <video
              autoPlay
              loop
              muted
              poster={edwar1}
            >
              <source
                src={edwar_video}
                type="video/mp4"
              />
            </video>
          </CardCover>
          <CardContent>
            <Typography
              level="body-lg"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              Video
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default Inicio;

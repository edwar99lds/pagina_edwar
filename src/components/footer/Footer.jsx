import * as React from 'react';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SendIcon from '@mui/icons-material/Send';

import logo_edwar from "../../resource/logo_edwar2.png";
import logo_edwar_gamer from "../../resource/logo_edwar_gamer.png";

export default function Footer() {
  return (
    <Sheet
      variant="solid"
      color='danger'
      invertedColors
      sx={{
        ...('danger' !== 'neutral' && {
          bgcolor: `${'danger'}.800`,
        }),
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: 'sm' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Divider orientation="vertical" />
        <IconButton variant="soft">
          <FacebookRoundedIcon />
        </IconButton>
        <IconButton variant="soft">
          <GitHubIcon />
        </IconButton>
        <IconButton variant="soft">
          <YouTubeIcon />
        </IconButton>
        <IconButton variant="soft">
          <InstagramIcon />
        </IconButton>
        <IconButton variant="soft">
          <XIcon />
        </IconButton>
        <IconButton variant="soft">
          <SportsEsportsIcon />
        </IconButton>
        <Input
          variant="soft"
          placeholder="Escribe tu correo"
          type="email"
          name="email"
          endDecorator={
            <IconButton variant="soft" aria-label="subscribe">
              <SendIcon />
            </IconButton>
          }
          sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
        />
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Card
          variant="soft"
          size="sm"
          sx={{
            flexDirection: { xs: 'row', md: 'column' },
            minWidth: { xs: '100%', md: 'auto' },
            gap: 1,
          }}
        >
          <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{ flexBasis: { xs: 200, md: 'initial' } }}
          >
            <img alt="" src={logo_edwar}/>
          </AspectRatio>
          <CardContent>
            <Typography level="body-sm">Edwar Marin</Typography>
            <Typography level="body-xs">Logo</Typography>
          </CardContent>
          
        </Card>
        <Card
          variant="soft"
          size="sm"
          sx={{
            flexDirection: { xs: 'row', md: 'column' },
            minWidth: { xs: '100%', md: 'auto' },
            gap: 1,
          }}
        >
          <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{ flexBasis: { xs: 200, md: 'initial' } }}
          >
            <img alt="" src={logo_edwar_gamer}/>
          </AspectRatio>
          <CardContent>
            <Typography level="body-sm">edwar2marin</Typography>
            <Typography level="body-xs">Logo Gamer</Typography>
          </CardContent>
          
        </Card>
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
        >
          <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Servicios</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Página Web</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Blog</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Productos</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Joy UI</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Material UI</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Sheet>
  );
}
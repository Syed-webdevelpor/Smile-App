import React from "react";
import {
  Container,
  Hidden,
  useMediaQuery,
  SwipeableDrawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { logo } from "./SmallComponents/Images";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#000000 !important",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
});

export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const matches1 = useMediaQuery("(max-width:1279px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display="flex" justifyContent="center">
        <img width="150px" src={logo} alt="" />
      </Box>
      <List>
        {["About", "Services", "Roadmap", "FAQ", "Statistic"].map(
          (text, index) => (
            <ListItem
              button
              style={{
                justifyContent: "center",
              }}
              key={text}
            >
              <ListItemText
                style={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#ffffff",
                }}
                primary={text}
              />
            </ListItem>
          )
        )}
      </List>
    </div>
  );
  return (
    <>
      <Box
        sx={{
          background: "transparent",
        }}
        height="92px"
        width="100%"
        py={2}
      >
        <Container maxWidth="xl">
          <Box
            display="flex"
            justifyContent={{ xs: "space-between", md: "space-around" }}
            alignItems="center"
          >
            <Hidden mdUp>
              <IconButton>
                <SearchIcon
                  style={{
                    fontSize: "38px",
                    cursor: "pointer",
                    color: "#000000",
                  }}
                />
              </IconButton>
            </Hidden>
            <Hidden mdDown>
              {["left"].map((anchor) => (
                <Box
                  key={anchor}
                  display={"flex"}
                  alignItems={"center"}
                  gap={0.5}
                >
                  <Button
                    onClick={toggleDrawer(anchor, true)}
                    style={{ zIndex: 1 }}
                  >
                    <MenuIcon
                      style={{
                        fontSize: "38px",
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    />
                  </Button>
                  <Typography variant="subtitle2">Offer</Typography>
                  <Paper>
                    <SwipeableDrawer
                      classes={{ paper: classes.paper }}
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}
                    </SwipeableDrawer>
                  </Paper>
                </Box>
              ))}
              <Typography variant="subtitle2">Sustainability</Typography>
            </Hidden>
            <Box component={"img"} width="80px" src={logo} alt="" />

            <Hidden mdDown>
              <Typography variant="subtitle2">Damage</Typography>
              <Typography variant="subtitle2">Smile App</Typography>
            </Hidden>

            <Hidden mdUp>
              {["left"].map((anchor) => (
                <Box key={anchor}>
                  <Button
                    onClick={toggleDrawer(anchor, true)}
                    style={{ zIndex: 1 }}
                  >
                    <MenuIcon
                      style={{
                        fontSize: "38px",
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    />
                  </Button>
                  <Paper>
                    <SwipeableDrawer
                      classes={{ paper: classes.paper }}
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}
                    </SwipeableDrawer>
                  </Paper>
                </Box>
              ))}
            </Hidden>
          </Box>
          {/* </Box> */}
        </Container>
      </Box>
    </>
  );
}

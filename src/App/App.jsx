import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import KitchenIcon from '@material-ui/icons/Kitchen';
import Box from '@material-ui/core/Box';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
import Stock from '../Stock/Stock';

const appbarWidth = 120;
const navHeight = 65;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 200,
  },
  appBar: {
    height: navHeight,
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    width: appbarWidth,
    backgroundColor: '#bbdefb',
  },
  listItemTitle: {
    textColor: 'white',
  },
  content: {
    flex: 1,
    position: 'absolute',
    top: navHeight,
    left: appbarWidth,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Box display="flex">
      <AppBar display="flex" position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            gropor
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <Drawer
          display="flex"
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
          variant="permanent"
        >
          <Toolbar elevation={3} />
          <List>
            <ListItem>
              <RestaurantMenuIcon />
              <ListItemText>
                <Link to="/recipes">Recipes</Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <KitchenIcon />
              <ListItemText>
                <Link to="/stock">Stock</Link>
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
        <Card display="flex" className={classes.content}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/recipes" />} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/stock" component={Stock} />
          </Switch>
        </Card>
      </Router>
    </Box>
  );
}

export default App;

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KitchenIcon from '@material-ui/icons/Kitchen';
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
    display: 'block',
    position: 'absolute',
    top: navHeight,
    left: appbarWidth,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <div>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              gropor
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
          variant="permanent"
        >
          <Toolbar elevation={3} />
          <Router>
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
          </Router>
        </Drawer>
      </div>
      <Paper display="block" className={classes.content}>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/recipes" />} />
            <Route path="/recipes">
              <Recipes />
            </Route>
            <Route path="/stock">
              <Stock />
            </Route>
          </Switch>
        </Router>
        <p>test</p>
      </Paper>
    </div>
  );
}

export default App;

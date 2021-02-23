import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import KitchenIcon from '@material-ui/icons/Kitchen';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
import Stock from '../Stock/Stock';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 200,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    width: 200,
    backgroundColor: '#bbdefb',
  },
  listItemTitle: {
    textColor: 'white',
  },
}));

function App() {
  const classes = useStyles();
  return (
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
        <Toolbar />
        <div>
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
        </div>
      </Drawer>
      <Router>
        <Switch>
          <Route path="/recipes">
            <Recipes />
          </Route>
          <Route path="/stock">
            <Stock />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

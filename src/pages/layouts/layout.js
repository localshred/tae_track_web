import PropTypes from 'prop-types'
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone'
import CssBaseline from '@material-ui/core/CssBaseline'
import DateRangeIcon from '@material-ui/icons/DateRange'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import GroupIcon from '@material-ui/icons/Group'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link, Match } from '@reach/router'
import Routes from 'src/routes'

const Layout = ({ classes, children }) => (
  <div className={classes.root}>
    <CssBaseline />
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <Typography variant='h6' color='inherit' noWrap>
          {process.env.REACT_APP_PRODUCT_NAME}
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <List>
        <NavItem
          text='Students'
          to='/students'
          matchPath='/students*'
          icon={<GroupIcon />}
          classes={classes}
        />
        <Divider />
        <NavItem
          text='Contacts'
          to='/contacts'
          matchPath='/contacts*'
          icon={<ContactPhoneIcon />}
          classes={classes}
        />
        <Divider />
        <NavItem
          text='Lessons'
          to='/lessons'
          matchPath='/lessons*'
          icon={<DateRangeIcon />}
          classes={classes}
        />
      </List>
    </Drawer>
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Routes />
    </main>
  </div>
)

Layout.propTypes = {
  classes: PropTypes.object.isRequired
}

const drawerWidth = 240

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  navLink: {
    textDecoration: 'none'
  },
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar
})

const NavItem = props => (
  <Match path={props.matchPath}>
    {({ match }) => (
      <Link to={props.to} title={props.text} className={props.classes.navLink}>
        <ListItem button selected={!!match}>
          <ListItemIcon>{props.icon}</ListItemIcon>
          <ListItemText primary={props.text} />
        </ListItem>
      </Link>
    )}
  </Match>
)

NavItem.propTypes = {
  classes: PropTypes.object.isRequired,
  matchPath: PropTypes.string,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default withStyles(styles)(Layout)

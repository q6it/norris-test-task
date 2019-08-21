import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function About(props) {
console.log("TCL: About -> props", props)
  
  const classes = useStyles();

  return (
    <div className="About">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Typography variant="h4" className={classes.title}>
                Should be text about me??? Srly ??
              </Typography>
              <p className="text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, ducimus dolore! Quod tempore magnam, sint quaerat amet facilis esse sunt culpa. Repellat atque incidunt, sit provident illum vel quae. Porro.
                Sunt facere omnis fuga aut unde explicabo quisquam blanditiis cupiditate odit dolores doloribus harum, at dolore perferendis quasi dolorum itaque. Suscipit temporibus culpa iusto! Dolore, unde? Sint corrupti dicta minima.
                Sequi in nesciunt, delectus culpa repellendus nostrum ex eaque corrupti! Est necessitatibus natus omnis rem rerum totam voluptatum. Delectus ut optio recusandae debitis est cupiditate veniam ipsam commodi modi iure.
                Quae in eos, veniam itaque earum consequatur beatae! Illum corporis, beatae dignissimos a perferendis saepe laborum, ea incidunt veniam dolorum cumque odio commodi nobis voluptatem architecto minus qui expedita alias.
                Odio maiores error laboriosam nisi a expedita rem at sint tenetur voluptates sunt dignissimos facere ex, eveniet aut asperiores alias laudantium voluptatibus possimus molestiae provident dolore libero sapiente dolorum. Saepe!
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
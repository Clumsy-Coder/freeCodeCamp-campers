import React from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

import Campers from "./campers";

const styles = {
	root: {
		width: "100%"
	}
};

class root extends React.Component {
	render() {
		let { classes } = this.props;
		return (
			<div className={classes.root}>
				<Typography variant="headline" align="center">
					freeCodeCamp Campers
				</Typography>
				<Grid item xs={12}>
					<Campers />
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(root);

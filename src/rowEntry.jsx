import React from "react";
import { withStyles } from "material-ui/styles";
import { TableRow, TableCell } from "material-ui/Table";
import Avatar from "material-ui/Avatar";
import Link from "material-ui-icons/Link";
import Button from "material-ui/Button";

const styles = theme => ({
	root: {
		width: "100%",
	},
	button: {
		margin: theme.spacing.unit,
		textTransform: "none",
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	icon: {
		marginLeft: "10px",
	},
	cell: {
		paddingLeft: "0px",
	},
});

class row extends React.Component {
	render() {
		let data = this.props.data;
		let { classes } = this.props;
		return (
			<TableRow hover={true}>
				<TableCell>
					<Avatar alt="profile image" src={data.img} />
				</TableCell>
				<TableCell className={classes.cell}>
					<Button
						className={classes.button}
						href={`https://www.freecodecamp.com/${data.username}`}
						target="_blank">
						{data.username}
						<Link className={classes.icon} color="action" />
					</Button>
				</TableCell>
				<TableCell numeric={true}>{data.recent}</TableCell>
				<TableCell numeric={true}>{data.alltime}</TableCell>
			</TableRow>
		);
	}
}

export default withStyles(styles)(row);

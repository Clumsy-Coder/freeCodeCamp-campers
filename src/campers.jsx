import React from "react";
import { withStyles } from "material-ui/styles";
import Table, {
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import axios from "axios";
import _ from "lodash";

import RowEntry from "./rowEntry";

const styles = theme => ({
	root: {
		width: "100%",
		marginTop: theme.spacing.unit * 3,
		overflowX: "auto",
	},
	cell: {
		paddingLeft: "0px",
	},
});

class campers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recent: [], // top 100 campers from last 30 days
			alltime: [], // top 100 campers of all time
			direction: "desc",
			orderBy: "recent", // recent or alltime
		};

		this.sortData = this.sortData.bind(this);
	}

	async componentWillMount() {
		const recent = await axios.get(
			"https://fcctop100.herokuapp.com/api/fccusers/top/recent",
		);
		const alltime = await axios.get(
			"https://fcctop100.herokuapp.com/api/fccusers/top/alltime",
		);
		this.setState({
			recent: recent.data,
			alltime: alltime.data,
		});
	}

	sortData(column) {
		let dir = this.state.direction === "asc" ? "desc" : "asc";
		this.setState({
			orderBy: column,
			direction: dir,
		});
	}

	render() {
		let { classes } = this.props;
		let { orderBy, direction } = this.state;
		let data =
			orderBy === "recent" ? this.state.recent : this.state.alltime;

		data = _.orderBy(data, orderBy, direction);

		return (
			<Paper className={classes.root}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow selected={true}>
							<TableCell />
							<TableCell>Name</TableCell>
							<TableCell numeric={true}>
								<TableSortLabel
									active={orderBy === "recent"}
									direction={direction}
									onClick={() => this.sortData("recent")}>
									Recent
								</TableSortLabel>
							</TableCell>
							<TableCell numeric={true}>
								<TableSortLabel
									active={orderBy === "alltime"}
									direction={direction}
									onClick={() => this.sortData("alltime")}>
									All time
								</TableSortLabel>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((user, i) => {
							return <RowEntry data={user} key={i} />;
						})}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

export default withStyles(styles)(campers);

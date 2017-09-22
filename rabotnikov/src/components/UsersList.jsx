import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Card, { CardContent, CardActions } from 'material-ui/Card';

export default ({ users }) => (
	<Card>
		<CardContent>
			<List>
				{users.map(user => (
					<ListItem key={user.name} button>
						<ListItemText primary={user.name} />
						<ListItemText primary={user.age} />
					</ListItem>
				))}
			</List>
		</CardContent>
	</Card>
);

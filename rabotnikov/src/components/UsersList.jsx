import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Card, { CardContent, CardActions } from 'material-ui/Card';


export default ({ users }) => (
	<Card>
		<CardContent>
			<List>
				{users.map(user => (
					<ListItem key={user.key} button>    {
						/*ключ извлекается из свойства объекта пользователя, 
						который у всех уникальный, основанный на текущей длине массива(см. App), 
						таким образом, это не будет вносить ограничения на добавление пользователей на страницу  */
						}
						<ListItemText primary={user.name} />
						<ListItemText primary={user.age} />
					</ListItem>
				))}
			</List>
		</CardContent>
	</Card>
);

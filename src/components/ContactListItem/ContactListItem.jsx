import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { ListContactItem } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, deleteContact }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={deleteContact} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <ContactPhoneIcon />
        </Avatar>
      </ListItemAvatar>
      <ListContactItem primary={name} secondary={number} />
    </ListItem>
  );
};

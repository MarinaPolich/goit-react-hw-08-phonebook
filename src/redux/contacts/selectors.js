// import { createSelector } from '@reduxjs/toolkit';

// export const getAllContacts = state => state.contacts.items;

// export const getIsLoading = state => state.contacts.isLoading;

// export const getError = state => state.contacts.error;

export const getFilter = state => state.filter;

// export const getFilterContacts = createSelector(
//   [getAllContacts, getFilter],
//   (contacts, filter) => {
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );

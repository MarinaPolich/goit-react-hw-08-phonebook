export const getAllContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilterContacts = state =>
  state.contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(state.filter.toLowerCase())
  );

export const getFilter = state => state.filter;

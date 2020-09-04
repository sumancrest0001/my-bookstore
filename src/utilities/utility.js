const category = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const bookStatus = ['brand new', 'used'];
const updateHomePageStore = availableBooks => {
  const shuffled = availableBooks.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 6);
  return selected;
};

export { category, bookStatus, updateHomePageStore };

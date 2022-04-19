export const getItemFromSs = (itemName: string) => {
  const itemJSON = sessionStorage.getItem(itemName);
  if (itemJSON) {
    try {
      const item = JSON.parse(itemJSON);
      return item;
    } catch (err) {}
  }
};

export const setItemToSs = (itemName: string, content: any) => {
  const itemJSON = JSON.stringify(content);
  sessionStorage.setItem(itemName, itemJSON);
};

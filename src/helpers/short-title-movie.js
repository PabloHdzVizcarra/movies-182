export const shortTitleMovie = (title) => {
  let newTitle;
  if (title.length < 20) {
    return title;
  } else {
    newTitle = title.slice(0, 19).concat("...");

    return newTitle;
  }
};

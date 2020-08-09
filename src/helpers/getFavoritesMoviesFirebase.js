import { db } from "../libs/firebase";

export const getFavoritesMoviesFirebase = async (uid) => {
  let allFavoritesMovies = [];

  await db
    .collection(uid)
    .doc("movies")
    .collection("favorites")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        allFavoritesMovies.push({
          ...doc.data(),
        });
      });
    });

  return allFavoritesMovies;
};

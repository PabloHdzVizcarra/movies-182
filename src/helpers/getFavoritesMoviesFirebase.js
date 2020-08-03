import { db } from '../libs/firebase';

export const getFavoritesMoviesFirebase = async (uid) => {

  console.log(uid)
  let allFavoritesMovies = [];

  await db.collection(uid).doc('movies').collection('favorites')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        
        allFavoritesMovies.push({
          id: doc.id,
          ...doc.data()
        })
        
      })
    })
  
  return allFavoritesMovies;
}
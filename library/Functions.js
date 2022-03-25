import axios from 'axios'

export const getUserFromDB = (user) => {
  const data = axios
    .get(`http://localhost:3000/api/users/${user.email}`)
    .then((result) => {
      return result.data[0]
    })
    .catch((error) => {
      console.log('Error: ', error)
    })
  return data
}

// Adds course to user's favorites List
export const addFavorite = (user, course, subject) => {
  axios
    .post(`http://localhost:3000/api/users/${user.email}/watchlist`, {
      course: course,
      Subj: subject,
    })
    .catch((error) => {
      console.log(error)
    })
}

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

export const getWatchlist = async (user) => {
  await axios.get(`http://localhost:3000/api/users/${user.email}/watchlist`)
}

export const addFavorite = async (user, subject, course) => {
  await axios
    .post(`http://localhost:3000/api/users/${user.email}/watchlist`, {
      course: course,
      Subj: subject,
    })
    .catch((error) => {
      console.log(error)
    })
}
export const deleteFavorite = async (user, subject, course) => {
  await axios.delete(
    `http://localhost:3000/api/users/${user.email}/watchlist/${subject}/${course}`
  )
}
export const addTaken = async (user, subject, course) => {
  await axios
    .post(`http://localhost:3000/api/users/${user.email}/takenlist`, {
      course: course,
      Subj: subject,
    })
    .catch((error) => {
      console.log(error)
    })
}
export const deleteTaken = async (user, subject, course) => {
  await axios.delete(
    `http://localhost:3000/api/users/${user.email}/takenlist/${subject}/${course}`
  )
}

import axios from 'axios'

export const createUser = (user) => {
  if (user != undefined) {
    axios
      .get(`http://localhost:3000/api/users/${user.email}`)
      .then((result) => {
        if (result.data.length == 0) {
          const newUser = {
            name: user.name,
            email: user.email,
            watchlist: [],
            takenlist: [],
          }

          axios.post(`http://localhost:3000/api/users`, newUser)
        }
      })
  }
}

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
  //todo add more semesters
  const semesters = ['stp_202220', 'stp_202230', 'stp_202240']
  semesters.forEach((semester) => {
    axios
      .patch(
        `http://localhost:3000/api/courses/${semester}/${subject}/${course}`,
        {
          op: 'add',
        }
      )
      .catch((error) => {
        console.log(error)
      })
  })
}
export const deleteFavorite = async (user, subject, course) => {
  await axios.delete(
    `http://localhost:3000/api/users/${user.email}/watchlist/${subject}/${course}`
  )
  //todo add more semesters
  const semesters = ['stp_202220', 'stp_202230', 'stp_202240']
  semesters.forEach((semester) => {
    axios
      .patch(
        `http://localhost:3000/api/courses/${semester}/${subject}/${course}`,
        {
          op: 'subtract',
        }
      )
      .catch((error) => {
        console.log(error)
      })
  })
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
export const findValueInSection = (section, sectionLevelFilters, query) => {
  let returnVal = false
  sectionLevelFilters.forEach((filter) => {
    if (section[filter] === query[`sectionData.${filter}`]) {
      returnVal = true
    }
  })
  return returnVal
}

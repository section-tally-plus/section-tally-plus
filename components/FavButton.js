import React, { useContext, useState, useEffect } from 'react'
import tw, { styled } from 'twin.macro'
import { addFavorite, deleteFavorite, getWatchlist } from '../library/Functions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import AppContext from './AppContext'

const Button = styled.button(({ isInWatchlist }) => [
  isInWatchlist && tw`text-yellow-400`,
])
//todo make favorites update for every course
const FavButton = ({ courseNum, subject, favorites, ...rest }) => {
  const { user, watchlist, setWatchlist } = useContext(AppContext)

  const [isInWatchlist, setIsInWatchlist] = useState(
    watchlist?.filter(
      (course) => course.course === courseNum && course.Subj === subject
    ).length > 0
  )
  const [localFavorites, setLocalFavorites] = useState(favorites)
  useEffect(() => {
    setIsInWatchlist(
      watchlist?.filter(
        (course) => course.course === courseNum && course.Subj === subject
      ).length > 0
    )
  }, [watchlist])

  return (
    <>
      <p>Favorites: {localFavorites}</p>
      <Button
        isInWatchlist={isInWatchlist}
        {...rest}
        onClick={() => {
          if (isInWatchlist) {
            deleteFavorite(user, subject, courseNum)
            setLocalFavorites(localFavorites - 1)
            setWatchlist(
              watchlist.filter(
                (course) =>
                  course.course !== courseNum || course.Subj !== subject
              )
            )
          } else {
            setLocalFavorites(localFavorites + 1)
            addFavorite(user, subject, courseNum)
            setWatchlist([...watchlist, { Subj: subject, course: courseNum }])
          }
        }}
      >
        <FontAwesomeIcon icon={faStar} />
      </Button>
    </>
  )
}

export default FavButton

import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Avatar from 'material-ui/Avatar'
import { pinkA200 } from 'material-ui/styles/colors'
import { LARGE } from 'material-ui/utils/withWidth'
import { Route, Switch, withRouter } from 'react-router-dom'

import View from '../layout/View'
//import UserProfileContainer from './UserProfileContainer'

const PhotosList = ({ photos = [], match, history, width }) => {
 history.push(`/photos/${photos.data}`)
  let listItems

  if (photos.length === 0) {
    listItems = <View>Loading123...</View>
  } else {
    listItems = (
      <View>
        { photos.map(photo => (
          <ListItem
    //        primaryText={ `${user.name.first} ${user.name.last}`}
            leftIcon={<ActionGrade color={pinkA200} />}
        //    rightAvatar={<Avatar src={`images/${photos.username}_sm.jpg`} />}
          />
        ))}
      </View>
    )
  }

  return (
    <View style={{ display: 'flex' }}>
      <Route
        exact={width < LARGE}
        path={`${match.url}`}
        render={() => listItems }
      />
    </View>
  )
}

export default PhotosList

PhotosList.propTypes = {
  photos: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired
}

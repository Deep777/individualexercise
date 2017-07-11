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

const Photos = ({ photos = [], match, history, width }) => {

  let listItems

  if (photos.length === 0) {
    listItems = <View>Loading...</View>
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

export default Photos

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired
}

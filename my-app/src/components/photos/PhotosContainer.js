import React, { Component } from 'react'
import withWidth from 'material-ui/utils/withWidth'

import PhotosList from './PhotosList'
import { fetchPhotos } from '../../api/photosdata'

class PhotosContainer extends Component {
  constructor() {
    super()
    this.state = {
      photos: []
    }
  }
  componentDidMount() {
    fetchPhotos()
    .then((data) => {
        this.setState({ photos: data })
    }).catch((err)=> {
        console.log(err)
    })
  }

  render() {
    return (
      <PhotosList
        photos={this.state.photos}
        match={this.props.match}
        history={this.props.history}
      />
    )
  }
}

export default withWidth()(PhotosContainer)

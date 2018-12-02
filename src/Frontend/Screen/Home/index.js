import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { actionsType } from 'common/ReduxConstants'
import { RouteKey } from 'common/GlobalConstants'

import { connect } from 'react-redux'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    this.props.fetchData()
  }

  render () {
    return (
      <View>
        <Text> Home Screen </Text>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  dataState: state.dataState
})
const mapactionsTypeToProps = (dispatch) => ({
  fetchData: () => dispatch({ type: actionsType.FETCH_DATA, payload: { data: [], isLoading: true } }),
  updateData: (data) => dispatch({ type: actionsType.UPDATE_DATA_SUCCESS, payload: data }),
  gotoDetail: (data) => dispatch({ type: actionsType.PUSH, routeName: RouteKey.Detail, params: { data } })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(Home)

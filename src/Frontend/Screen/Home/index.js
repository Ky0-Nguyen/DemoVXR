import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { actionsType } from 'common/ReduxConstants'
import { connect } from 'react-redux'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    this.props.fetchData()
    console.log('dataState', this.props.dataState)
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
  fetchData: () => dispatch({ type: actionsType.FETCH_DATA, payload: { data: [], isLoading: true } })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(Home)

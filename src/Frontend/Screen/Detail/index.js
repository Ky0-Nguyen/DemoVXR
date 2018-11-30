import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import CoreHeader from 'frontend/Container/CoreHeader'
import { connect } from 'react-redux'

import { actionsType } from 'common/ReduxConstants'

class Detail extends PureComponent {
  render () {
    return (
      <CoreHeader title={'Detail'} leftAction ={() => this.props.pop()}>
        <View style={styles.container}>

        </View>
      </CoreHeader>

    )
  }
}
const mapStateToProps = (state) => ({
  dataState: state.dataState
})
const mapactionsTypeToProps = (dispatch) => ({
  pop: () => dispatch({ type: actionsType.POP })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(Detail)

export const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

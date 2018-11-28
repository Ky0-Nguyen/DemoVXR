
import React, { Component } from 'react'
import {
  StyleSheet, View, Text
} from 'react-native'
import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

import { width, height, COLORS } from 'utils/globalStyles'
import { actionsType } from 'utils/reduxConstants'

class SplashScreenRN extends Component {
  componentDidMount () {
    SplashScreen.hide()
    setTimeout(
      () =>
        this.props.checkAuthen()
      , 1000
    )
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}> { 'VXR' }  </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
})
const mapactionsTypeToProps = (dispatch) => ({
  checkAuthen: () => dispatch({ type: actionsType.CHECK_AUTHEN })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(SplashScreenRN)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width(100),
    height: height(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BACKGROUND_COLOR
  },
  txt: {
    alignSelf: 'center'
  }
})

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, WebView, TouchableOpacity, Linking } from 'react-native'
import CoreHeader from 'frontend/Container/CoreHeader'
import { connect } from 'react-redux'
import { width, height } from 'common/GlobalStyles'
import { CachedImage } from 'react-native-img-cache'
import Image from 'react-native-image-progress'
import ProgressBar from 'react-native-progress/Bar'
import { actionsType } from 'common/ReduxConstants'
import Ionicons from 'react-native-vector-icons/Ionicons'
const icHeard = <Ionicons name={'ios-heart'} color={'#111111'} size={height(5)}/>
const icHeardTo = <Ionicons name={'ios-heart-empty'} color={'#111111'} size={height(5)}/>

class Detail extends PureComponent {
  render () {
    const item = this.props.navigation.getParam('item', {})
    const func = this.props.navigation.getParam('func', {})
    return (
      <CoreHeader title={'Detail'} leftAction ={() => this.props.pop()}>
        <View style={styles.container}>
          <Text style={styles.txtTitle}>{item.title && item.title}</Text>
          <View style={styles.contContent}>
            <WebView
              originWhitelist={['*']}
              source={{ html: item.description }}
              style={styles.contentItem}
            />
          </View>
          <View style={styles.contBototm}>
            <View style={styles.contBottomLeft}>
              <TouchableOpacity onPress={() => Linking.openURL(item.company_url)}>
                <Text style={styles.txtURL}>{ item.company_url && 'View our company page >>' }</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contBottomRight}>
              <TouchableOpacity onPress={func}>
                {
                  item.saved
                    ? icHeard
                    : icHeardTo
                }
              </TouchableOpacity>
              <CachedImage
                component={Image}
                source={{
                  uri: item.company_logo
                }}
                indicator={ProgressBar}
                style={styles.imgItem} resizeMode={'stretch'}/>
            </View>
          </View>

        </View>
      </CoreHeader>

    )
  }
}
const mapStateToProps = (state) => ({
  dataState: state.dataState
})
const mapactionsTypeToProps = (dispatch) => ({
  pop: () => dispatch({ type: actionsType.POP }),
  updateData: (data) => dispatch({ type: actionsType.UPDATE_DATA_SUCCESS, payload: data })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(Detail)

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width(3),
    paddingVertical: height(2)
  },
  txtTitle: {
    color: 'blue',
    fontSize: width(6)
  },
  contContent: {
    marginTop: 20,
    width: width(94),
    height: height(40)
  },
  contentItem: {
    width: width(94),
    height: height(30)
  },
  imgItem: {
    height: height(12),
    width: width(35),
    alignSelf: 'flex-end',
    marginTop: height(2)
  },
  contBototm: {
    flexDirection: 'row',
    width: width(94),
    justifyContent: 'space-between'
  },
  txtURL: {
    color: 'blue',
    fontSize: width(3.5),
    textDecorationLine: 'underline'
  },
  contBottomLeft: {
    flex: 1,
    paddingVertical: height(2)
  },
  contBottomRight: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'transparent'
  }
})

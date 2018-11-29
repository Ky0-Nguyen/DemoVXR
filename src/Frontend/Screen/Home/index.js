import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, Image, WebView, TouchableOpacity } from 'react-native'

import { actionsType } from 'common/ReduxConstants'
import { RouteKey } from 'common/GlobalConstants'
import { width, height } from 'common/GlobalStyles'

import CoreHeader from 'frontend/Container/CoreHeader'

import { connect } from 'react-redux'

import AntDesign from 'react-native-vector-icons/AntDesign'

const icHeard = <AntDesign name={'heart'} color={'#111111'} size={height(5)}/>
const icHeardTo = <AntDesign name={'hearto'} color={'#111111'} size={height(5)}/>
class Home extends Component {
  async componentDidMount () {
    this.props.fetchData()
  }

  _onSaved = (items) => {
    this.props.dataState.data.map(item => {
      if (item.id === items.id) {
        item.company = items.company
        item.company_logo = items.company_logo
        item.company_url = items.company_url
        item.created_at = items.created_at
        item.description = items.description
        item.how_to_apply = items.how_to_apply
        item.id = items.id
        item.location = items.location
        item.title = items.title
        item.type = items.type
        item.url = items.url
        item.saved = !items.saved
      }
    })
    this.props.updateData(this.props.dataState.data)
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.contItem}>
        <View style={styles.contTop}>
          <View style={styles.contItemHeader}>
            <Text style={styles.txtTitleItem}>{item.title && item.title}</Text>
          </View>
          <View style={styles.contItemHeard}>
            <TouchableOpacity onPress={() => { this._onSaved(item) }}>
              {
                item.saved
                  ? icHeard
                  : icHeardTo
              }
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contBottom}>
          <View style={styles.contLeft}>
            <View style={styles.contItemSubHeader}>
              <Text style={styles.txtWork}>{item.company && item.company}</Text>
              <Text style={styles.txtLocation}>{item.location && item.location}</Text>
            </View>
            <View style={styles.contItemContent}>
              <WebView
                originWhitelist={['*']}
                source={{ html: item.description }}
                style={styles.contentItem}
                scrollEnabled={false}
              />
            </View>
          </View>
          <View style={styles.contRight}>
            <Image source={{ uri: item.company_logo }} style={styles.imgItem} resizeMode={'stretch'}/>
          </View>
        </View>
      </View>
    )
  }

  render () {
    const { dataState } = this.props
    return (
      <CoreHeader title={'Home Screen'}>
        <View style={styles.container}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={dataState.data}
            extraData={this.props}
            renderItem={this._renderItem}
          />
        </View>
      </CoreHeader>
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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: height(2)
  },
  contItem: {
    width: width(90),
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1,
    borderRadius: 8,
    marginTop: height(2),
    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2

  },
  contTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contLeft: {
    width: width(66),
    paddingHorizontal: width(2),
    paddingVertical: height(1)
  },
  contRight: {
    width: width(20),
    justifyContent: 'center',
    alignItems: 'center'
  },
  contItemHeader: {
    width: width(66),
    paddingHorizontal: width(2)
  },
  contItemHeard: {
    width: width(20),
    justifyContent: 'center',
    alignItems: 'center'
  },
  contItemSubHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  contItemContent: {

  },
  contentItem: {
    width: width(66),
    height: height(10),
    marginTop: 20
  },
  txtTitleItem: {
    color: 'blue',
    fontSize: width(6)
  },
  txtWork: {
    color: '#C3C3C3',
    fontSize: width(4),
    width: width(41)
  },
  txtLocation: {
    color: '#C3C3C3',
    fontSize: width(4),
    width: width(25),
    textAlign: 'right'
  },
  imgItem: {
    height: height(7),
    width: width(20)

  }
})


import React from 'react'
import { Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { width, height } from 'common/GlobalStyles'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

const ISIOS = Platform.OS === 'ios'

// Ionicons
export const arrowRight = <Ionicons name='ios-arrow-round-forward' size={width(9)} color={'white'} />
export const iconDeposit = <Ionicons name='ios-download-outline' size={width(7)} color={'white'} />
export const iconWidthdraw = <Ionicons name='ios-share-outline' size={width(7)} color={'white'} />
export const iconDepositActive = <Ionicons name='ios-download-outline' size={width(7)} color={'#008E85'} />
export const checkmarkExchangeActive = <Ionicons color='#008E85' name='ios-checkmark' size={width(9)} />
export const iconSwap = <Ionicons name={'ios-swap-outline'} size={width(7)} color={'white'} />
export const iconSwapActive = <Ionicons name={'ios-swap-outline'} size={width(7)} color={'#008E85'} />
export const arrowDownExchange = <Ionicons name='ios-arrow-round-down' size={width(8)} color={'white'} />
export const iconBack = <FontAwesome name='angle-left' size={width(10.5)} color={'#111111'} />
export const checkmarkExchange = <Ionicons color='white' name='ios-checkmark' size={width(9)} />
export const checkmark = <Ionicons color='white' name='ios-checkmark' size={height(9)} />
export const restoreKey = <Ionicons color='#393836' name='ios-key' size={height(5)} />
export const iconClose = <Ionicons name='ios-close' color={'white'} size={height(8)} style={{ top: height(0.3) }} />
export const icClose = <Ionicons name={ISIOS ? 'md-close-circle' : 'ios-close'} size={height((ISIOS ? 4 : 6))} color={'white'} />
export const iconArrowDropdown = <Ionicons name={'md-arrow-dropdown'} size={height(3)} color={'white'} style={{ marginLeft: -width(3) }} />
export const icCopyAddr = <Ionicons name='ios-copy' size={height(4)} color='white' />
export const iconAdd = <Ionicons name={'md-add'} size={width(7)} color={'white'} />

// EvilIcon
export const icQuestion = <EvilIcons name={'question'} color={'white'} size={height(4)} />
export const icSearch = <EvilIcons name={'search'} color={'white'} size={height(5)} />
export const iconTrashInfo = <EvilIcons name='trash' size={height(5)} color={'black'} />
export const iconSearch = <EvilIcons name={'search'} color={'white'} size={height(5)} />

// MaterialCommunityIcons
export const icMenuDown = <MaterialCommunityIcons size={height(2.5)} color={'#FFFFFF'} name={'menu-down'} />
export const icMenuRight = <MaterialCommunityIcons size={height(2.5)} color={'#FFFFFF'} name={'menu-right'} />

// MaterialIcons
export const arrowDown = <MaterialIcons name='arrow-drop-down' size={height(6)} color='white' />
export const arrowUp = <MaterialIcons name='arrow-drop-up' size={height(6)} color='white' />

// FontAwesome
export const iconQrCode = <FontAwesome name='qrcode' size={height(4)} color={'black'} />
export const iconCopy = <FontAwesome name='copy' size={height(4)} color={'black'} />

// SimpleLineIcons
export const iconNote = <SimpleLineIcons name='note' size={height(4)} color={'black'} />
export const iconQuestion = <SimpleLineIcons name='question' size={height(5)} color={'white'} />

export const icRight = <Entypo name='chevron-thin-right' size={width(8)} color={'#C3C3C3'} />
export const icRightSmall = <Entypo name='chevron-thin-right' size={width(5)} color={'#C3C3C3'} />
export const icDown = <Entypo name='chevron-thin-down' size={width(5)} color={'#C3C3C3'} />

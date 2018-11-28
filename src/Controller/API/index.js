import { Alert } from 'react-native'
import { BaseURL } from 'common/GlobalConstants'
import { get } from 'controller/API/baseAPI'

export default class ServerApi {
  /** -------------------------------------
  * @method - getData
  * @param -
  * @author - Nguyen Tuan / 2018-11-28 16:23:09
  * @description description
  * --------------------------------------- */
  static getData = async () => {
    const url = BaseURL + `/places`
    const body = null
    const header = {}
    return get(url, body, header)
  }
  /**
  * showAlert
  */
  static showAlert = async (title = '', message = '') => {
    setTimeout(() => Alert.alert(title, message), 0)
  }
}

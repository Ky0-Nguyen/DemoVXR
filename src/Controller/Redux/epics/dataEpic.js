
import { Observable } from 'rxjs'
import ServerAPI from 'controller/API'
import { actionsType, TIME_OUT, ttError, strMessageTimeout, statusCode } from 'common/ReduxConstants'

export default (action$) => {
  const fetchRooms$ = action$.ofType(actionsType.FETCH_DATA).switchMap((action) => {
    return Observable.concat(
      Observable.fromPromise(ServerAPI.getData()) // Call api
        .takeUntil(Observable.timer(TIME_OUT)) // Set timeout
        .takeUntil(action$.ofType(actionsType.CANCEL_FETCHING_DATA)) // Listen cancel action
        .mergeMap((response) => { // Process data response
          if (response) {
            if (response.status === statusCode.CODE_200) { // Ok
              return Observable.concat(
                Observable.of({ type: actionsType.FETCH_DATA_SUCCESS, payload: response.data })
              )
            } else { // Err
              return Observable.concat(
                Observable.of({ type: actionsType.FETCH_DATA_FAIL })
              )
            }
          } else { // Err timeout
            ServerAPI.showAlert(ttError, strMessageTimeout)
            return Observable.concat(
              Observable.of({ type: actionsType.FETCH_DATA_FAIL })
            )
          }
        })
    )
  })

  return Observable.merge(
    fetchRooms$
  )
}

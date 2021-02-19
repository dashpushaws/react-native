// action creator: 이파일 명칭
// dispatch는 action creator를 호출하는 거였다
export const addAction = payload => (
  // action: 리턴하는 값들
  {
  type: 'ADD_ACTION',
  payload // << payload: payload,
}
)

export const removeAction = payload => ({
  type: 'REMOVE_ACTION',
  payload
})
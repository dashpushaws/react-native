import { combineReducers } from 'redux'
import actions from './actions'

                    // combind 여러 리듀서들을 합침. 그림보면 작은 R들을 합함
                    // dispatcher가 호출하는 리듀서는 이 합쳐진 리듀서
                    // Actions가 보내온 객체의 type을 각 리듀서의 switch문의 case와 비교 하여 어떤 리듀스를 사용
                    //할지 결정하는듯
const rootReducer = combineReducers({
  actions,// 우리는 1개의 리듀서만 가지고 짜기 때문에 1개
          // 여러 리듀서가 있으면 각각의 모든 리듀서의 switch문을 다 대조함
// actions2 << 또 다른 작은 리듀서. 
// state에서 호출시 이 명칭을 사용
// 각 리듀서마다 state는 따로 가지며 독립적.


})

export default rootReducer;





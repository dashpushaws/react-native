// 액션목록을 제어하는 리듀서 파일. actions.js. 액션 목록 제어 리듀서
// feed.js, todo.js 같은  현재 파일 
// 상태제어흐름도의 Actions x

// 리듀서
// dispatcher에서 state의 현재state, action의 리턴객체를 reducer로 넘김
// const 리듀서이름 = (현재state, 리턴객체) => {
//  switch.... case....문으로 action의 타입에 따라서 state를 제어
// 리듀서는 state와 객체를 받아서 처리 후 변경할 state를 넘겨주는 일을 한다 
//  return 변경할state
//}


// 리듀서 구조. (state, action). (state = [], action): 액셕목록 제어하므로 [](배열)로 초기화
// state가 1개라면 {}일테지만, 여러개이므로 배열[]이고, 초기화는 빈배열로
const actions = (state = [], action) => { 
  
  switch (action.type) { // action의 type별로 상태제어하기 위해 switch문 이용
    case 'ADD_ACTION':  //액션목록에 item을 추가 한다
      
    // 구조: return 변경할 state
    // 현재 state를 복사하여 새로 만듦. 원래 state 변경x
      return [ 
        // state 배열 요소들을 카피
        ...state, // 원래 배열의 요소목록을 카피. state로  [{}, {}] 였다면 ...state -> {}, {}가 들어간다
        
        // payload 객체 카피.    객체카피 배열카피 
        {
          ...action.payload // payload={x:"", y:"", ...} 속성이 여러개였는지 1개였는지 확인
          // action.payload는 list.js의 객체 배열에서[{}, {}, ..], 선택된 1개의 객체 {id, title, ...}이고
          // ...action.payload는 속성값들  id:"", title:"", ... 이것들이다
        }
      ]



    case 'REMOVE_ACTION':
      return [
        ...state.filter(item => item.id != action.payload)
      ]
    default:
      return state // 별다른 액션이 없으면 원래 state를 리턴
  }
}

export default actions
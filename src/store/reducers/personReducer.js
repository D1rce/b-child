import * as actionTypes from '../actions/person';

// 初始化人的列表
const initState = [{ name: 'tom', age: 18 }];

export default function personReducer(preState = initState, action) {
    // console.log('personReducer@#@#@#');
    const { type, data } = action;
    switch (type) {
        case actionTypes.ADD_PERSON: // 若是添加一个人
            // preState.unshift(data) //此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了。
            return [data, ...preState];
        default:
            return preState;
    }
}

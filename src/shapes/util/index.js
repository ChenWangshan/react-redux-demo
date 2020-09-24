
// actionTypes集合，防止团队其它成员，声明同样的actionType
const actionTypes = [];

/**
 * 根据actionType和参数生成 actionCreator
 * @param {*} type 
 * @param  {...any} argNames 
 */
export function makeActionCreator(type) {
    // 该 actionType 已经存在了
    if (actionTypes.includes(type)) {
        throw new Error(`${type}已经存在了，请更换其它actionType`);
    } 

    // 存入集合中
    actionTypes.push(type);

    return function(payload) {
        const action = {
            creator: true,  // 是否使用makeActionCreator函数的标志
            type,
            payload
        };

        return action;
    }
}
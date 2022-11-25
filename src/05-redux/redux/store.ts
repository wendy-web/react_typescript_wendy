import { createStore } from "redux";
interface IAction {
    type: string,
    payload?: any
}
const reducer:any = (prevState = {
    isShow: true
}, actions:IAction) => {
    const {type} = actions;
    const newState = {...prevState};
    switch(type) {
        case 'show':
            newState.isShow = true;
            return newState;
        case 'hide':
            newState.isShow = false;
            return newState;
        default:
            return prevState;
    }
}
const store = createStore(reducer);
export default store;
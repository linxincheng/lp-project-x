interface CounterReducerAction {
  type: 'add' | 'set';
  preload?: number
}
export default function counterReducer(state = 0, action: CounterReducerAction) {
  switch(action.type) {
    case 'add':
      return state + 1;
    case 'set':
      return action.preload;
    default:
      return state;
  }
}
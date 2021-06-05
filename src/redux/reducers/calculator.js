import {
  INPUT_NUMBER,
  PLUS,
  MINUS,
  MULTIPLY,
  DIVIDE,
  EQUAL,
  CLEAR,
} from "../actions/types";

const initialAppState={
  inputValue: 0,
  operator: "",
  resultValue: 0,
  calculate: false,
  showingResult: false,
}

export const calculator = (state = initialAppState, action) => {
  switch (action.type) {
    case INPUT_NUMBER:
      return {
        ...state,
        inputValue: state.inputValue * 10 + action.number,
        showingResult: false,
      };

    case PLUS:
      // 演算子が押されたときの処理
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '+',
          resultValue: state.resultValue + state.inputValue,
          showingResult: true,
        };
      } // 1回も演算子が押されていないときの処理
      else {
        return {
          ...state,
          inputValue: 0,
          operator: '+',
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case MINUS:
      // 演算子が押されたときの処理
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '-',
          resultValue: state.resultValue - state.inputValue,
          showingResult: true,
        };
      } // 1回も演算子が押されていないときの処理
      else {
        return {
          ...state,
          inputValue: 0,
          operator: '-',
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case MULTIPLY:
      // 演算子が押されたときの処理
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '*',
          resultValue: state.resultValue * state.inputValue,
          showingResult: true,
        };
      } // 1回も演算子が押されていないときの処理
      else {
        return {
          ...state,
          inputValue: 0,
          operator: '*',
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case DIVIDE:
      // 演算子が押されたときの処理
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '/',
          resultValue: state.resultValue / state.inputValue,
          showingResult: true,
        };
      } // 1回も演算子が押されていないときの処理
      else {
        return {
          ...state,
          inputValue: 0,
          operator: '/',
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case CLEAR:
      return {
        inputValue: 0,
        operator: '',
        calculate: true,
        resultValue: 0,
        showingResult: false,
      };

    case EQUAL:
      switch (state.operator) {
        case '+':
          return {
            inputValue: state.resultValue + state.inputValue,
            operator: '',
            calculate: false,
            resultValue: state.resultValue + state.inputValue,
            showingResult: true,
          };
        case '-':
          return {
            inputValue: state.resultValue - state.inputValue,
            operator: '',
            calculate: false,
            resultValue: state.resultValue - state.inputValue,
            showingResult: true,
          };
        case '*':
          return {
            inputValue: state.resultValue * state.inputValue,
            operator: '',
            calculate: false,
            resultValue: state.resultValue * state.inputValue,
            showingResult: true,
          };
        case '/':
          return {
            inputValue: state.resultValue / state.inputValue,
            operator: '',
            calculate: false,
            resultValue: state.resultValue / state.inputValue,
            showingResult: true,
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default calculator;
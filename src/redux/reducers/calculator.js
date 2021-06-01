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
    showingResult:false,
}
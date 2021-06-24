import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    onNumberClick,
    onPlusClick,
    onMinusClick,
    onMultiplyClick,
    onDivideClick,
    onEqualClick,
    onClearClick
} from '../redux/actions'
import { Button } from '../components/Button';
import { Result } from '../components/Result';
import '../App.scss';

const Calculator = (props) => {
    const { calculator,
        onNumberClick,
        onPlusClick,
        onMinusClick,
        onMultiplyClick,
        onDivideClick,
        onEqualClick,
        onClearClick
    } = props;

    const [history,setHistory] = useState(["1+1=2","2+2=4"]);
    return (
        <React.Fragment>
            <div className="result">
                <Result result={
                    calculator.showingResult
                        ? calculator.resultValue
                        : calculator.inputValue
                } />
            </div>
            <div className="button-wrapper">
                <div className="number">
                    <div className="upper">
                        <Button text={'7'} onClick={()=>onNumberClick(7)}/>
                        <Button text={'8'} onClick={()=>onNumberClick(8)}/>
                        <Button text={'9'} onClick={()=>onNumberClick(9)}/>
                    </div>
                    <div className="middle">
                        <Button text={'4'} onClick={()=>onNumberClick(4)}/>
                        <Button text={'5'} onClick={()=>onNumberClick(5)}/>
                        <Button text={'6'} onClick={()=>onNumberClick(6)}/>
                    </div>
                    <div className="lower">
                        <Button text={'1'} onClick={()=>onNumberClick(1)}/>
                        <Button text={'2'} onClick={()=>onNumberClick(2)}/>
                        <Button text={'3'} onClick={()=>onNumberClick(3)}/>
                    </div>
                    <div className="bottom">
                        <Button text={'0'} onClick={()=>onNumberClick(0)}/>
                        <Button text={'AC'} onClick={()=>onClearClick()}/>
                        <Button text={'='} onClick={()=>onEqualClick()}/>
                    </div>
                </div>
                <div className="operator">
                        <Button text={'÷'} onClick={()=>onDivideClick()}/>
                        <Button text={'×'} onClick={()=>onMultiplyClick()}/>
                        <Button text={'-'} onClick={()=>onMinusClick()}/>
                        <Button text={'+'} onClick={()=>onPlusClick()}/>
                    </div>
            </div>
            <div>
                <p>計算の履歴</p>
                <ul>
                    {history.map((log) => {
                        return (
                            <div key={log}>
                                <li>{log}</li>
                                <button>削除</button>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </React.Fragment>
    );
};

const mapStateToDoProps = (state) => {
    return {
        calculator: state.calculator,
    }
}

export default connect(mapStateToDoProps, {
    onNumberClick,
    onPlusClick,
    onMinusClick,
    onMultiplyClick,
    onDivideClick,
    onEqualClick,
    onClearClick
})(Calculator);
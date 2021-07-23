import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';

import {
  onNumberClick,
  onPlusClick,
  onMinusClick,
  onMultiplyClick,
  onDivideClick,
  onEqualClick,
  onClearClick,
} from "../redux/actions";
import { Button } from "../components/Button";
import { Result } from "../components/Result";
import { db, auth } from "../firebase/index";
import "../App.scss";

const Calculator = (props) => {
  const {
    calculator,
    onNumberClick,
    onPlusClick,
    onMinusClick,
    onMultiplyClick,
    onDivideClick,
    onEqualClick,
    onClearClick,
  } = props;

  const [history, setHistory] = useState([]);

  const equalFunction = (props) => {
    onEqualClick();
    // DBに新たなデータを追加する
    const data = {
      title: props.history,
      dateTime: new Date(),
    }
    db.collection("history").doc().set(data);
    history.push(data);
  }

  // 最初に過去の履歴をDBから取得して表示させる
  useEffect(() => {
    let list = [];
    (async () => {
      await db.collection("history")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            list.push(doc.data());
          });
        });
      setHistory(list)
    })();
  }, []);

  // ログアウト機能
  const History = useHistory();
  const handleLogout = () => {
    auth.signOut();
    History.push('/login');
  };

  // ログインしないで電卓画面へいこうとすると、ログイン画面へリダイレクトさせる
  // firebase.auth().onAuthStateChanged(function (user) {
  //   if (!user) {
  //     return (<Redirect to="/login" />);
  //   } else {
  //   }
  // });
  return (
    <React.Fragment>
      {/* <p>{user.user.displayName + "さんでログインしています"}</p> */}
      <button onClick={handleLogout}>ログイン画面へ</button>
      <div className="result">
        <Result
          result={
            calculator.showingResult
              ? calculator.resultValue
              : calculator.inputValue
          }
        />
      </div>
      <div className="button-wrapper">
        <div className="number">
          <div className="upper">
            <Button text={"7"} onClick={() => onNumberClick(7)} />
            <Button text={"8"} onClick={() => onNumberClick(8)} />
            <Button text={"9"} onClick={() => onNumberClick(9)} />
          </div>
          <div className="middle">
            <Button text={"4"} onClick={() => onNumberClick(4)} />
            <Button text={"5"} onClick={() => onNumberClick(5)} />
            <Button text={"6"} onClick={() => onNumberClick(6)} />
          </div>
          <div className="lower">
            <Button text={"1"} onClick={() => onNumberClick(1)} />
            <Button text={"2"} onClick={() => onNumberClick(2)} />
            <Button text={"3"} onClick={() => onNumberClick(3)} />
          </div>
          <div className="bottom">
            <Button text={"0"} onClick={() => onNumberClick(0)} />
            <Button text={"AC"} onClick={() => onClearClick()} />
            <Button
              text={"="}
              history={history}
              onClick={() => equalFunction(calculator)}
            />
          </div>
        </div>
        <div className="operator">
          <Button text={"÷"} onClick={() => onDivideClick()} />
          <Button text={"×"} onClick={() => onMultiplyClick()} />
          <Button text={"-"} onClick={() => onMinusClick()} />
          <Button text={"+"} onClick={() => onPlusClick()} />
        </div>
      </div>
      <div>
        <p>計算の履歴</p>
        <ul>
          {/* 履歴を表示させる */}
          {history.map((history, index) => (
            <li key={index}>{history.title}</li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

const mapStateToDoProps = (state) => {
  return {
    calculator: state.calculator,
  };
};

export default connect(mapStateToDoProps, {
  onNumberClick,
  onPlusClick,
  onMinusClick,
  onMultiplyClick,
  onDivideClick,
  onEqualClick,
  onClearClick,
})(Calculator);

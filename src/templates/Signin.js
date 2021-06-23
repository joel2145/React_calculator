import React from 'react';
import firebase from 'firebase/app';
import '../App.scss';
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Signin = () => {

    const signInWithGoogle = () => {
        // Googleプロバイダオブジェクトのインスタンスを作成
        const provider = new firebase.auth.GoogleAuthProvider()
        // ポップアップウィンドウでログインを行う場合はsignInWithPopupを呼び出す
        // const dispatch = useDispatch();
        firebase.auth().signInWithPopup(provider)
        .then(user => {
            alert("success : " + user.user.displayName + "さんでログインしました");
            window.location.href = '/';
        })
        .catch(error => {
            alert(error.message);
        });
    }
    return (
            <div>
                <div className="login">
                    <h1>ログイン</h1>
                </div>
                <div className="signin_button">
                    <img src="../btn_google_signin_dark_normal_web.png" onClick={()=>signInWithGoogle()} alt="google signin"/>
                </div>
            </div>
        );
}

export default Signin;
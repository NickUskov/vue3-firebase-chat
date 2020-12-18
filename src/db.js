import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyBaWEkBXicn0RfDphoweMU6Uq95EyS-HTo",
    authDomain: "firevuechat-f4a53.firebaseapp.com",
    projectId: "firevuechat-f4a53",
    storageBucket: "firevuechat-f4a53.appspot.com",
    messagingSenderId: "230919545000",
    appId: "1:230919545000:web:1a859afda69ceeb501e29d"
}

const db = firebase.initializeApp(config)
export default db
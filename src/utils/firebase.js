// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';

import {getFirestore,getDoc,setDoc,doc,collection,writeBatch,query,getDocs} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0uh2htALPSO1B5xULUXUYX9x25NkV0Ig",
    authDomain: "e-commerce-af351.firebaseapp.com",
    projectId: "e-commerce-af351",
    storageBucket: "e-commerce-af351.appspot.com",
    messagingSenderId: "562437852758",
    appId: "1:562437852758:web:2b82fa1765194c656c75f7"
};

// Initialize Firebase
const firbaseApp = initializeApp(firebaseConfig);

const provider =new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:'select_account'
})

export const auth = getAuth();

export const signInWithGoogle = ()=> signInWithPopup(auth,provider);

export const db = getFirestore();
//below function is to log the user in firestore
export const createUserDocFromAuth = async(userAuth,other={})=>{
    const userRef = doc(db,'users',userAuth.uid);
    
    const userSnapShot = await getDoc(userRef);
    
    if(!userSnapShot.exists()){
        const {displayName,email} = userAuth;
        
        try{
            await setDoc(userRef,{
                createdAt: new Date(),
                displayName,
                email,
                ...other
            })
        }catch(error){
            console.log('error in creating user',error)
        }
    }
    return userRef;
};
//below function is to sign in from existing user in firebae auth
export const signInWithEmailPassword = async(email,password)=>{
    const rsp = await signInWithEmailAndPassword(auth,email,password)
    return rsp;
}
//below function is to add new user to firebase auth
export const createUserWithEmailPassword = async(email,password)=>{
    const rsp = await createUserWithEmailAndPassword(auth,email,password)
    return rsp;
}
// below is sign out function to sign out from firebase auth
export const signOutFn =async()=>{
    await signOut(auth);
}

export const onAuthStateChangedListner = (callback) =>{
    onAuthStateChanged(auth,callback)
};

//below function is use to upload categories on firestore
export const addColloctionAndDocumensts =async(collectionKey,objectToAdd)=>{
    const collectionRef = collection(db,collectionKey );
    const batch = writeBatch(db);

    objectToAdd.forEach(obj=>{
        const docRef = doc(collectionRef,obj.title.toLowerCase())
        batch.set(docRef,obj)
    });
    await batch.commit();
    console.log('uploaded')
};

//getting categories data from firetore
export const getCategoriesAndDocuments=async()=>{
    const collectionRef = collection(db,'categories')
    const q = query(collectionRef)

    const querySnapShot = await getDocs(q)
    
    const categoriesMap = querySnapShot.docs.reduce((acc,current)=>{
        const {title,items} = current.data()
        acc[title.toLowerCase()] = items
        return acc;
    },{})
    
    return categoriesMap;
}
import { cert,initializeApp,getApps,App, getApp} from 'firebase-admin/app';
import {getAuth} from 'firebase-admin/auth'

const verifyIdToken = (token:string) => {
    const app = getApps().length ? getApp() : initializeApp({
        credential:cert({clientEmail:process.env.FIREBASE_CLIENT_EMAIL,
            privateKey:process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
            projectId:process.env.FIREBASE_PROJECT_ID})
    })
    return getAuth().verifyIdToken(token)
}


export {verifyIdToken}
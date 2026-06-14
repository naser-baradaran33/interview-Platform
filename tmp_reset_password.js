const admin = require('firebase-admin');
(async ()=>{
  try{
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g,'\n') : undefined;
    if(!projectId || !clientEmail || !privateKey){
      console.error(JSON.stringify({error:'missing_service_account_envs'}));
      process.exit(2);
    }
    admin.initializeApp({credential: admin.credential.cert({projectId, clientEmail, privateKey})});
    const email='adinamoha22@gmail.com';
    const newPassword='18008277';
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().updateUser(user.uid, {password: newPassword});
    console.log(JSON.stringify({success:true, uid:user.uid}));
  }catch(e){
    console.error(JSON.stringify({error: e.message}));
    process.exit(1);
  }
})();

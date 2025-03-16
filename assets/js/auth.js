 const firebaseConfig = {
 apiKey: "{{ site.API_KEY }}",
 authDomain: "{{ site.AUTH_DOMAIN }}",
 databaseURL: "{{ site.DATABASE_URL }}",
 projectId: "{{ site.PROJECT_ID }}",
 storageBucket: "{{ site.STORAGE_BUCKET }}",
 messagingSenderId: "{{ site.SENDER_ID }}",
 appId: "{{ site.APP_ID }}",
 measurementId: "{{ site.MEASUREMENT_ID }}"
};
firebase.initializeApp(firebaseConfig);const auth=firebase.auth();const userSignedOutDiv=document.getElementById('user-signed-out');const userSignedInDiv=document.getElementById('user-signed-in');const userDisplayName=document.getElementById('user-display-name');const userEmail=document.getElementById('user-email');const signOutButton=document.getElementById('sign-out-button');function toggleUI(){if(auth.currentUser){userDisplayName.textContent=auth.currentUser.displayName;userEmail.textContent=auth.currentUser.email}else{location.href="{{site.baseurl}}/"}
if(firebase.auth().currentUser.photoURL){document.querySelector('#userImg').src=firebase.auth().currentUser.photoURL}}
signOutButton.addEventListener('click',()=>{auth.signOut()});auth.onAuthStateChanged(user=>{toggleUI()});

if (window.PublicKeyCredential) {
    console.log("WebAuthn didukung di browser ini!");
} else {
    console.log("WebAuthn tidak didukung di browser ini.");
};
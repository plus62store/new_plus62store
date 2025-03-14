    const firebaseConfig = {
    apiKey: "{{ site.API_KEY }}",
    authDomain: "{{ site.AUTH_DOMAIN }}",
    databaseURL: "{{ site.DATABASE_URL }}",
    projectId: "{{ site.PROJECT_ID }}",
    storageBucket: "{{ site.STORAGE_BUCKET }}",
    messagingSenderId: "{{ site.SENDER_ID }}",
    appId: "{{ site.APP_ID }}",
    measurementId: "{{ site.MEASUREMENT_ID }}"
    };firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  const protectedPages = [
    "{{site.baseurl}}/LoggedIn",
    "{{site.baseurl}}/akun",
    "{{site.baseurl}}/product/"
  ];

  if (!user && protectedPages.includes(window.location.pathname)) {
    window.location.href = "{{site.baseurl}}/";
  }
});
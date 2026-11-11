// Configuration Firebase (projet revente-psg). Ces valeurs sont publiques par conception :
// la protection vient des comptes (mot de passe) et des règles Firestore.
window.PSG_CONFIG = {
  FIREBASE: {
    apiKey: "AIzaSyDi01h-M_Gs8ir4eAV694GPExCVSVpGjqE",
    authDomain: "revente-psg.firebaseapp.com",
    projectId: "revente-psg",
    storageBucket: "revente-psg.firebasestorage.app",
    messagingSenderId: "1021107889469",
    appId: "1:1021107889469:web:1edc868b5d88ed2e795154"
  },
  // Un compte par personne, créé dans Firebase Authentication (même e-mail, un mot de passe différent chacun).
  USERS: [
    { name: "Rachid",  email: "rachid@psg-revente.fr" },
    { name: "Sylvain", email: "sylvain@psg-revente.fr" }
  ],
  // Commission du club sur une revente, en % (sert à pré-remplir quand on laisse le champ vide).
  COMMISSION: 12
};

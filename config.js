// Configuration publique de l'application (aucun secret ici : ces valeurs Firebase web sont publiques).
// La sécurité repose sur l'authentification et sur les règles Firestore.
window.APP_CONFIG = {
  firebase: {
    apiKey: "AIzaSyDi01h-M_Gs8ir4eAV694GPExCVSVpGjqE",
    authDomain: "revente-psg.firebaseapp.com",
    projectId: "revente-psg",
    storageBucket: "revente-psg.firebasestorage.app",
    messagingSenderId: "1021107889469",
    appId: "1:1021107889469:web:1edc868b5d88ed2e795154"
  },
  // Commission du club sur la revente (12 % constatés sur toutes les ventes). Modifiable sur chaque vente.
  commissionRate: 0.12,
  // Saison : du 1er août au 31 juillet. Année fiscale : année civile de la vente.
  saisonDebutMois: 8
};

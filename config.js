// Configuration publique de l'application (aucun secret ici).
// Les valeurs Firebase se trouvent dans : Firebase > Paramètres du projet > Vos applications > Configuration.
window.APP_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  // Commission du club sur la revente (12 % constatés sur toutes les ventes). Modifiable sur chaque vente.
  commissionRate: 0.12,
  // Saison : du 1er août au 31 juillet. Année fiscale : année civile de la vente.
  saisonDebutMois: 8
};

# Revente PSG : suivi des reventes de places d'abonnement

Application privée pour suivre la revente de places d'abonnement (Paris Saint-Germain), les prix conseillés et les ventes encaissées. Utilisée à deux, depuis n'importe où. Projet indépendant de « Revente PFC » : dépôt, projet Firebase et données séparés.

## Règles de calcul

- Net d'une vente = prix de la vente − commission du club (12 % constatés, modifiable vente par vente).
- Une vente porte sur 1 ou 2 places (la paire est vendue ensemble la plupart du temps).
- « Par personne » = total net ÷ 2 pour une paire vendue à deux.
- Saison du 1er août au 31 juillet ; une vente compte dans la saison de son match. Année fiscale = année civile de la date de la vente.
- Une vente est liée à son match par `matchId`.
- Qui doit quoi à qui s'affiche dans l'appli seulement, jamais dans un mail ni une notification.

## Données (Firebase, plan gratuit)

- `psg_matches` : un document par match à domicile (statut, prix de départ, paliers de baisse).
- `psg_config/main` : grille de prix, dernière vérification, clé web push.
- `psg_config/ventes` : les ventes (`v`) et les virements entre les deux personnes (`t`).
- `psg_config/abonnements` : un abonnement par personne (prix, saison, places).
- `psg_config/push` : appareils qui reçoivent les notifications.

Une vente contient : `matchId`, nombre de places, prix, commission, net, qui a encaissé, règlement du club (versé / en attente), origine de la donnée (billetterie ou saisie manuelle) et auteur de la saisie.

## Sécurité

- Authentification Firebase par e-mail et mot de passe, 2 comptes, inscription libre désactivée.
- `firestore.rules` limite la lecture et l'écriture aux 2 adresses. C'est une copie de référence : il faut la coller dans la console Firebase, elle ne se déploie pas toute seule.
- Aucun secret, aucune adresse e-mail ni coordonnée dans ce dépôt public.

## Limites connues

- L'ouverture d'une revente est notée à la main (un clic) : la billetterie est derrière une connexion personnelle et ne peut pas être surveillée automatiquement.
- Les ventes importées portent la date du match, pas celle de la vente.
- Le push web sur iPhone exige que l'appli soit installée sur l'écran d'accueil.

## Feuille de route

1. Base : dépôt, règles de sécurité, configuration.
2. Cœur : matchs, statuts, prix et paliers, enregistrement des ventes.
3. Finances : encaissements, règlement du club, bilans, export Excel.
4. Fiabilité : hors connexion, sauvegarde et restauration.
5. Alertes : mail et push quotidiens.

Annuler une modification : ouvrir le commit concerné sur GitHub, puis « Revert ».

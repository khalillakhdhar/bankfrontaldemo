# planification:
## model: 
utilisateur , role, compte , transaction
utilisateur : many compte et many roles
compte: plusieurs transactions
transaction: emetteur et recepteur (nullable)
## service:
 crud endpoint 
 ## Auth guard : 
 sécuriser les accés aux modules: client et admin (par existance du token+ verification de role)
 ### interceptors:
 une couche d'interception qui envoie le token du localstorage au backend avec chaque demande
 # modules:
 1- auth module (login) module + routage
 2- admin: 
      a- user: gestion des utilisateurs  verouillage des comptes supression recherche chat avec le user (consultation de profile details)
      b- transaction: supervision et annulation (changement d'état) fraud passage de transaction (historique indiv)
      c- comptes: association des comptes au utilisateurs la desactivation le filtrage (historique individuel)
      d-gestion profile: update profile
3- client:
  a- gestion profile: update ou delete profile
  b-consultation et historique du comptes
  c-historique indiv
  d-passage de transaction
# page layout :
header+ (menu)
footer : fixe
## standalones:

footer
update profile

historique indiv (transaction + compte)
stats: user, transaction , compte







# zoo-api

## Présentation
Zoo Api est une api qui permet la gestion des événements, des animeaux et des clients du zoo.
Commencer à prendre l'application en main : http://localhost:3000/api-docs/

## Arborescence
- L'utilisateur de Zoo Api va effectuer une requête sur une route, exemple : "/api/animal".
- L'application va faire un appel au controller pour exécuter la fonction concernant la route.
  Dans notre cas, on appelle "getAll" dans le controller "animal.controller".
  La fonction appellée précédement va récupèrer les données de la "request" si il y en a besoin.
- Puis il va envoyer les données qu'il a récupéré au "listener" pour éxécuter les appels à la base
  de données.
  Le "listener" va par la suite renvoyer au "controller" le résultat et par la suite le "controller" va donc retourner une "response" avec le résultat qui lui a été confié.
   

## Register / Login
- Register :
  Pour l'enregistrement on demande à l'utilisateur un "login" et un "password".
  Si les deux sont remplis on créer un nouveau "user".
  On utilise Bcrypt pour encrypter le mot de passe.
- Login :
  Pour la connexion on vérifie d'abord si le "login" envoyé dans la "request" existe dans la base de données. Si c'est le cas on envoie le "user" à la suite de notre processus.
  Puis on utilise également Bcrypt qui permet de vérifier le mot de passe envoyé dans la "request" à celui du mot de passe présent dans la base de données.
  Si la connexion a bien pu avoir lieu on génère un token via JWT Web Token. Ainsi il va transformer les données de l'utilisateur qu'on lui a donné en token valide.
  On utilise également cookie-parser, qui lui va permettre de passer notre token de connexion dans nos cookies.
  Et par la suite les routes sécurisées vont, avant leur exécution, passer par "authentificate" notre "Middleware" (Le middleware permet d'exécuter du code avant que la requête ne se termine).
  Ainsi on peut vérifier si dans les cookies nous avons notre "token". Si c'est le cas on peut donc exécuter la route.


## Modules

### dotenv

https://github.com/motdotla/dotenv
Permet de gérer des variables d'environnement depuis les fichiers .env, cela permet de séparer les configs du code. On peut gérer différentes variables d'environnement suivant l'environnement sur lequel on se situe prod, test, developement.

## ERREURS

### Erreur Cookie
Problème : Il était impossible de récupérer le cookie comportant le "token".
Solution : Installer "cookie-parser" et l'initialiser dans notre "index.js", puis faire l'appel suivant => "app.use(cookieParser());".

### Passer de require a import

https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import

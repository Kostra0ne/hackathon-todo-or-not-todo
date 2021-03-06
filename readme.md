# JS Frameworks War : Todo or not Todo ?!!

### Objectif : Réaliser une application client/server/bdd de TodoList


Grâce à votre application, l'utilisateur pourra :

- **Créer** des listes de tâches à faire (TodoLists)
- **Associer** des tâches à une liste (Todos)
- **Marquer** une tâche comme "is_done"
- **Trier** les tâches


![](https://i.giphy.com/B7o99rIuystY4.gif)
  

## Model

- Connecter à une base de données mongodb
- Modéliser les documents TodoList et Todo avec mongoose

- Exemple de Todo :

  - _id: ObjectId
  - text: String
  - priority: Number
  - is_done: Boolean
  - bonus -> date_created: Date

- Exemple de TodoList :

  - _id: ObjectId
  - nom: String
  - todos: [ ObjectId(Todo) ]


## Controller

- Utiliser express pour définir vos routers

## Views

- Choisir entre React et Vue pour réaliser le frontend
- **Soigner** l'intégration de votre application en terme d'**UI/UX**

![](https://i.giphy.com/VhWVAa7rUtT3xKX6Cd.gif)

## Code quality

Mettez en oeuvre tout votre savoir faire et votre inventivité pour rendre l'application
fonctionnelle et agréable à utiliser. Le code sera fourni sur github. 
Vous êtes libres d'ajouter des fonctionnalités.


Go simplon !!!


## Equipes

- Il y a deux clans : React et View
- Chaque clan est composé de tribus de 3 codeur.se.s au maximum
- Etape 1 : Répartition de la promo par clan
- Etape 2 : Répartition en tribus
- Etape 3 : Briefing de tribu : planning, répartition des tâches, trello, etc.
- Etape 4 : Code !
- Etape 5 : Présentations

![](https://i.giphy.com/13HgwGsXF0aiGY.gif)


## 17h00 : Présentations !

Chaque équipe disposera de 5 minutes chrono pour présenter son travail. Prévoyez un support de présentation.

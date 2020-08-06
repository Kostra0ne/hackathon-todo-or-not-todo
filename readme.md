# Hackathon du 07/08/2020

## JS Frameworks War : Todo or not Todo ?!!

### Objectif : Réaliser une application client/server/bdd de TodoList


Grâce à votre application, l'utilisateur pourra :

- **Créer** des listes de tâches à faire (TodoLists)
- **Associer** des tâches à une liste (Todos)
- **Marquer** une tâche comme "is_done"
- **Trier** les tâches

https://media.giphy.com/media/B7o99rIuystY4/giphy.gif

[![](https://i.giphy.com/e2AKpOvx2MREY.gif)](https://www.youtube.com/watch?v=04MJIXcZKPk)

[![](https://i.giphy.com/B7o99rIuystY4.gif)](https://www.youtube.com/watch?v=04MJIXcZKPk)

[![](https://i.giphy.com/j2wpZyLy2s70ul4TKo.gif)](https://www.youtube.com/watch?v=04MJIXcZKPk)


## Model

- Connecter à une base de données mongodb
- Modéliser les documents TodoList et Todo avec mongoose

- Chaque document Todo aura à **minima** les propriétés suivantes:

  - _id: ObjectId
  - text: String
  - priority: Number
  - is_done: Boolean
  - bonus -> date_created: Date

- Chaque TodoList aura à **minima** les propriétés suivantes:
  - _id: ObjectId
  - nom: String
  - todos: [ ObjectId(Todo) ]


## Controller

- Utiliser express pour définir vos routers

## Views

- Choisir entre React et Vue pour réaliser le frontend
- **Soigner** l'intégration de votre application en terme d'**UI/UX**
- Les views seront **responsives**
- On aura la possibilité de:
  -- Créer une nouvelle TodoList
  -- Associer un Todo à une TodoList
  -- Trier les Todos d'une TodoList par priority
  -- Trier les Todos d'une TodoList par is_done
  -- Passer le status is_done d'une tâche de false à true

## Code quality

Vous mettrez en oeuvre tout votre savoir faire et votre inventivité pour rendre l'application
fonctionnelle et agréable à utiliser. Vous êtes libres d'ajouter des fonctionnalités.

Go simplon !!!

## Equipes

- Il y a deux clans : React et View
- Chaque clan est composé de tribus de 3 codeur.se.s au maximum
- Etape 1 : Répartition de la promo par clan
- Etape 2 : Répartition en tribus
- Etape 3 : Briefing de tribu : planning, répartition des tâches, trello, etc.
- Etape 4 : Code !
- Etape 5 : Présentations

## 17h00 : Présentations !

Chaque équipe disposera de 5 minutes chrono pour présenter son travail. Prévoyez un support de présentation.

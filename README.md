# 🏢 Système de Gestion des Employés (Frontend)

Bienvenue dans le frontend de l'application de gestion des employés. Ce projet est une application monopage (SPA) moderne construite avec **Angular 19**, offrant une interface utilisateur intuitive pour gérer les dossiers des employés de manière sécurisée et efficace.

---

## 📑 Table des matières

1. [Aperçu du projet](#-aperçu-du-projet)
2. [Fonctionnalités](#-fonctionnalités)
3. [Technologies utilisées](#-technologies-utilisées)
4. [Captures d'écran](#-captures-décran)
5. [Prérequis](#-prérequis)
6. [Installation](#-installation)
7. [Utilisation](#-utilisation)
8. [Structure du projet](#-structure-du-projet)

---

## 🔭 Aperçu du projet

Cette application sert d'interface client pour le système de gestion des employés. Elle permet aux utilisateurs authentifiés de consulter, créer, modifier et supprimer des informations sur les employés. L'application communique avec une API backend (par défaut sur `http://localhost:8080`) et gère l'authentification via des jetons JWT.

## ✨ Fonctionnalités

*   **🔐 Authentification Sécurisée** :
    *   Page de connexion pour les utilisateurs.
    *   Gestion des sessions via JWT (stockage local).
    *   Protection des routes (AuthGuard) pour empêcher l'accès non autorisé.
    *   Intercepteur HTTP pour attacher automatiquement le token aux requêtes.

*   **👥 Gestion des Employés (CRUD)** :
    *   **Liste** : Affichage tabulaire de tous les employés.
    *   **Création** : Formulaire pour ajouter un nouvel employé.
    *   **Modification** : Mise à jour des informations existantes d'un employé.
    *   **Suppression** : Retrait d'un employé de la base de données.

*   **🎨 Interface Utilisateur** :
    *   Design réactif et moderne utilisant **Bootstrap 5**.
    *   Navigation fluide entre les pages.

## 🛠 Technologies utilisées

*   **Framework** : [Angular 19](https://angular.io/)
*   **Langage** : [TypeScript](https://www.typescriptlang.org/)
*   **Style** : [Bootstrap 5](https://getbootstrap.com/)
*   **Gestion d'état & Asynchrone** : [RxJS](https://rxjs.dev/)
*   **Client HTTP** : Angular HttpClient

## 📸 Captures d'écran

### Page de Connexion
Une interface simple et sécurisée pour accéder à l'application.

![Page de Connexion](public/login.png)

### Gestion des Employés
Le tableau de bord principal permettant de visualiser et gérer la liste des employés.

![Liste des Employés](public/employee.png)

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

*   **Node.js** (version 18 ou supérieure recommandée)
*   **npm** (gestionnaire de paquets Node)
*   **Angular CLI** (`npm install -g @angular/cli`)

## 🚀 Installation

1.  **Cloner le dépôt** :
    ```bash
    git clone https://github.com/votre-utilisateur/frontend-app.git
    cd frontend-app
    ```

2.  **Installer les dépendances** :
    ```bash
    npm install
    ```

## ▶️ Utilisation

### Serveur de développement

Pour lancer le serveur de développement et voir l'application en action :

```bash
ng serve
```
Ouvrez votre navigateur et naviguez vers `http://localhost:4200/`. L'application se rechargera automatiquement si vous modifiez les fichiers sources.

### Construction (Build)

Pour construire le projet pour la production :

```bash
ng build
```
Les artefacts de construction seront stockés dans le répertoire `dist/`.

### Tests

Pour exécuter les tests unitaires via [Karma](https://karma-runner.github.io) :

```bash
ng test
```

## 📂 Structure du projet

Voici un aperçu de la structure des dossiers principaux :

```
src/
├── app/
│   ├── core/           # Gardes d'authentification et intercepteurs
│   ├── models/         # Interfaces et modèles de données (ex: Employee)
│   ├── pages/          # Composants de pages (Login, Liste, Formulaire)
│   ├── services/       # Services pour l'API et la logique métier
│   ├── app.routes.ts   # Configuration du routage
│   └── ...
├── assets/             # Images et ressources statiques
└── index.html          # Point d'entrée HTML
```

---
*Généré avec ❤️ pour le projet de Gestion des Employés.*

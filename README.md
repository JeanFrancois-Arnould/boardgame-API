# portfolio jeux de société

<description>

## Stack

- Node v14.15.4
  - Express
  - Joi
- PostgreSQL v11.7
  - Sqitch v0.9999

## documentation et test

#### doc

`http://<app_host>:<app_port>/api-docs`

#### test

`api.http`

### instalation des dépendences du projet 

```java script
npm install
```

### deploy des migrations sqitch

1 création du `.env` avec les accès pour le connecteur db

2 créé un base de donéé avec 

```java script
createdb <le-nom-de-ma-db>
```

3 faire la migration

```java script
sqitch deploy db:pg:<le-nom-de-ma-db>
```
## Introducció

En aquest exercici anem afegir noves funcionalitats utilitzant express.

<br>

## Requisits

- Primer fer un _Fork_ d'aquest repositori https://github.com/rgarciamvm/node-express-extendeduser.git
- Després clona __el teu__ repositori

## Lliurament

Una vegada finalitzat...:

```shell
$ git add .
$ git commit -m "done"
$ git push origin master
```
## Enviament

Per enviar l'exercici feu servir el classroom:

1. Heu d'enviar-me el link del vostre repositori github (exemple : https://github.com/usuari/node-express-exam2.git)
2. Heu d'enviar-me els fitxers un ZIP amb **TOT** el codi.

## S'ha de codificar

- US1 Codificar una solució per a totes les APIS que retornin només username, timestamp , grants i un message.
- US2 Codificar una API nova de nom **getFullUser** que retorni TOTS els atribut d'user (username, password, timestamp, active i grants)
- US3 Codificar una API nova que donat un objecta **dades de perfil** d'un usuari, aquestes s'afegeixin a l'usuari. Ha d'estar registrat
- US4 Codificar una solució per mostrar el avisos que té un usuari quan inicia sessió.( **login**).


## Codificar una solució totes les APIS retornin només username, timestamp , grants i un message. ( 2 punts)

 Codificar una solució que donat una crida a qualsevol API ja desenvolupada que quan ha de mostra el resultat llavors només mostri atributs públics i no pas els privats, com el password i/o si un usuari està actiu o no. Per tant, has d'aconseguir ocultar-los en la resposta.

**NOTA!!** Són també públics **grants** si l'usuari té privilegis assignats, **profiledata** si impleimplemntes la US3,  i **notices** si implementes la US4

Criteris d'Acceptació:

1. **IMPORTANT!!** no pots alterar l'objecte origen, els atributs han d'existir no els pots eliminar.
2. **IMPORTANT!!** has d'afegir un missatge **"User logged successfully"** del fitxer de **messagesusr.js**. Aquest atribut message no pertany a l'objecte user, només l'has d'afegir a la resposta.
3. Ha de retornar com a resultat, mínim: username, timestamp i grants.

```

POST http://localhost:3000/users/login
Content-Type: application/json

{
"username":"iron@dominio.es", "password":"man$Super2"
}


HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 106
ETag: W/"6a-nEj3R7sLvWf1rog5tS6zvn74rmo"
Date: Wed, 30 Mar 2022 12:21:58 GMT
Connection: close

{
  "username": "iron@dominio.es",
  "timestamp": "2022-03-30T12:08:16.948Z",
  "message": "User logged successfully"
}

``` 

## Codificar una API nova de nom **getFullUser** que retorni TOTS els atribut d'user (username, password, timestamp, active i grants) (+1 punt)

Codificar una nova API que donat un missatge HTTP POST users/user que quan ha de mostrar el resultat llavors mostri TOTS els atributs públics i privats.

Criteris d'Acceptació:

1. Ha de retornar com a resultat, mínim: username, password, timestamp, active i grants.


```
POST http://localhost:3000/users/user
Content-Type: application/json

{
"username":"aquaman@dominio.es"
}
```

ha de retornar:

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 229
ETag: W/"e5-9rT7FweAQNzLT2SxyNGHQ5pM184"
Date: Wed, 30 Mar 2022 12:30:18 GMT
Connection: close

{
  "username": "aquaman@dominio.es",
  "password": "$2b$10$NfN4rw3xoA4WyJ2tNKL4zebxNIfk9IowWvGX6SmyOeRFdKM2zS.LS",
  "timestamp": "2022-03-30T12:06:46.165Z",
  "active": 1,
  "grants": [
    "create_database",
    "create_role",
    "create_table",
    "create_view"
  ]
}
```
##  Codificar una API nova que donat un usuari i un objecta **dades de perfil** d'un usuari, aquestes s'afegeixen com un atribut nou a l'usuari, s'han de veure com a resposta de la crida. Ha d'estar registrat (2 punts)

Codificar una nova API que donat un missatge HTTP POST users/profiledata amb un usuari i un objecta **dades de perfil** quan l'acció d'afegir dades de perfil a l'usuari sigui OK llavors mostri un missatge **"Data Profile created successfully"** conjuntament amb els atributs de l'usuari.

Criteris d'Acceptació:

1. **IMPORTANT!!** has d'afegir un missatge **"Data Profile created successfully"** del fitxer de **messagesusr.js**. Aquest atribut message no pertany a l'objecte user, només l'has d'afegir a la resposta.
2.  Ha de retornar com a resultat els atributs públics + el nou atribut **profiledata**  amb les dades del perfil de l'usuari. 

Per exemple: 

```
POST http://localhost:3000/users/profiledata
Content-Type: application/json

{
"username":"flash@dominio.es", "profiledata":{
    "city":"Barcelona",
    "region":"Barcelona",
    "zip":"08032"
    }
}

```

Ha de retornar:

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 186
ETag: W/"ba-b6cSB2uUW5eG5LToQjRX4MJeEM4"
Date: Wed, 30 Mar 2022 17:01:07 GMT
Connection: close

{
  "username": "flash@dominio.es",
  "timestamp": "2022-03-30T16:59:14.036Z",
  "profiledata": {
    "city": "Barcelona",
    "region": "Barcelona",
    "zip": "08032"
  },
  "message": "Data Profile created successfully"
}

```



## Codificar una solució per mostrar els avisos que té un usuari quan inicia sessió.( **login**). (5 punts)

Codificar una solució que donat un login d'usuari quan aquest usuari tingui avisos **notices.js** llavors mostri els avisos conjuntament amb els atributs de l'usuari.

Criteris d'Acceptació:

1.  Ha de retornar com a resultat els atributs públics + el nou atribut **notices**  amb els avisos de l'usuari.

Per exemple: 

```

POST http://localhost:3000/users/login
Content-Type: application/json

{
"username":"aquaman@dominio.es", "password":"man$Super3"
}

```

Ha de retornar:

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 317
ETag: W/"13d-ObcRdDph6KqQcrJvuOTiQSb9xEI"
Date: Wed, 30 Mar 2022 12:34:47 GMT
Connection: close

{
  "username": "aquaman@dominio.es",
  "timestamp": "2022-03-30T12:06:46.165Z",
  "message": "User logged successfully",
  "notices": [
    {
      "n_notices": 2,
      "notices": [
        {
          "id": 1,
          "msg": "you have new promotions"
        },
        {
          "id": 2,
          "msg": "we have some offers that interest you"
        }
      ]
    }
  ]
}
```

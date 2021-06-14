# JSON-Server-creation
## SWBAT
- [ ] Understand How JSON server works.
- [ ] Create a JSON server from scratch
- [ ] Use POSTMAN to make CRUD requests to your JSON server


## What is a JSON server?
JSON server is a simple way to simulate a REST API

Installation 

```
npm install -g json-server
```

db.json
```
{
  "animals": [
    {
      "id": 1,
      "name": "Pangolin",
      "imageUrl": "https://i.pinimg.com/originals/bf/ff/93/bfff9395c6ae0d24534f030580924c7e.jpg",
      "description": "The Pangolin, otherwise known as the scaly anteater, is the only mammal in the world to be covered from head to toe in keratin scales (the same as human finger nails).",
      "donations": 0
    }
}

```

Start Server

```
json-server --watch db.json
Now if you go to http://localhost:3000/animals
```


/* 
cd (en dan de file die ik gestuurd heb als pad kopiëren)

docker-compose up --build -d

docker exec -it db mongosh

use db1

db.createCollection('skills') => Je zet in skills db de data die onder staat van skills

db.createCollection('project') => Je zet in project db de data die onder staat van project

db.skills.find()   (Zo kun je zien of er data in de db zit)

db.project.find()   (Zo kun je zien of er data in de db zit)

docker compose down (Als je klaar bent met verbeteren)
*/
db.createCollection('skills')
db.createCollection('project')

db.skills.insertMany([
    {
        name: 'HTML',
        level: 7.5,
        category: 'IT'
      },
      {
        name: 'CSS',
        level: 7,
        category: 'IT'
      },
      {
        name: 'JavaScript',
        level: 7,
        category: 'IT'
      },
      {
        name: 'C#',
        level: 6,
        category: 'IT'
      },
      {
        name: 'SQL',
        level: 6.5,
        category: 'IT'
      },
      {
        name: 'Python',
        level: 7,
        category: 'IT'
      }
    ])

    db.project.insertMany([
        {
            name: 'project 1',
            category: 'IT'
          },
          {
            name: 'project 2',
            category: 'IT'
          },
          {
            name: 'project 3',
            category: 'IT'
          }
    ]) 
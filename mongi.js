db.contactlist.insertMany([  { lastName: "Ben", firstName: "Moris", email: "ben@gmail.com", age: 26 },
    { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
    { lastName: "Emilie", firstName: "Brouge", email: "emilie.b@gmail.com", age: 40 },
    { lastName: "Alex", firstName: "Brown", age: 4 },
    { lastName: "Denzel", firstName: "Washington", age: 3 }
  ])
  {
    acknowledged: true,
    insertedIds: {
      '0': ObjectId('671609d441517b9da5fad579'),
      '1': ObjectId('671609d441517b9da5fad57a'),
      '2': ObjectId('671609d441517b9da5fad57b'),
      '3': ObjectId('671609d441517b9da5fad57c'),
      '4': ObjectId('671609d441517b9da5fad57d')
    }
  }
  db.contactlist.find()
  {
    _id: ObjectId('671609d441517b9da5fad579'),
    lastName: 'Ben',
    firstName: 'Moris',
    email: 'ben@gmail.com',
    age: 26
  }
  {
    _id: ObjectId('671609d441517b9da5fad57a'),
    lastName: 'Kefi',
    firstName: 'Seif',
    email: 'kefi@gmail.com',
    age: 15
  }
  {
    _id: ObjectId('671609d441517b9da5fad57b'),
    lastName: 'Emilie',
    firstName: 'Brouge',
    email: 'emilie.b@gmail.com',
    age: 40
  }
  {
    _id: ObjectId('671609d441517b9da5fad57c'),
    lastName: 'Alex',
    firstName: 'Brown',
    age: 4
  }
  {
    _id: ObjectId('671609d441517b9da5fad57d'),
    lastName: 'Denzel',
    firstName: 'Washington',
    age: 3
  }
  db.contactlist.find({ _id: ObjectId('671609d441517b9da5fad57b')})
  {
    _id: ObjectId('671609d441517b9da5fad57b'),
    lastName: 'Emilie',
    firstName: 'Brouge',
    email: 'emilie.b@gmail.com',
    age: 40
  }
  db.contactlist.find({ age: {$gt:20}})
  {
    _id: ObjectId('671609d441517b9da5fad579'),
    lastName: 'Ben',
    firstName: 'Moris',
    email: 'ben@gmail.com',
    age: 26
  }
  {
    _id: ObjectId('671609d441517b9da5fad57b'),
    lastName: 'Emilie',
    firstName: 'Brouge',
    email: 'emilie.b@gmail.com',
    age: 40
  }
  db.contactlist.deleteMany({age:{$lt:5}})
  {
    acknowledged: true,
    deletedCount: 2
  }
  db.contactlist.find()
  {
    _id: ObjectId('671609d441517b9da5fad579'),
    lastName: 'Ben',
    firstName: 'Moris',
    email: 'ben@gmail.com',
    age: 26
  }
  {
    _id: ObjectId('671609d441517b9da5fad57a'),
    lastName: 'Kefi',
    firstName: 'Seif',
    email: 'kefi@gmail.com',
    age: 15
  }
  {
    _id: ObjectId('671609d441517b9da5fad57b'),
    lastName: 'Emilie',
    firstName: 'Brouge',
    email: 'emilie.b@gmail.com',
    age: 40
  }
  db.contactlist.updateOne()
  {
    acknowledged: true,
    insertedId: null,
    matchedCount: 1,
    modifiedCount: 1,
    upsertedCount: 0
  }
  db.contactlist.find()
  {
    _id: ObjectId('671609d441517b9da5fad579'),
    lastName: 'Ben',
    firstName: 'Moris',
    email: 'ben@gmail.com',
    age: 26
  }
  {
    _id: ObjectId('671609d441517b9da5fad57a'),
    lastName: 'Kefi',
    firstName: 'Anis',
    email: 'kefi@gmail.com',
    age: 15
  }
  {
    _id: ObjectId('671609d441517b9da5fad57a'),
    lastName: 'Kefi',
    firstName: 'Anis',
    email: 'kefi@gmail.com',
    age: 15
  }
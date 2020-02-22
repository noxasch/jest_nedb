const Datastore = require('nedb');

const db = new Datastore({ filename: '../users.db', autoload: true });

(function(db) {

  // let doc = {
  //   firstName: 'James',
  //   lastName: 'Moriarty',
  //   age: 19,
  //   city: 'kabukichou',
  //   district: 'East Side',
  //   job: 'Student'
  // }

  // db.insert(doc, (err, newDoc) => {
  //   if (err) console.error(err);
  //   else console.log(newDoc);
  // });
  db.find({ city: 'kabukichou' }, (err, count) => {
    if (err) console.error(err);
    else console.log(count);
  });
  db.count({city: 'kabukichou'}, (err, count) => {
    if (err) console.error(err);
    else console.log(count);
  });

  // add new field on existing item
  // db.update({ _id: 'eT1VfOAdfeeiUlZH'}, {$set: { 'job': 'detective' }}, (err, res) => {
  //   if (err) console.error(err);
  //   else console.log(res);
  // });

  // use dot notation to target sub object
  // update item property
  // db.update({ _id: 'ggzDgaVsrJJSDBdA' }, { $set: { district: 'West Side' } }, (err, res) => {
  //   if (err) console.error(err);
  //   else console.log(res);
  // });
})(db);
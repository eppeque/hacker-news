migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3lr7gkjrdn7thhu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wabnx5or",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3lr7gkjrdn7thhu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wabnx5or",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})

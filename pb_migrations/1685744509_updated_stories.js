migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3lr7gkjrdn7thhu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5tymajxh",
    "name": "story",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3lr7gkjrdn7thhu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5tymajxh",
    "name": "storyId",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})

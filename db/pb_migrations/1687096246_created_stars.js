migrate((db) => {
  const collection = new Collection({
    "id": "z1sbzqna2ubjwd3",
    "created": "2023-06-18 13:50:46.474Z",
    "updated": "2023-06-18 13:50:46.474Z",
    "name": "stars",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ysptk27y",
        "name": "storyId",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "2r5ptp9p",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("z1sbzqna2ubjwd3");

  return dao.deleteCollection(collection);
})

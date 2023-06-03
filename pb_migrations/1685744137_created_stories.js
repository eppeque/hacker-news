migrate((db) => {
  const collection = new Collection({
    "id": "3lr7gkjrdn7thhu",
    "created": "2023-06-02 22:15:37.590Z",
    "updated": "2023-06-02 22:15:37.590Z",
    "name": "stories",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
  const collection = dao.findCollectionByNameOrId("3lr7gkjrdn7thhu");

  return dao.deleteCollection(collection);
})

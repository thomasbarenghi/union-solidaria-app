import { MongoClient } from 'mongodb'

// declared to extend global's object type. This variable is used in the mongo client utility
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient>
}

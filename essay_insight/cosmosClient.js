import { CosmosClient } from '@azure/cosmos';

// Initialize a Cosmos client with a connection string
const cosmosClient = new CosmosClient(process.env.COSMOS_CONNECTION_STRING);

// Get a reference to the database
const database = cosmosClient.database(process.env.COSMOS_DATABASE_NAME);

// Get a reference to the container
const container = database.container(process.env.COSMOS_CONTAINER_NAME);

// Optionally, you can use the partition key in your queries or data operations
const partitionKey = process.env.COSMOS_CONTAINER_PARTITION_KEY;

export { cosmosClient, database, container, partitionKey };

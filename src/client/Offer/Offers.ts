import { CosmosClient } from "../../CosmosClient";
import { SqlQuerySpec } from "../../queryExecutionContext";
import { QueryIterator } from "../../queryIterator";
import { FeedOptions } from "../../request";
import { OfferDefinition } from "./OfferDefinition";

export class Offers {
    constructor(public readonly client: CosmosClient) {}

    public query(query: SqlQuerySpec, options?: FeedOptions): QueryIterator<OfferDefinition> {
        return this.client.documentClient.queryOffers(query, options);
    }

    public read(options?: FeedOptions): QueryIterator<OfferDefinition> {
        return this.client.documentClient.readOffers(options);
    }
}
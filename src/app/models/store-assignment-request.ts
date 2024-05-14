import { Candidate } from "./candidate";
import { Store } from "./store";

export class StoreAssignmentRequest {
    sar_uuid: string; 
    store_id: number; 
    candidate_id: number; 
    status: number;
    created_at: string; 
    store: Store;
    candidate: Candidate;
}
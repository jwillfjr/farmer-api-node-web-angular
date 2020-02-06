import { Farmer } from '../models/farmer';

export abstract class FarmerSearchAbstractProvider {
    abstract searchFarmers(nameOrDocument: string): Promise<Farmer[]>;
}
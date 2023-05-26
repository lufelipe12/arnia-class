import { ObjectId } from "mongodb";

import database from "..";

export interface IShoes {
  id?: string;
  name: string;
  price: number;
  onSale: boolean;
  isExclusive: boolean;
  createdAt?: Date;
}

class ShoesReporitory {
  async create(payload: IShoes) {
    return await database.insertOne(payload);
  }

  async getAll(filter = {}) {
    return await database.find(filter).toArray();
  }

  async getOnSale() {
    return await database.find({ onSale: true }).toArray();
  }

  async getById(id: string) {
    return await database.findOne({
      _id: new ObjectId(id),
    });
  }

  async updateById(id: string, payload: any) {
    return await database.updateOne(
      {
        _id: new ObjectId(id),
      },
      { $set: payload }
    );
  }

  async delete(id: string) {
    return await database.deleteOne({
      _id: new ObjectId(id),
    });
  }
}

export const shoesRepository = new ShoesReporitory();

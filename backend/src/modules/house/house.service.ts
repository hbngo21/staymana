import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {CreateHouseDto} from './dtos/house.dto';
import {House} from './house.model';
import {RoomService} from 'src/modules/room/room.service';


@Injectable()
export class HouseService {
    constructor(@InjectModel('House') private readonly houseModel: Model<House>, private readonly roomService: RoomService) {
    }

    async createHouse(createHouseDto: CreateHouseDto) {
        return await this.houseModel.create({
            name: createHouseDto.name,
            address: createHouseDto.address,
            image: createHouseDto.image,
            hostId: createHouseDto.hostId,
        })
    }

    async getHouses(hostId: string): Promise<House[]> {
        return this.houseModel.find({hostId: hostId});
    }
}
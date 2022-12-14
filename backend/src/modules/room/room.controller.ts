import {Body, Param, Controller, Get, Post, UseGuards} from '@nestjs/common';
import { CreateRoomDto, GetRoomsDto } from './dtos/room.dto';
import { RoomService } from './room.service';
import {JwtAuthGuard} from "../auth/guards/jwt.guard";
import {AddGuestDto} from "./dtos/addGuest.dto";

@Controller('/room')
@UseGuards(JwtAuthGuard)
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  async createRoom(@Body() room: CreateRoomDto) {
    return await this.roomService.createRoom(room);
  }

  @Get('/:houseId')
  async getRooms(@Param('houseId') houseId: string) {
    return await this.roomService.getRooms(houseId);
  }

  @Post('/add-guest')
  async addGuest(@Body() addGuestDto: AddGuestDto) {
    return await this.roomService.updateMember(addGuestDto);
  }
}

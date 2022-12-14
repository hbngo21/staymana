import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res, UseGuards,} from '@nestjs/common';
import {UserService} from './user.service';
import {Response} from 'express';
import {CreateUserDto} from './dtos/create-user.dto';
import {CheckUserDto} from './dtos/check-user.dto';
import {JwtAuthGuard} from '../auth/guards/jwt.guard';
import {ChangePasswordDto} from './dtos/change-password.dto';
import {ChangeImageDto} from "./dtos/change-image.dto";

@Controller('/users')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getUsers() {
        return this.userService.getAllUsers();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    async getUserById(@Param('id') id: string, @Res() res: Response) {
        const user: any = await this.userService.getUserById(id);
        return res.status(HttpStatus.OK).send(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/detail/:qr')
    async getUserByQr(@Param('qr') qr: string, @Res() res: Response) {
        const user: any = await this.userService.getUserByQr(qr);
        return res.status(HttpStatus.OK).send(user);
    }

    @Post('/check-exist')
    @HttpCode(HttpStatus.OK)
    async checkExist(@Body() checkUserDto: CheckUserDto) {
        const user = await this.userService.getUserByRoleAndTel(checkUserDto);
        return (user != null);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:tel/:role')
    @HttpCode(HttpStatus.OK)
    async getUserByRoleAndTel(@Param('tel') tel: string, @Param('role') role: number) {
        const object: CheckUserDto = {
            tel,
            role
        };
        return await this.userService.getUserByRoleAndTel(object);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.userService.createUser(createUserDto);
    }

    @Post('/change-password')
    @HttpCode(HttpStatus.CREATED)
    async changePassword(
        @Body() changePasswordDto: ChangePasswordDto,
        @Res() res: Response,
    ) {
        const user = await this.userService.changePassword(changePasswordDto);
        return res.status(HttpStatus.OK).send(user);
    }

    @Post('/change-image')
    @HttpCode(HttpStatus.CREATED)
    async changeImage(
        @Body() changeImageDto: ChangeImageDto,
        @Res() res: Response,
    ) {
        const user = await this.userService.changeImage(changeImageDto);
        return res.status(HttpStatus.OK).send(user);
    }
}

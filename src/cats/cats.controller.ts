import { Controller, Get, Post, Param, Res, HttpStatus, Body } from '@nestjs/common';
import { get } from 'https';
import { create } from 'domain';
import { CreateCatDto } from './create-cat.dto';
import { Cat } from './interface/cat.interface';
import { CatsService } from './cats/cats.service';

@Controller('cats')
export class CatsController {
    // @Get()
    // findALL() {
    //     return 'this is test findAll Get requset2';
    // }

    // @Get(':id')
    // findOne(@Param() params) {
    //     return `this is #${params.id}`;
    // }

    // @Post()
    // findAll() {
    //     return 'this is add cats method';
    // }

    // @Post()
    // create(@Res() res) {
    //     res.status(HttpStatus.CREATED).send()
    // }

    constructor(private readonly catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }


}

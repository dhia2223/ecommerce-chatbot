import { Controller, Get, Param, UseGuards, Delete } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';



@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBearerAuth()
  @ApiTags('Users')
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.usersService.findById(id);
    
    const { password, ...safeUser } = user;

    return safeUser;
  }

  @ApiBearerAuth()
  @ApiTags('Users')
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUsers() {
    const users = await this.usersService.findAll();
    
    return users.map(user => {
      const { password, ...safeUser } = user;
      return safeUser;
    });
  }

  @ApiBearerAuth()
  @ApiTags('Users')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
      return this.usersService.remove(id);
  }

}



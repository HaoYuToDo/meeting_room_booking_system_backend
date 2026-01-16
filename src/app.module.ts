import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Role } from './user/entities/role.entity';
import { Permission } from './user/entities/permission.entity';

@Module({
  imports: [
    // 数据库创建语句：CREATE DATABASE meeting_room_booking_system DEFAULT CHARACTER SET utf8mb4;
    TypeOrmModule.forRoot({
      type: 'mysql', // 数据库类型
      host: 'localhost', // 数据库地址
      port: 3306, // 数据库端口
      username: 'root', // 用户名
      password: '123456', // 密码
      database: 'meeting_room_booking_system', // 数据库名称
      synchronize: true, // 是否自动同步实体到数据库表，生产环境建议关闭
      logging: true, // 是否打印日志
      entities: [User, Role, Permission], // 实体列表
      poolSize: 10, // 连接池大小
      connectorPackage: 'mysql2', // 指定连接器包
      extra: {
        authPlugin: 'sha256_password', // 额外配置，这里指定了认证插件
      },
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

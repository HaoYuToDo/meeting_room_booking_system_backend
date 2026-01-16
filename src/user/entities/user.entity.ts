import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from './role.entity';

/**
 * 用户实体
 * 存储系统用户信息，包括登录凭证、个人资料以及关联的角色
 */
@Entity({
  name: 'users', // 数据库表名
})
export class User {
  @PrimaryGeneratedColumn({
    comment: '用户ID',
  })
  id: number;

  @Column({
    length: 50,
    comment: '用户名', // 登录账号，唯一
  })
  username: string;

  @Column({
    length: 50,
    comment: '密码', // 加密后的密码
  })
  password: string;

  @Column({
    name: 'nick_name', // 数据库字段名
    length: 50,
    comment: '昵称',
  })
  nickName: string;

  @Column({
    comment: '邮箱',
    length: 50,
  })
  email: string;

  @Column({
    comment: '头像', // 头像图片的URL路径
    length: 100,
    nullable: true,
  })
  headPic: string;

  @Column({
    comment: '手机号',
    length: 20,
    nullable: true,
  })
  phoneNumber: string;

  @Column({
    comment: '是否冻结', // true: 冻结, false: 正常
    default: false,
  })
  isFrozen: boolean;

  @Column({
    comment: '是否是管理员', // true: 管理员, false: 普通用户
    default: false,
  })
  isAdmin: boolean;

  @CreateDateColumn({
    comment: '创建时间',
  })
  createTime: Date;

  @UpdateDateColumn({
    comment: '更新时间',
  })
  updateTime: Date;

  /**
   * 用户与角色的多对多关系
   * 一个用户可以拥有多个角色
   */
  @ManyToMany(() => Role)
  @JoinTable({
    name: 'user_roles', // 中间表表名
  })
  roles: Role[];
}

import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Permission } from './permission.entity';

/**
 * 角色实体
 * 用于定义用户的角色，并关联相应的权限
 */
@Entity({
  name: 'roles', // 数据库表名
})
export class Role {
  @PrimaryGeneratedColumn({
    comment: '角色ID',
  })
  id: number;

  @Column({
    length: 20,
    comment: '角色名', // 例如: 'admin', 'user'
  })
  name: string;

  /**
   * 角色与权限的多对多关系
   * 一个角色可以拥有多个权限，一个权限也可以赋予多个角色
   */
  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'role_permissions', // 中间表表名
  })
  permissions: Permission[];
}

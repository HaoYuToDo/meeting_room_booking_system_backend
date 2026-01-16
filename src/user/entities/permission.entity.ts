import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * 权限实体
 * 用于存储系统中的功能权限
 */
@Entity({
  name: 'permissions', // 数据库表名
})
export class Permission {
  @PrimaryGeneratedColumn({
    comment: '权限ID',
  })
  id: number;

  @Column({
    length: 20,
    comment: '权限代码', // 唯一标识，例如: 'user:list'
  })
  code: string;

  @Column({
    length: 100,
    comment: '权限描述', // 权限的中文描述
  })
  description: string;
}

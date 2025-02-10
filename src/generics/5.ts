export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserRoleStatus = Record<UserRole, string>;

const RoleDescription: UserRoleStatus = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

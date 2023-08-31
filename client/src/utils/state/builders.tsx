import { AuthClass, UserClass } from "@/types";

export const sessionBuilder = (data: any) => {
  return new UserClass(
    data.id,
    data.firstName,
    data.lastName,
    data.username,
    data.profileImage,
    data.email,
    data.isSuperAdmin,
    data.softDelete,
    data.coverImage,
  );
};

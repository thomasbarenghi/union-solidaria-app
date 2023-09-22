import { encryptPassword, comparePasswords } from './bcrypt.utils';

export const changePassword = async (
  oldPassword: string,
  newPassword: string,
  hashedPassword: string,
): Promise<string> => {
  try {
    const match = await comparePasswords(oldPassword, hashedPassword);
    if (match) {
      const newHashedPassword = await encryptPassword(newPassword);
      return newHashedPassword;
    } else {
      throw new Error('Error al comparar las contraseñas');
    }
  } catch (error:any) {
    console.log('error', error);
    throw new Error(error.message);
  }
};

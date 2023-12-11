import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
const saltRounds = 10; // Número de rondas de sal para la encriptación. Cuanto mayor sea el número, más lenta será la encriptación y más segura.

export const encryptPassword = async (
  plainPassword: string,
): Promise<string> => {
  try {
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error al encriptar la contraseña');
  }
};

export const comparePasswords = async (
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  const match = await bcrypt.compare(plainPassword, hashedPassword);

  if (!match) {
    throw new UnauthorizedException('Invalid password');
  }

  return match;
};

import { Eye } from './Eye';
import { EyeSlash } from './EyeSlash';

export const icon = {
  eye: Eye,
  eyeSlash: EyeSlash,
};

export type IconName = keyof typeof icon;

import { Eye } from './Eye';
import { EyeSlash } from './EyeSlash';
import { Gear } from './Gear';
import { Home } from './Home';

export const icon = {
  eye: Eye,
  eyeSlash: EyeSlash,
  home: Home,
  gear: Gear,
};

export type IconName = keyof typeof icon;

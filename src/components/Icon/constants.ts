import { Apple } from './Apple';
import { ChevronLeft } from './ChevronLeft';
import { ChevronRight } from './ChevronRight';
import { Eye } from './Eye';
import { EyeSlash } from './EyeSlash';
import { File } from './File';
import { Gear } from './Gear';
import { Google } from './Google';
import { Home } from './Home';
import { Plus } from './Plus';
import { Search } from './Search';
import { Shield } from './Shield';

export const icon = {
  apple: Apple,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  eye: Eye,
  eyeSlash: EyeSlash,
  file: File,
  gear: Gear,
  google: Google,
  home: Home,
  plus: Plus,
  search: Search,
  shield: Shield,
};

export type IconName = keyof typeof icon;

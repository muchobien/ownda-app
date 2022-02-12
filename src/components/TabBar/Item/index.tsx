import { Icon } from '@app/components/Icon';
import type { IconName } from '@app/components/Icon/constants';
import type { TabScreenName } from '@app/types';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { memo, useCallback } from 'react';
import { Presable, Label } from './styles';

export type ItemProps = {
  name: string;
  focused: boolean;
  navigation: BottomTabBarProps['navigation'];
};

const iconMap: Record<TabScreenName, IconName> = {
  Home: 'home',
  Settings: 'gear',
};

export const Item = memo<ItemProps>(({ name, focused, navigation }) => {
  const handlePress = useCallback(() => {
    navigation.navigate(name);
  }, [name, navigation]);

  return (
    <Presable onPress={handlePress}>
      <Icon
        name={iconMap[name as TabScreenName]}
        color={focused ? 'ivy' : 'mediumWhite'}
        filled={focused}
      />
      <Label focused={focused}>{name}</Label>
    </Presable>
  );
});

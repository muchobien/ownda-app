import { Button } from '@app/components';
import styled from '@emotion/native';

export const ImportButton = styled(Button)({
  marginBottom: 16,
});
ImportButton.defaultProps = {
  variant: 'outline',
  leftIcon: 'file',
};

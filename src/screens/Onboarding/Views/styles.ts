import styled from '@emotion/native';

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  paddingTop: theme.device.insets.top,
  paddingHorizontal: 16,
}));

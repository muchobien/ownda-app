import type { Screen } from '@app/types';
import { useConnect } from './connect';
import { Pager, Container, Header, PageView } from './styles';
import { Import, Currency, Account, Category } from './Views';

export const Onboarding: Screen<'Onboarding'> = props => {
  const { handleBack, pagerRef, handlePageChange, handleNext } =
    useConnect(props);

  return (
    <Container>
      <Header onPressLeft={handleBack} />
      <Pager ref={pagerRef} onPageSelected={handlePageChange}>
        <PageView key="import">
          <Import onPressNext={handleNext} />
        </PageView>
        <PageView key="currency">
          <Currency onPressNext={handleNext} />
        </PageView>
        <PageView key="account">
          <Account onPressNext={handleNext} />
        </PageView>
        <PageView key="category">
          <Category onPressNext={handleNext} />
        </PageView>
      </Pager>
    </Container>
  );
};

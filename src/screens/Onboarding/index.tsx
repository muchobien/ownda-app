import type { Screen } from '@app/types';
import { useConnect } from './connect';
import { Pager, Container, Header, PageView, UnsafePageView } from './styles';
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
        <UnsafePageView key="currency">
          <Currency onPressNext={handleNext} />
        </UnsafePageView>
        <PageView key="account">
          <Account onPressNext={handleNext} />
        </PageView>
        <UnsafePageView key="category">
          <Category onPressNext={handleNext} />
        </UnsafePageView>
      </Pager>
    </Container>
  );
};

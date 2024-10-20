import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import BreadCrumbs from '../_shared/BreadCrumbs/BreadCrumbs';
import { NotFoundImg } from '../ProductsPage/styled';
import { NotFoundStyled } from './styled';
import { useTranslation } from 'react-i18next';
import { StrCode } from '../../utils/enums';

const PageNotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <NotFoundStyled>
      <BreadCrumbs />

      {t(StrCode.PageNotFound)}

      <Button
        variant="dark"
        css="align-self: center;"
        onFunc={() => navigate('/')}
      >
        {t(StrCode.GoHome)}
      </Button>

      <NotFoundImg
        src={`${process.env.PUBLIC_URL}/img/page-not-found.png`}
        alt="Page Not Found"
      />
    </NotFoundStyled>
  );
};

export default PageNotFound;

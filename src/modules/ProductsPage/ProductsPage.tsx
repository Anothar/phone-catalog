import BreadCrumbs from '../_shared/BreadCrumbs/BreadCrumbs';
import {
  ModelsStyled,
  NotFoundImg,
  ProductsNotFound,
  ProductsPageStyled,
  SelectFixInput,
  SelectFixSecond,
  SelectsStyled,
  TitleStyled,
} from './styled';
import { useTranslation } from 'react-i18next';
import { StrCode } from '../../utils/enums';
import { SelectInput } from '../../components/Inputs/SelectInput/SelectInput';
import Pagination from './components/Pagination/Pagination';
import { useProductPage } from '../../hooks/useProductPage';
import { Button } from '../../components/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductList from '../_shared/ProductList/ProductList';

type Props = {
  variant: 'phones' | 'tabless' | 'accesories';
};

const ProductsPage: React.FC<Props> = ({ variant }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    const basePath = location.pathname;

    navigate(basePath);
  };

  const {
    productsVariantLength,
    productsLength,
    valueSort,
    updateSort,
    valuePerPage,
    updatePerPage,
    sordedProduct,
    currentPage,
    updateCurrentPage,
  } = useProductPage(variant);

  const firstTitleH1 = {
    phones: 'Phones page',
    tabless: 'Tablets page',
    accesories: 'Accessories page',
  };

  const productNoYet = {
    phones: t(StrCode.NotPhones),
    tabless: t(StrCode.NotTablets),
    accesories: t(StrCode.NotAccessories),
  };

  const sortBy = [
    t(StrCode.SortAge),
    t(StrCode.SortName),
    t(StrCode.SortPrice),
  ];
  const itemOnPage = ['4', '8', '16', 'all'];

  const titleName = {
    phones: t(StrCode.MobilePhones),
    tabless: t(StrCode.Tablets),
    accesories: t(StrCode.Accessories),
  };

  return (
    <div>
      <h1 style={{ display: 'none' }}>{firstTitleH1[variant]}</h1>

      <ProductsPageStyled>
        <BreadCrumbs />

        <TitleStyled>{titleName[variant]}</TitleStyled>

        <ModelsStyled>{`${productsLength} ${t(StrCode.Models)}`}</ModelsStyled>

        <SelectsStyled>
          <SelectFixInput>
            <SelectInput
              label={t(StrCode.SortBy)}
              items={sortBy}
              value={valueSort}
              setValue={updateSort}
            />
          </SelectFixInput>

          <SelectFixSecond>
            <SelectInput
              label={t(StrCode.ItemsOnPage)}
              items={itemOnPage}
              value={valuePerPage}
              setValue={updatePerPage}
            />
          </SelectFixSecond>
        </SelectsStyled>

        <ProductList
          productLength={productsVariantLength}
          products={sordedProduct}
        />

        {productsVariantLength !== 0 && sordedProduct.length === 0 && (
          <ProductsNotFound>
            {productNoYet[variant]}

            <Button
              variant="dark"
              css="align-self: center;"
              onFunc={handleGoBack}
            >
              {t(StrCode.GoBack)}
            </Button>

            <NotFoundImg
              src={`${process.env.PUBLIC_URL}/img/product-not-found.png`}
              alt="Product Not Found"
            />
          </ProductsNotFound>
        )}

        <Pagination
          total={productsLength}
          perPage={valuePerPage}
          currentPage={currentPage}
          onPageChange={updateCurrentPage}
        />
      </ProductsPageStyled>
    </div>
  );
};

export default ProductsPage;

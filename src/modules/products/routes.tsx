import { Product } from '.';

interface ILoginProps {
  path: string;
  element: JSX.Element;
}

export enum ProductRoutesEnum {
  PRODUCT = '/products',
}

export const productScreenRoutes: ILoginProps[] = [
  {
    path: ProductRoutesEnum.PRODUCT,
    element: <Product />,
  },
];

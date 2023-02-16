import { ReactNode } from "react";
import {
  IConfigurator,
  ICategory,
  ISubcategory,
  IIconSetting,
  IIconMapping,
} from "../interfaces/configurator";

export type AccordionType = {
  title: string;
  children: ReactNode;
};

export type CategoriesType = {
  tieList: IConfigurator;
  type: string;
  setType: (type: string) => void;
  accentColor: {
    static: string;
    hover: string;
  };
  isNavbarNightMode: boolean;
};

export type CategoryType = {
  tie: ICategory;
  setType: (type: string) => void;
  accentColor: {
    static: string;
    hover: string;
  };
  isNavbarNightMode: boolean;
};

export type SubCategoriesType = {
  subCategories: ISubcategory[];
  price: string | undefined;
  type: string;
  setType: (type: string) => void;
  accentColor: {
    static: string;
    hover: string;
  };
  isNavbarNightMode: boolean;
};

export type ConfiguratorIconType = {
  settings: IIconSetting;
};

export type ConfiguratorViewType = {
  type: string;
  price: string | undefined;
  accentColor: {
    static: string;
    hover: string;
  };
  isNavbarNightMode: boolean;
};

export type SubCategoryType = {
  subCategory: ISubcategory;
  type: string;
  setType: (type: string) => void;
  accentColor: {
    static: string;
    hover: string;
  };
  isNavbarNightMode: boolean;
};

export type IconFactoryType = {
  components: IIconMapping[];
  settings: IIconSetting;
  type: string;
};

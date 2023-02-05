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
};

export type CategoryType = {
  tie: ICategory;
  setType: (type: string) => void;
};

export type SubCategoriesType = {
  subCategories: ISubcategory[];
  type: string;
  setType: (type: string) => void;
};

export type ConfiguratorIconType = {
  settings: IIconSetting;
};

export type ConfiguratorViewType = {
  type: string;
};

export type SubCategoryType = {
  subCategory: ISubcategory;
  type: string;
  setType: (type: string) => void;
};

export type IconFactoryType = {
  components: IIconMapping[];
  settings: IIconSetting;
  type: string;
};

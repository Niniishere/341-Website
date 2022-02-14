import * as yup from "yup";

export const product_schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  price: yup.number().required().positive(),
  currency: yup.string().default("CAD"),
  brand: yup.string(),
  seller: yup.string(),
  other: yup.object(),
  stock: yup.number().required().integer(),
});

export type Product = yup.InferType<typeof product_schema>;

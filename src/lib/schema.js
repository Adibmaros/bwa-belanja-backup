import { z } from "zod";

export const ALLOW_MIME_TYPES = ["image/jpg", "image/png", "image/jpeg"];

export const loginSchema = z.object({
  email: z.string({ required_error: "email is required" }).email({ message: "email is not valid" }),
  password: z.string({ required_error: "password is required" }).min(5, { message: "password should be at least 5 characters" }),
});

export const schemaSignUp = loginSchema.extend({
  name: z.string({ required_error: "name is required" }).min(4, { message: "name length must be at least 4 characters" }),
});

export const categorySchema = z.object({
  name: z.string({ required_error: "name is required" }).min(1, { message: "name length must be at least 2 characters" }),
});

export const brandSchema = categorySchema.extend({
  logo: z
    .any()
    .refine((file) => ALLOW_MIME_TYPES.includes(file.type), {
      message: "Invalid file type, only JPG, PNG, and JPEG are allowed",
    })
    .refine((file) => file?.name, { message: "Invalid file name" }),
});

export const schemaProduct = z.object({
  name: z.string({ required_error: "name is required" }).min(4, { message: "name length must be at least 4 characters" }),
  description: z.string({ required_error: "description is required" }).min(10, { message: "description length must be at least 10 characters" }),
  price: z.string({ required_error: "price is required" }),
  stock: z.string({ required_error: "stock is required" }),
  brand_id: z.string({ required_error: "brand is required" }),
  category_id: z.string({ required_error: "category is required" }),
  location_id: z.string({ required_error: "location is required" }),
  images: z
    .any()
    .refine((files) => (files.length = 3), {
      message: "minimal 3 gambar , maksimal 5 gambar",
    })
    .refine(
      (files) => {
        let validate = false;

        Array.from(files).every((file) => {
          validate = ALLOW_MIME_TYPES.includes(file.type);
        });
        return validate;
      },
      {
        message: "Invalid file type, only JPG, PNG, and JPEG are allowed",
      }
    ),
});

export const schemaProductEdit = schemaProduct
  .extend({
    id: z.number({ required_error: "Product id is required" }),
  })
  .omit({ images: true });

export const schemaShippingAddress = z.object({
    name : z.string({ required_error: "required name"}).min(5,{message : "minimum 5 characters"}),
    address : z.string({ required_error: "required address"}).min(5,{message : "minimum 5 characters"}),
    city : z.string({ required_error: "required city"}).min(5,{message : "minimum 5 characters"}),
    postal_code : z.string({ required_error: "required postal_code"}).min(5,{message : "minimum 5 characters"}),
    notes : z.string().nullable(),
    phone : z.string({ required_error: "required phone_number"}).min(5,{message : "minimum 10 characters"}),
})
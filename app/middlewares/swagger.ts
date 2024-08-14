import swaggerUI, { SwaggerOptions } from "swagger-ui-express";
import swaggerDoc from "swagger-jsdoc";

const option: SwaggerOptions = {
   swaggerDefinition: {
      openapi: "3.0.0",
      info: {
         title: "Swagger Express API",
         version: "1.0.0",
      },
   },
   apis: ["./app/routes/*.ts"],
};

const swaggerSpec = swaggerDoc(option);

export { swaggerSpec, swaggerUI };

import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v0.0.1",
    title: "Dokumentasi API EVENMORE",
    description: "Dokumentasi API EVENMORE",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local Server",
    },
    {
      url: "https://eventmore-core-be.vercel.app/api",
      description: "Production Server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      LoginRequest: {
        identifier: "muchamadfaiz",
        password: "12341234",
      },
      RegisterRequest: {
        fullName: "Faiz Gembil",
        username: "faiz2024",
        email: "faiz2024@yopmail.com",
        password: "12341234",
        confirmPassword: "12341234",
      },
      ActivationRequest: {
        code: "ABCDEF",
      },
    },
  },
};

const outputFile = "./swagger_output.json";

const endpointsFiles = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);

export default {
  docker: {
    compose: {
      services: {
        postgres: {
          ports: ["5433:5432"], // map host 5433 → container 5432
        },
      },
    },
  },
};

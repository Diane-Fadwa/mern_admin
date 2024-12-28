console.log(
  "process env REACT_APP_DEV_REMOTE",
  process.env.REACT_APP_DEV_REMOTE
);

const cors = require('cors');

app.use(cors({
  origin: ['http://84.8.129.57'], // Remplacez par votre URL cliente
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// API Base URL configuration
export const API_BASE_URL =
  process.env.NODE_ENV === "production" ||
  process.env.REACT_APP_DEV_REMOTE === "remote"
    ? "https://erp-crm.idurarapp.com/api/"
    : "http://localhost:8888/api/";

export const ACCESS_TOKEN_NAME = "x-auth-token";

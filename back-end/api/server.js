// API = Application Programming Interface
// Sistema de Comunicacao entre Entidades(Computadores)
// Api = Recursos que podem ser utilizados
// Conecta com Banco de Dados
// Requisicoes: POST, GET, PUT, DELETE
// CRUD - Create - Read - Update - Delete : Como manuseia Banco de dados
// EndPoint
// Middleware

import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3001;

app.use( cors() );
// app.use( express.json() );

app.get("/api/", (request, response) => {
  response.send(" working with '/artists' and '/songs' ");
});

app.get("/api/artists", async (request, response) => {
  response.send( await db.collection("artists").find({}).toArray() );
});

app.get("/api/songs", async (request, response) => {
  response.send( await db.collection("songs").find({}).toArray() );
});

app.use( express.static( path.join(__dirname, "../front-end/dist") ) );

app.get("*", async (request, response) => {
  response.sendFile( path.join(__dirname, "../front-end/dist/index.html") );
});

app.listen(PORT, () => {
  console.log(` Server running in Port: ${PORT} `);
});

import request from "supertest";
import express from "express";
import multer from "multer";
import axios from "axios";
import FormData from "form-data";
import { uploadFile } from "../../controller/documents.controller";

jest.mock("axios");
jest.mock("form-data");

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.post("/uploadFile", upload.single("file"), uploadFile);

describe("Document Controller", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Should return 400 if file is not uploaded", async () => {
    const response = await request(app).post("/uploadFile");
    expect(response.status).toBe(false);
  });
});

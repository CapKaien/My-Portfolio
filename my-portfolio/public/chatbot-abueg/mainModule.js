import {GoogleGenerativeAI} from "@google/generative-ai";

const API_KEY = "AIzaSyDeQfg2cn0hgL6CCh6jLQwlalPvlM0pKlo";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
    model:"gemini-pro"
});

export{model};


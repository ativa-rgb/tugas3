import express from "express";

const app = express();
app.use(express.json());
app.use(express.static("public"));

const kata_mutiara = {
    kata : `Apa itu jalur langit??, sebuah upaya yang dilakukan seseorang muslim yang meraih tujuan dengan mengharap
            ridha Allah Subhanahu Wa Ta'ala.
            Setiap manusia mempunyai ujian yang berat dan berbeda- beda.bagi seorang muslim, semua dapat menerima
            dengan ikhlas dan menghadapi ujian tersebut dengan mendekat kepada Allah Subhanahu Wa Ta'ala.`
}

app.get("/api/jalurlangit",async (req,res)=>{
    res.send(kata_mutiara);
});

app.listen(3000);
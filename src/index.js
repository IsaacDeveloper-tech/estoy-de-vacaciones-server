import e from "express";

const app = e();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const respuesta = process.env.RESPUESTA || "No hay respuesta";

    const resultado = {
        correcta: req.query.respuesta == respuesta,
        regalo: process.env.REGALO || "No hay regalo"
    };

    resultado.regalo = resultado.correcta ? resultado.regalo : null;

    res.json(resultado);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
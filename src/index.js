import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/test")

const LivroModel = mongoose.model("Livro", {
    nome: String,
    capa: String,
    paginas: [String],
    autor: String
})

function CreateNewLivro (nome, capa, paginas, autor) {
    const newLivro = new LivroModel({nome, capa, paginas, autor})
    newLivro.save()
}

// CreateNewLivro("Senhor dos Aneis: O retorno do rei", "linkdacapa", ["pg1", "pg2"], "Token")
// LivroModel.findByIdAndDelete("649cb8b486a1c53704d6a186")

await LivroModel.findByIdAndUpdate("649cb864e26b7b033196f1da", {
    capa: "linkAtualizadoDaCapa"
})

const livroEncontrado = await LivroModel.find()

console.log(livroEncontrado)
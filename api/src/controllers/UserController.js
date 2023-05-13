const user = [
    { 'id': 1, 'nome': 'Thiago Morais' },
    { 'id': 2, 'nome': 'Fabricio Brito' }
];

getUsers = (req, res) => {
    res.send(user);
}
getOneUser = (req, res) => {
    let id = req.params.id;
    const resposta = user.find((user) => user.id === Number(id));
    if (resposta) {
        res.send(resposta);
    } else {
        res.status(404).send("Usuario não encontrado");
    }
}
postUser = (req, res) => {
    user.push(req.body);
    res.status(201).send("Usuario Inserido com sucesso");
}

module.exports = { getUsers, getOneUser, postUser };
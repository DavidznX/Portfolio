fetch('produtos.json')
  .then(res => res.json())
  .then(produtos => {
    const container = document.getElementById('lista-produtos');

    produtos.forEach((produto, index) => {
      const div = document.createElement('div');
      div.className = 'produto';

      div.innerHTML = `
        <div class='produtoo'>
        <h2>${produto.nome}</h2>
        <img src="${produto.imagem}" alt="${produto.nome}">
        <p><strong>Preço:</strong> ${produto.preco}</p>
        <a href="produto_detalhes.html?id=${index}">Ver</a>
        </div>
      `;

      container.appendChild(div);
    });
  })
  .catch(erro => {
    console.error('Erro ao carregar os produtos:', erro);
  });
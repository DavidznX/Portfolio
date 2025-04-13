fetch('produtos.json')
  .then(res => res.json())
  .then(produtos => {
    const container = document.getElementById('lista-produtos');

    produtos.forEach(produto => {
      const div = document.createElement('div');
      div.className = 'produto';

      div.innerHTML = `
        <h2>${produto.nome}</h2>
        <img src="${produto.imagem}" alt="${produto.nome}">
        <p><strong>Preço:</strong> ${produto.preco}</p>
        <a href="${produto.linkAfiliado}" target="_blank">Ver na Amazon</a>
      `;

      container.appendChild(div);
    });
  })
  .catch(erro => {
    console.error('Erro ao carregar os produtos:', erro);
  });
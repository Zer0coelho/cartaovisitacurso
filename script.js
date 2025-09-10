async function carregarCertificados() {
    const container = document.getElementById("certificados");

    try {
        const resposta = await fetch("certificados.json");
        const certificados = await resposta.json();

        certificados.forEach(cert => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
        <h2>${cert.titulo}</h2>
        <p><strong>Instituição:</strong> ${cert.instituicao}</p>
        <p><strong>Ano:</strong> ${cert.ano}</p>
        <a href="certificados/${cert.arquivo}" target="_blank">Ver certificado</a>
        `;

            container.appendChild(card);
        });
    } catch (error) {
        container.innerHTML = "<p>Não foi possível carregar os certificados.</p>";
        console.error("Erro ao carregar certificados:", error);
    }
}

carregarCertificados();

import { Projects } from "../interfaces/Projects";

export const projects: Projects = {
    "electron-certificate": {
        coverSrc: "assets/imgs/projects/electron-certificate-project.png",
        title: "Electron certificate",
        subtitle: "Esse texto contém: prints, documentação e repositório do projeto",
        content: [
            {
                text: `O Electron Certificate é uma aplicação destinada à geração de certificados de forma eficiente 
                e personalizada. O usuário tem a flexibilidade de definir modelos de certificados em formatos populares, 
                como PowerPoint e Word, dentro das configurações do aplicativo. Uma vez configurado, o usuário pode preencher 
                uma tabela com os dados necessários para cada certificado.`
            },
            {
                text: `O processo de geração é simplificado: para cada linha da tabela preenchida com os dados do certificado, 
                o aplicativo automaticamente gera um certificado correspondente e converte-o para o formato PDF. Todos os certificados 
                gerados são armazenados em uma pasta específica no diretório de documentos, facilitando o acesso e organização.`
            },
            {
                text: `Além disso, o Electron Certificate oferece uma funcionalidade adicional de geração de atestados, que 
                pode ser habilitada ou desabilitada conforme a necessidade do usuário, diretamente nas configurações do aplicativo.`
            },
            {
                text: `Desenvolvido utilizando a tecnologia Electron para atender a requisitos específicos, o 
                aplicativo utiliza o LibreOffice para a conversão dos arquivos para o formato PDF, garantindo 
                compatibilidade e qualidade na geração dos certificados.`
            },
            {
                text: `O aplicativo oferece duas formas intuitivas de adicionar dados aos certificados: 
                inserção manual um a um, através de campos de entrada dedicados, ou inserção em massa utilizando 
                um campo de texto, que permite a entrada de múltiplos indivíduos de uma vez. No caso da 
                inserção em massa, o aplicativo é capaz de separar e preencher automaticamente 
                a tabela, mesmo diante de desafios comuns como falta de pontuação nos dados, espaços extras 
                e outros problemas de formatação.`
            },
            {
                text: `A documentação do Electron Certificate é abrangente e acessível, fornecendo 
                instruções claras e links para a instalação e utilização do aplicativo, garantindo uma experiência 
                satisfatória para o usuário.`
            },
            {
                url: "https://mega.nz/file/wgFkmIoa#aO1A8NUjL5u-1oUaD1U3tYO6Hw_2kOm6Xwlcmcp2o9k",
                urlText: "Link da documentação"
            },
            {
                url: "https://github.com/renanmaitan/ElectronCertificade",
                urlText: "Link do repositório"
            },
            {
                text: `A seguir, algumas imagens do aplicativo:`
            },
            {
                imageSrc: "assets/imgs/project-imgs/electron-certificate/home.png",
                imageAlt: "Electron Certificate 1"
            },
            {
                imageSrc: "assets/imgs/project-imgs/electron-certificate/options.png",
                imageAlt: "Electron Certificate 2"
            },
            {
                imageSrc: "assets/imgs/project-imgs/electron-certificate/table.png",
                imageAlt: "Electron Certificate 3"
            },
            {
                imageSrc: "assets/imgs/project-imgs/electron-certificate/edit.png",
                imageAlt: "Electron Certificate 4"
            }
        ]
    }
};
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
    },
    "regnacraft": {
        coverSrc: "assets/imgs/projects/regnacraft-project.png",
        title: "RegnaCraft",
        subtitle: "Esse texto contém: prints, repositório no GitHub e link do projeto rodando",
        content: [
            {
                text: `RegnaCraft é uma plataforma dedicada ao suporte de um possível servidor 
                de Minecraft. Desenvolvido com a tecnologia Flask, um framework Python, o site 
                oferece uma variedade de recursos para os jogadores.`
            },
            {
                text: `Uma característica central do RegnaCraft é sua loja virtual, onde 
                os usuários podem adquirir vantagens no servidor, como pacotes VIPs. Além disso, 
                há uma página de perfil personalizada para cada usuário, fornecendo informações 
                detalhadas sobre suas atividades no servidor e histórico de compras.`
            },
            {
                text: `Vale ressaltar que o serviço de hospedagem do site foi implementado com o 
                onRender, um serviço gratuito que mantém o site em standby até que um visitante o acesse. 
                Isso pode resultar em lentidão durante o primeiro acesso.`
            },
            {
                url: "https://regnacraft.onrender.com/",
                urlText: "Link do projeto rodando"
            },
            {
                url: "https://github.com/renanmaitan/website-mine",
                urlText: "Link do repositório"
            },
            {
                text: `A seguir, algumas imagens do site:`
            },
            {
                imageSrc: "assets/imgs/project-imgs/regnacraft/1.png",
                imageAlt: "RegnaCraft Screenshot 1"
            },
            {
                imageSrc: "assets/imgs/project-imgs/regnacraft/2.png",
                imageAlt: "RegnaCraft Screenshot 2"
            },
            {
                imageSrc: "assets/imgs/project-imgs/regnacraft/3.png",
                imageAlt: "RegnaCraft Screenshot 3"
            },
            {
                imageSrc: "assets/imgs/project-imgs/regnacraft/4.png",
                imageAlt: "RegnaCraft Screenshot 4"
            },
            {
                imageSrc: "assets/imgs/project-imgs/regnacraft/5.png",
                imageAlt: "RegnaCraft Screenshot 5"
            },
            {
                imageSrc: "assets/imgs/project-imgs/regnacraft/6.png",
                imageAlt: "RegnaCraft Screenshot 6"
            }
        ]
    },
    "connect-med": {
        coverSrc: "assets/imgs/projects/connect-med-project.jpeg",
        title: "Connect Med",
        subtitle: "Esse texto contém: prints e repositório no GitHub",
        content: [
            {
                text: `O Connect Med é uma aplicação móvel revolucionária para agendamento médico, 
                desenvolvida utilizando as tecnologias React Native, Expo e Firebase. Este aplicativo 
                proporciona aos usuários uma experiência intuitiva e eficiente para agendar consultas médicas, 
                além de oferecer recursos abrangentes para médicos e pacientes.`
            },
            {
                text: `Para os pacientes, o Connect Med oferece uma variedade de recursos úteis, incluindo a 
                capacidade de pesquisar médicos por especialidade, selecionar horários disponíveis para agendamento, 
                visualizar um histórico detalhado de consultas passadas e futuras, cancelar agendamentos quando 
                necessário e gerenciar suas informações cadastrais de forma segura e conveniente.`
            },
            {
                text: `Por outro lado, os médicos têm acesso a uma interface especializada que lhes permite visualizar 
                e gerenciar suas consultas agendadas. Eles podem cancelar consultas, ajustar seus dados cadastrais, 
                como dias de atendimento semanal, intervalos de horário e preço das consultas. Além disso, os médicos 
                têm a flexibilidade de bloquear um dia inteiro na agenda ou apenas horários específicos, para se adaptarem 
                às suas necessidades individuais e disponibilidade.`
            },
            {
                text: `Com o Connect Med, tanto médicos quanto pacientes se beneficiam de uma plataforma inovadora que 
                simplifica e agiliza o processo de agendamento médico, proporcionando maior conveniência e eficiência 
                para todos os envolvidos.`
            },
            {
                url: "https://github.com/renanmaitan/ConnectMedApp",
                urlText: "Link do repositório"
            },
            {
                text: `A seguir, algumas imagens do aplicativo:`
            }, //13 imagens
            {
                imageSrc: "assets/imgs/project-imgs/connect-med/1.jpeg",
                imageAlt: "Connect Med Screenshot 1"
            },
            {
                imageSrc: "assets/imgs/project-imgs/connect-med/2.jpeg",
                imageAlt: "Connect Med Screenshot 2"
            },
            {
                imageSrc: "assets/imgs/project-imgs/connect-med/3.jpeg",
                imageAlt: "Connect Med Screenshot 3"
            },
            {
                imageSrc: "assets/imgs/project-imgs/connect-med/4.jpeg",
                imageAlt: "Connect Med Screenshot 4"
            },
            {
                imageSrc: "assets/imgs/project-imgs/connect-med/5.jpeg",
                imageAlt: "Connect Med Screenshot 5"
            },
            {
                imageSrc: "assets/imgs/project-imgs/connect-med/6.jpeg",
                imageAlt: "Connect Med Screenshot 6"
            },
            {
                imageSrc: "assets/imgs/project-imgs/connect-med/7.jpeg",
                imageAlt: "Connect Med Screenshot 7"
            },
            {
                imageSrc: "assets/imgs/project-imgs/connect-med/8.jpeg",
                imageAlt: "Connect Med Screenshot 8"
            },
            {
                imageSrc: "assets/imgs/project-imgs/connect-med/9.jpeg",
                imageAlt: "Connect Med Screenshot 9"
            },
            {
                imageSrc: "assets/imgs/project-imgs/connect-med/10.jpeg",
                imageAlt: "Connect Med Screenshot 10"
            },
            {
                imageSrc: "assets/imgs/project-imgs/connect-med/11.jpeg",
                imageAlt: "Connect Med Screenshot 11"
            },
            {
                imageSrc: "assets/imgs/project-imgs/connect-med/12.jpeg",
                imageAlt: "Connect Med Screenshot 12"
            },
            {
                imageSrc: "assets/imgs/project-imgs/connect-med/13.jpeg",
                imageAlt: "Connect Med Screenshot 13"
            }
        ]
    }
}

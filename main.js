const curriculo = {
    "cv": {
      "metadata": {
        "version": "1.0",
        "language": "pt-BR",
        "lastUpdated": "2026-11-05"
      },
      "personalInformation": {
        "fullName": "Vinicius Mendes da Silva",
        "professionalTitle": "Desenvolvedor Indie",
        "profilePhoto": "photo.jpeg",
        "email": "viniciusmendeszuao@gmail.com",
        "phone": "(11) XXXX-XXXX",
        "whatsapp": "(11) 9 1234-5678",
        "location": {
          "city": "Suzano",
          "state": "São Paulo",
          "country": "Brasil",
          "address": "Av. Mogi das Cruzes, 1001 - Parque Suzano, Suzano - SP, 08673-010"
        },
        "linkedin": "www.linkedin.com/in/vinicius-mendes-157632282/",
        "github": "https://github.com/viniciusmendeszuao-prog",
        "portfolio": "https://github.com/viniciusmendeszuao-prog?tab=repositories",
        "website": ""
      },
      "professionalSummary": {
        "description": "Foco em aprender a evoluir sempre para se tornar um profissional renomado e referência na área",
        "yearsOfExperience": 0.5,
        "mainSpecialization": "JavaScript",
        "careerObjective": "Conquistar meus sonhos pelo meu esforço"
      },
      "professionalExperience": [
        {
          "company": "Cartório de registro de imóveis",
          "position": "Auxiliar de cartório",
          "employmentType": "Arquivismo",
          "location": "Suzano",
          "startDate": "29/12/2024",
          "endDate": "",
          "current": true,
          "description": "Responsável por digitação e alimentação de banco de dados referente a proprietários de imóveis",
          "responsibilities": ["arquivamento de documentos e matrículas", "preenchimento de dados", "digitação de atos em matrículas", "atendimento ao público por telefone"],
          "achievements": ["desenvolvimento de leitura mais dinâmica", "comunicação interpessoal", "gestão de tempo e organização"],
          "technologies": ["MySQL", "Siscart", ".json", "arquivo em formato .doiweb"]
        }
      ],
      "education": [
        {
          "institution": "UNIPiaget",
          "degree": "1º semestre",
          "fieldOfStudy": "Análise e desenvolvimento de sistemas",
          "level": "intermediário",
          "startDate": "09/08/2026",
          "endDate": "16/12/2028",
          "current": true,
          "description": "Faculdade de ensino totalmente presencial, também conhecida como a melhor qualidade de ensino do Alto Tietê"
        }
      ],
      "skills": {
        "technical": [
          {
            "name": "JavaScript",
            "level": "Intermediário"
          }
        ],
        "behavioral": ["Paciente", "bom com pessoas e trabalho em equipe", "educado e comunicativo"],
        "tools": ["PC", "celular à disposição"],
        "methodologies": ["método tradicional"]
      },
      "languages": [
        {
          "name": "Inglês",
          "proficiency": "avançado"
        }
      ],
      "certifications": [],
      "projects": [],
      "courses": [],
      "additionalInformation": {
        "availability": "À disposição",
        "workModel": "Home Office",
        "travelAvailability": true,
        "additionalNotes": ""
      },
      "preferences": {
        "targetPositions": ["Analista Júnior"],
        "targetIndustries": ["Banco de dados", "Segurança de dados"],
        "preferredLocations": ["Brasil"],
        "preferredWorkModel": "CLT"
      }
    }
  }
  
  const cv = curriculo.cv
  
  const metadata = cv.metadata
  const pessoa = cv.personalInformation
  const resumo = cv.professionalSummary
  const experiencia = cv.professionalExperience[0]
  const formacao = cv.education[0]
  const habilidades = cv.skills
  const idioma = cv.languages[0]
  const adicional = cv.additionalInformation
  const preferencias = cv.preferences
  
  function preencher(id, valor) {
    document.getElementById(id).textContent = valor
  }
  
  function preencherLink(id, url) {
    document.getElementById(id).href = url.startsWith("http") ? url : "https://" + url
  }

  function preencherFoto(id, caminho) {
    const imagem = document.getElementById(id)
    if (caminho) {
      imagem.src = caminho
    } else {
      imagem.style.display = "none"
    }
  }
  
  
  preencherFoto("foto", pessoa.profilePhoto)
  preencher("nome", pessoa.fullName)
  preencher("titulo", pessoa.professionalTitle)
  preencher("cidade", pessoa.location.city + " - " + pessoa.location.state)
  preencher("email", pessoa.email)
  preencherLink("linkedin", pessoa.linkedin)
  preencherLink("github", pessoa.github)
  

  preencher("resumo", resumo.description)
  preencher("especializacao", resumo.mainSpecialization)
  preencher("objetivo", resumo.careerObjective)
  

  preencher("cargo", experiencia.position)
  preencher("empresa", experiencia.company)
  preencher("inicioExp", experiencia.startDate)
  preencher("localExp", experiencia.location)
  preencher("descricaoExp", experiencia.description)
  preencher("responsabilidades", experiencia.responsibilities.join(", "))
  preencher("conquistas", experiencia.achievements.join(", "))
  preencher("tecnologias", experiencia.technologies.join(", "))
  

  preencher("curso", formacao.fieldOfStudy)
  preencher("instituicao", formacao.institution)
  preencher("grau", formacao.degree)
  preencher("inicioCurso", formacao.startDate)
  preencher("fimCurso", formacao.endDate)
  preencher("descricaoCurso", formacao.description)
  

  preencher("tecnicas", habilidades.technical.map(s => s.name + " (" + s.level + ")").join(", "))
  preencher("comportamentais", habilidades.behavioral.join(", "))
  preencher("ferramentas", habilidades.tools.join(", "))
  preencher("metodologias", habilidades.methodologies.join(", "))
  

  preencher("idioma", idioma.name)
  preencher("nivelIdioma", idioma.proficiency)
  

  preencher("disponibilidade", adicional.availability)
  preencher("modelo", adicional.workModel)
  

  preencher("cargoAlvo", preferencias.targetPositions.join(", "))
  preencher("areaAlvo", preferencias.targetIndustries.join(", "))
  preencher("contrato", preferencias.preferredWorkModel)
  
  
  preencher("atualizado", metadata.lastUpdated)
# ISEP-ARQSI-2020/2021

Repositório para os projetos de ARQSI.

# Projeto Integrador
------------------------------------------------
## Use Cases:
1. Como data administrator, quero importar nós, percursos, linhas, tipos de viatura e tipos de tripulantes de dum ficheiro .glx.
2. Como data administrator, quero criar nós da rede indicando o seu nome, se é ou não uma estação de recolha ou ponto de rendição e as suas coordenadas.
3. Como data administrator, quero criar linha indicando o seu código (ex., “C”), nome (ex., “Linha Verde”) e os seus nós terminais (ex., Campanhã, ISMAI), bem como eventuais restrições sobre o tipo de viatura e tipo de tripulante.
4. Como data administrator, quero definir um percurso de ida/volta de uma linha. Definir os vários segmentos que constituem um percurso indicando a ordem e a distância e tempo de viagem de cada segmento.
5. Como data administrator, quero criar tipo de tripulante, ex., “motorista sénior com conhecimento de línguas estrangeiras”. Um tipo de tripulante é uma descrição livre (não catalogada) de características. 
6.	Como data administrator, quero criar tipo de viatura (ex., “minibus a gasóleo”), indicando o seu tipo de combustível (i.e., Diesel, Gasolina, Elétrico, GPL, Gás), autonomia, custo por quilómetro, consumo médio e velocidade média.  
7.	Como data administrator, quero listar nós de rede. O utilizador deve poder ordenar por código/nome e filtrar por código/nome (ex., todos os nós cujo nome começa por “Par”) os resultados. 
8.	Como data administrator, quero listar linhas. O utilizador deve poder ordenar por código/nome e filtrar os resultados por código/nome (ex., todos as linhas cujo nome começa por “Par”). 
9.	Como data administrator, quero listar percursos duma linha. 
10.	Como data administrator, quero importar viagens, serviços de viatura, blocos de trabalho e serviços de tripulante de dum ficheiro .glx. 
11.	Como data administrator, quero definir viatura. 
12.	Como data administrator, quero definir tripulante (nome, data de nascimento, número de carta de condução, data de validade de licença de condução) associando um ou mais tipos de tripulante. 
13.	Como data administrator, quero criar viagem ad hoc para uma dada linha indicando a hora de saída e o percurso. 
14.	Como data admnistrator quero criar as viagens para uma linha dando a hora de início, a frequência e o número de viagens, o percurso de ida e o de volta.
15.	Como data administrator quero criar um serviço de viatura ad hoc.
16.	Como data administrator quero criar um serviço de tripulante ad hoc.
17.	Como data administrator, quero criar os blocos de trabalho de um serviço de viatura com base na duração de cada bloco e número de blocos máximos e consecutivos. 
18.	Como data administrator ou cliente quero listar as viagens de uma linha.
19.  Como data administrator, quero listar serviço de viatura num determinado dia.
20.  Como data administrator, quero listar serviço de tripulante num determinado dia.

---------------------------

## Views (Níveis 1, 2, 3)

- [Views](#views)
	- **Nível 1**
		- [Vista Lógica](./Semester_Project/Wiki/diagramas/Design/Level_1/vistaLogicaN1.md)
		- [Vista Física](./Semester_Project/Wiki/diagramas/Design/Level_1/VF_1.md)
        - [Vista de Implementação](./Semester_Project/Wiki/diagramas/Design/Level_1/VI.md)
		- **Vista de Processos**
			- [SSD UC1](./Semester_Project/Wiki/diagramas/Design/Level_1/UC1.md)
			- [SSD UC2](./Semester_Project/Wiki/diagramas/Design/Level_1/UC2.md)
			- [SSD UC3](./Semester_Project/Wiki/diagramas/Design/Level_1/UC3.md)
			- [SSD UC4](./Semester_Project/Wiki/diagramas/Design/Level_1/UC4.md)
			- [SSD UC5](./Semester_Project/Wiki/diagramas/Design/Level_1/UC5.md)
			- [SSD UC6](./Semester_Project/Wiki/diagramas/Design/Level_1/UC6.md)
			- [SSD UC7](./Semester_Project/Wiki/diagramas/Design/Level_1/UC7.md)
			- [SSD UC8](./Semester_Project/Wiki/diagramas/Design/Level_1/UC8.md)
			- [SSD UC9](./Semester_Project/Wiki/diagramas/Design/Level_1/UC9.md)
			- [SSD UC10](./Semester_Project/Wiki/diagramas/Design/Level_1/UC10.md)
			- [SSD UC11](./Semester_Project/Wiki/diagramas/Design/Level_1/UC11.md)
			- [SSD UC12](./Semester_Project/Wiki/diagramas/Design/Level_1/UC12.md)
			- [SSD UC13](./Semester_Project/Wiki/diagramas/Design/Level_1/UC13.md)
			- [SSD UC14](./Semester_Project/Wiki/diagramas/Design/Level_1/UC14.md)
			- [SSD UC15](./Semester_Project/Wiki/diagramas/Design/Level_1/UC15.md)
			- [SSD UC16](./Semester_Project/Wiki/diagramas/Design/Level_1/UC16.md)
			- [SSD UC17](./Semester_Project/Wiki/diagramas/Design/Level_1/UC17.md)
			- [SSD UC18](./Semester_Project/Wiki/diagramas/Design/Level_1/UC18.md)
			- [SSD UC19](./Semester_Project/Wiki/diagramas/Design/Level_1/UC19.md)
			- [SSD UC20](./Semester_Project/Wiki/diagramas/Design/Level_1/UC20.md)
	- **Nível 2**
		- [Vista Lógica](./Semester_Project/Wiki/diagramas/Design/Level_2/VL.md)
        - [Vista de Implementação](./Semester_Project/Wiki/diagramas/Design/Level_2/VI.md)
		- [Vista Física](./Semester_Project/Wiki/diagramas/Design/Level_2/VF.md)
		- **Vista de Processos**
			- [SSD UC1](./Semester_Project/Wiki/diagramas/Design/Level_2/UC1.md)
			- [SSD UC2](./Semester_Project/Wiki/diagramas/Design/Level_2/UC2.md)
			- [SSD UC3](./Semester_Project/Wiki/diagramas/Design/Level_2/UC3.md)
			- [SSD UC4](./Semester_Project/Wiki/diagramas/Design/Level_2/UC4.md)
			- [SSD UC5](./Semester_Project/Wiki/diagramas/Design/Level_2/UC5.md)
			- [SSD UC6](./Semester_Project/Wiki/diagramas/Design/Level_2/UC6.md)
			- [SSD UC7](./Semester_Project/Wiki/diagramas/Design/Level_2/UC7.md)
			- [SSD UC8](./Semester_Project/Wiki/diagramas/Design/Level_2/UC8.md)
			- [SSD UC9](./Semester_Project/Wiki/diagramas/Design/Level_2/UC9.md)
			- [SSD UC10](./Semester_Project/Wiki/diagramas/Design/Level_2/UC10.md)
			- [SSD UC11](./Semester_Project/Wiki/diagramas/Design/Level_2/UC11.md)
			- [SSD UC12](./Semester_Project/Wiki/diagramas/Design/Level_2/UC12.md)
			- [SSD UC13](./Semester_Project/Wiki/diagramas/Design/Level_2/UC13.md)
			- [SSD UC14](./Semester_Project/Wiki/diagramas/Design/Level_2/UC14.md)
			- [SSD UC15](./Semester_Project/Wiki/diagramas/Design/Level_2/UC15.md)
			- [SSD UC16](./Semester_Project/Wiki/diagramas/Design/Level_2/UC16.md)
			- [SSD UC17](./Semester_Project/Wiki/diagramas/Design/Level_2/UC17.md)
			- [SSD UC18](./Semester_Project/Wiki/diagramas/Design/Level_2/UC18.md)
			- [SSD UC19](./Semester_Project/Wiki/diagramas/Design/Level_2/UC19.md)
			- [SSD UC20](./Semester_Project/Wiki/diagramas/Design/Level_2/UC20.md)
		- [Mapeamento Vista Física-Implementação](./Semester_Project/Wiki/diagramas/Design/Level_2/VI_F.md)
		- [Mapeamento Vista Lógica-Implementação](./Semester_Project/Wiki/diagramas/Design/Level_2/VL_I.md)
	- **Nível 3**
		- [Vista Lógica](./Semester_Project/Wiki/diagramas/Design/Level_3/VL.md)
		- [Vista de Implementação](./Semester_Project/Wiki/diagramas/Design/Level_3/VI.md)
		- [Vista Física](./Semester_Project/Wiki/diagramas/Design/Level_3/VF.md)
		- **Vista de Processos**
			- [SSD UC1](./Semester_Project/Wiki/diagramas/Design/Level_3/UC1.md)
			- [SSD UC2](./Semester_Project/Wiki/diagramas/Design/Level_3/UC2.md)
			- [SSD UC3](./Semester_Project/Wiki/diagramas/Design/Level_3/UC3.md)
			- [SSD UC4](./Semester_Project/Wiki/diagramas/Design/Level_3/UC4.md)
			- [SSD UC5](./Semester_Project/Wiki/diagramas/Design/Level_3/UC5.md)
			- [SSD UC6](./Semester_Project/Wiki/diagramas/Design/Level_3/UC6.md)
			- [SSD UC7](./Semester_Project/Wiki/diagramas/Design/Level_3/UC7.md)
			- [SSD UC8](./Semester_Project/Wiki/diagramas/Design/Level_3/UC8.md)
			- [SSD UC9](./Semester_Project/Wiki/diagramas/Design/Level_3/UC9.md)
			- [SSD UC10](./Semester_Project/Wiki/diagramas/Design/Level_3/UC10.md)
			- [SSD UC11](./Semester_Project/Wiki/diagramas/Design/Level_3/UC11.md)
			- [SSD UC12](./Semester_Project/Wiki/diagramas/Design/Level_3/UC12.md)
			- [SSD UC13](./Semester_Project/Wiki/diagramas/Design/Level_3/UC13.md)
			- [SSD UC14](./Semester_Project/Wiki/diagramas/Design/Level_3/UC14.md)
			- [SSD UC15](./Semester_Project/Wiki/diagramas/Design/Level_3/UC15.md)
			- [SSD UC16](./Semester_Project/Wiki/diagramas/Design/Level_3/UC16.md)
			- [SSD UC17](./Semester_Project/Wiki/diagramas/Design/Level_3/UC17.md)
			- [SSD UC18](./Semester_Project/Wiki/diagramas/Design/Level_3/UC18.md)
			- [SSD UC19](./Semester_Project/Wiki/diagramas/Design/Level_3/UC19.md)
			- [SSD UC20](./Semester_Project/Wiki/diagramas/Design/Level_3/UC20.md)

--------------------------------------------------------

# Views

Será adotada a combinação de dois modelos de representação arquitetural: C4 e 4+1.

O Modelo de Vistas 4+1 [[Krutchen-1995]](References.md#Kruchten-1995) propõe a descrição do sistema através de vistas complementares permitindo assim analisar separadamente os requisitos dos vários stakeholders do software, tais como utilizadores, administradores de sistemas, project managers, arquitetos e programadores. As vistas são deste modo definidas da seguinte forma:

- Vista lógica: relativa aos aspetos do software visando responder aos desafios do negócio;
- Vista de processos: relativa ao fluxo de processos ou interações no sistema;
- Vista de desenvolvimento: relativa à organização do software no seu ambiente de desenvolvimento;
- Vista física: relativa ao mapeamento dos vários componentes do software em hardware, i.e. onde é executado o software;
- Vista de cenários: relativa à associação de processos de negócio com atores capazes de os espoletar.

O Modelo C4 [[Brown-2020]](References.md#Brown-2020)[[C4-2020]](References.md#C4-2020) defende a descrição do software através de quatro níveis de abstração: sistema, contentor, componente e código. Cada nível adota uma granularidade mais fina que o nível que o antecede, dando assim acesso a mais detalhe de uma parte mais pequena do sistema. Estes níveis podem ser equiparáveis a mapas, e.g. a vista de sistema corresponde ao globo, a vista de contentor corresponde ao mapa de cada continente, a vista de componentes ao mapa de cada país e a vista de código ao mapa de estradas e bairros de cada cidade.
Diferentes níveis permitem contar histórias diferentes a audiências distintas.

Os níveis encontram-se definidos da seguinte forma:
- Nível 1: Descrição (enquadramento) do sistema como um todo;
- Nível 2: Descrição de contentores do sistema;
- Nível 3: Descrição de componentes dos contentores;
- Nível 4: Descrição do código ou partes mais pequenas dos componentes (e como tal, não será abordado neste DAS/SAD).

Pode-se dizer que estes dois modelos se expandem ao longo de eixos distintos, sendo que o Modelo C4 apresenta o sistema com diferentes níveis de detalhe e o Modelo de Vista 4+1 apresenta o sistema de diferentes perspetivas. Ao combinar os dois modelos torna-se possível representar o sistema de diversas perspetivas, cada uma com vários níveis de detalhe.

Para modelar/representar visualmente, tanto o que foi implementado como as ideias e alternativas consideradas, recorre-se à Unified Modeling Language (UML) [[UML-2020]](References.md#UML-2020) [[UMLDiagrams-2020]](References.md#UMLDiagrams-2020).

-------------------------------------------------

### Modelo de Domínio
![Modelo Domínio](./Semester_Project/Wiki/diagramas/Design/md.svg)

------------------------------------------------

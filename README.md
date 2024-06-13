## Documentação do Site de Geolocalização

Este documento descreve um site que permite a transformação de coordenadas e endereços IP em informações de geolocalização, utilizando as APIs NeoIPfy, Nominatim e Leaflet.

### Visão Geral

O site de geolocalização é uma plataforma que oferece aos usuários a capacidade de obter informações de geolocalização com base em coordenadas geográficas ou endereços IP. A plataforma integra três serviços principais: NeoIPfy, Nominatim e Leaflet.

#### Funcionalidades Principais

1. **Transformação de Coordenadas:** Os usuários podem inserir coordenadas geográficas (latitude e longitude) e obter informações detalhadas de geolocalização, como país, estado, cidade e endereço.

2. **Consulta de Endereço IP:** Os usuários podem inserir um endereço IP e obter informações sobre a localização geográfica associada, incluindo país, cidade e coordenadas aproximadas.

3. **Mapa Interativo:** O site incorpora um mapa interativo usando a biblioteca Leaflet, que exibe as informações de geolocalização em um mapa.

### Integração com APIs

O site faz uso das seguintes APIs:

1. **NeoIPfy API:**
   - A API NeoIPfy é utilizada para consulta de informações de geolocalização com base em endereços IP.
   - Os usuários inserem um endereço IP, e o site envia uma solicitação para a NeoIPfy API, que retorna dados de localização, incluindo país, cidade e coordenadas.

2. **Nominatim API:**
   - A API Nominatim é usada para transformar coordenadas geográficas em informações de endereço.
   - Os usuários inserem coordenadas, e o site envia uma solicitação para a Nominatim API, que retorna informações detalhadas de geolocalização.

3. **Leaflet (Biblioteca):**
   - A biblioteca Leaflet é incorporada ao site para exibir as informações de geolocalização em um mapa interativo.
   - Os dados obtidos das APIs são marcados no mapa, proporcionando uma representação visual dos resultados.

### Fluxo de Uso

1. **Consulta de Coordenadas:**
   - O usuário insere as coordenadas geográficas (latitude e longitude) na interface.
   - O site envia uma solicitação para a API Nominatim, que retorna informações de endereço.
   - As informações de geolocalização são exibidas na interface, incluindo país, estado, cidade e endereço.
   - As coordenadas são marcadas no mapa Leaflet.

2. **Consulta de Endereço IP:**
   - O usuário insere um endereço IP na interface.
   - O site envia uma solicitação para a API NeoIPfy, que retorna informações de geolocalização.
   - As informações de geolocalização são exibidas na interface, incluindo país, cidade e coordenadas aproximadas.
   - A localização é marcada no mapa Leaflet.

3. **Mapa Interativo:**
   - O mapa Leaflet permite que os usuários interajam com os resultados de geolocalização.
   - Os marcadores no mapa fornecem informações adicionais ao serem clicados.

### Requisitos Técnicos

- Linguagens de Programação: HTML, CSS, JavaScript/jQuery.
- Bibliotecas/Frameworks: Leaflet.
- APIs Externas: NeoIPfy API, Nominatim API.
- Hospedagem: O site deve ser hospedado em um servidor web acessível publicamente.

### Considerações Finais

Este site de geolocalização oferece uma maneira eficaz de transformar coordenadas geográficas e endereços IP em informações de localização, proporcionando aos usuários uma experiência interativa e informativa. Certifique-se de configurar as chaves de API apropriadas e implementar medidas de segurança para proteger os dados do usuário.

### Contato

email: luizzleandro827@gmail.com

linkedin: [linkedin](https://www.linkedin.com/in/leandroluizz/)

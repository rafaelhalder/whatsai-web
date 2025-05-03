components/: UI reutilizável e desacoplada da lógica.

features/
  [feature]/
    components/: Componentes específicos da feature.
    hooks/: Hooks reutilizáveis da feature.
    services/: Comunicação com APIs da feature.
    store/: Gerenciamento de estado da feature.
    types/: Tipos e interfaces TypeScript da feature.
    utils/: Funções auxiliares da feature.

pages/: Páginas principais da aplicação (views), composição de componentes, lógica de página, integração com rotas globais.

hooks/: Hooks globais reutilizáveis.
services/: Comunicação com APIs globais.
types/: Tipos e interfaces TypeScript globais.
utils/: Funções auxiliares globais.
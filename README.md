Проект: TODO-LIST

Запуск и сборка

Требования:

- Node.js 18+ и npm (или другой менеджер пакетов: pnpm/yarn).

Установить зависимости:

```bash
npm install
```

Локальная разработка (dev сервер):

```bash
npm run dev
```

Структура репозитория (актуальна для этого каталога)

├── package.json            # метаданные проекта, зависимости и скрипты
├── vite.config.ts          # конфигурация Vite (dev server / build)
├── tsconfig.json           # TypeScript настройки проекта
├── .eslintrc.js            # правила ESLint
├── .prettierrc             # правила форматирования Prettier
├── .gitignore              # файлы/папки, игнорируемые Git
├── README.md               # этот файл — документация проекта
├── public/
│ └── index.html            # HTML-шаблон приложения
└── src/
├── main.tsx                # точка входа: рендер React-приложения
├── App.tsx                 # корневой компонент приложения, маршруты/общая разметка
├── index.css               # глобальные стили / reset
├── assets/                 # статические ресурсы: изображения, шрифты, иконки
│ ├── fonts/                # кастомные шрифты
│ └── images/               # изображения (например, логотип)
├── components/             # переиспользуемые UI-компоненты (атомы/молекулы)
│ ├── ui/                   # базовые элементы интерфейса
│ │ ├── Button/             # кнопка: визуал и поведение
│ │ │ ├── Button.tsx
│ │ │ └── styles/index.module.css
│ │ ├── Checkbox/           # чекбокс: переключение состояния задач
│ │ │ ├── Checkbox.tsx
│ │ │ └── styles/index.module.css
│ │ ├── icon/               # компонент для отрисовки иконок
│ │ │ ├── Icon.tsx
│ │ │ └── styles/index.module.css
│ │ └── input/              # текстовые/форма элементы ввода
│ │     ├── Input.tsx
│ │     └── styles/index.module.css
│ └── layout/               # компоненты верхнего/нижнего уровня страницы
│   ├── Header/             # шапка приложения (логотип, навигация)
│   │   ├── Header.tsx
│   │   └── styles/index.module.css
│   └── Footer/             # нижняя часть страницы (авторы, ссылки)
│       ├── Footer.tsx
│       └── styles/index.module.css
├── features/               # доменно-ориентированные фичи (функциональные блоки)
│ └── todos/                # фича "todos" — всё, что связано с задачами
│ ├── components/           # компоненты, специфичные для todos
│ │ ├── TodoInput/          # ввод новой задачи (поле + кнопка)
│ │ │   ├── TodoInput.tsx
│ │ │   └── styles/index.module.css
│ │ ├── TodoList/           # отображение списка задач
│ │ │   ├── TodoList.tsx
│ │ │   └── styles/index.module.css
│ │ ├── TodoItem/           # отдельный элемент списка: чекбокс, текст, удаление
│ │ │   ├── TodoItem.tsx
│ │ │   └── styles/index.module.css
│ │ ├── FilterBar/          # фильтры (все / активные / выполненные)
│ │ │   ├── FilterBar.tsx
│ │ │   └── styles/index.module.css
│ │ └── EmptyState/         # пустое состояние, когда задач нет
│ │     ├── EmptyState.tsx
│ │     └── styles/index.module.css
│ ├── hooks/                # специфичные хуки фичи todos
│ │     └── useTodos.ts     # управление состоянием задач (добавление/удаление/фильтрация)
│ ├── model/                # слои модели/сервисов для работы с данными
│ │     ├── todos.service.ts # сохранение/загрузка (например localStorage)
│ │     └── todos.types.ts  # типы/интерфейсы для задач
│ └── index.ts              # точка экспорта фичи
├── hooks/                  # общие переиспользуемые хуки
│   └── useDebounce.ts      # debounce для оптимизации ввода
├── utils/                  # утилиты и помощники
│   └── format.ts           # форматирование дат/строк и т.п.
├── types/                  # глобальные типы/декларации
│   └── index.d.ts
└── services/               # внешние сервисы / API-обёртки
    └── api.ts              # функции для вызова внешних API

📺 Cartoons Hub

A small React + TypeScript project built with Vite and styled using Tailwind CSS.
Users can search, filter by genre, paginate results, and view cartoon details in a modal.

🚀 Features

🔍 Search by title

🎭 Filter cartoons by genre (supports multiple genres per cartoon)

📄 Pagination (8 cartoons per page)

📖 Detail modal with description and image

⚡ Built with Vite for fast dev experience

🎨 Styled with Tailwind CSS

🛠️ Installation & Setup
Prerequisites

Node.js
 v18+ (recommended v20)

npm or yarn

1. Clone the repo
git clone  https://github.com/mathematician851/my-cartoons.git
cd my-cartoons

2. Install dependencies
npm install

3. Run development server
npm run dev


App will be available at:
👉 http://localhost:5173

📦 Build for Production
npm run build


Preview build locally:

npm run preview

📂 Project Structure
cartoons-explorer/
├── src/
│   ├── api/
│   │   └── cartoons.ts        # API fetch + Cartoon type
│   ├── components/
│   │   ├── CartoonCard.tsx    # Single card component
│   │   ├── CartoonsGrid.tsx   # Grid of cards
│   │   └── SearchBar.tsx      #Search input
        └── SkeletonCard.tsx   # Loading state waiting for the cartoons
│   ├── App.tsx                # Main app (search, filter, pagination, modal)
│   └── main.tsx               # React entry
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json

📖 Usage

Use the sidebar to select a genre (e.g. Action, Adventure).

Use the search bar to find cartoons by name.

Navigate with Prev / Next buttons.

Click on a cartoon card to open a detail modal.

🧩 Tech Stack

React 19 (with hooks)

TypeScript

Vite

Tailwind CSS

Axios (for API requests)

🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

📜 License

This project is licensed under the MIT License.

developed by: mathekcode technologies
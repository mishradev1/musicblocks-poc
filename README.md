# Music Blocks 4

Music Blocks is a visual programming environment for music creation and exploration. It allows users to create music and understand programming concepts through a block-based interface.

<p align="center">
  <img src="https://raw.githubusercontent.com/sugarlabs/musicblocks/master/documentation/getting-started.png" alt="Music Blocks Screenshot" width="600">
</p>

## 🎵 About

Music Blocks 4 is a visual programming language inspired by Scratch, designed specifically for music education. It lets users create music programs by connecting colorful blocks, making both music theory and programming concepts accessible to beginners of all ages.

This project is part of the [Sugar Labs](https://sugarlabs.org/) ecosystem, continuing the educational mission of the One Laptop Per Child initiative.

## ✨ Features

- **Visual Block-Based Programming**: Create music through an intuitive drag-and-drop interface
- **Real-Time Execution**: Watch your program execute in real-time with visual feedback
- **Music Theory Learning**: Explore scales, rhythms, and composition through interactive programming
- **Collaborative Creation**: Share and remix musical creations with others
- **Cross-Platform**: Works on any device with a modern web browser

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/musicblocks-poc.git
   cd musicblocks-poc
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 🧩 Project Structure

```
musicblocks-poc/
├── app/                  # Next.js app directory
│   ├── workspace/        # Workspace page for block programming
│   └── page.tsx          # Home page
├── components/           # Reusable React components
│   ├── ui/               # UI components (buttons, dialogs, etc.)
│   └── workspace/        # Workspace-specific components
├── lib/                  # Utility functions and data
│   ├── api.ts            # API functions
│   └── sampleData.ts     # Sample programs and blocks
├── public/               # Static assets
└── README.md             # Project documentation
```

## 🧪 Development

### Commands

- `npm run dev`: Start the development server
- `npm run build`: Build for production
- `npm run start`: Start the production server
- `npm run lint`: Run ESLint to check code quality

### Adding New Blocks

To add new blocks to Music Blocks:

1. Define the block in `lib/sampleData.ts` with a unique ID, name, description, and color
2. Implement the block's functionality in the appropriate execution handlers

## 📝 Contributing

We welcome contributions to Music Blocks! To contribute:

1. Fork the repository
2. Create a new branch for your feature
3. Add your changes
4. Submit a pull request

### Code of Conduct

This project adheres to the [Sugar Labs Code of Conduct](https://github.com/sugarlabs/sugar-docs/blob/master/src/CODE_OF_CONDUCT.md).

## 🔗 Related Projects

- [Original Music Blocks](https://github.com/sugarlabs/musicblocks)
- [Sugar Labs](https://github.com/sugarlabs)
- [Turtle Blocks](https://github.com/sugarlabs/turtleblocksjs)

## 📄 License

Music Blocks is licensed under the [Apache 2.0 License](LICENSE).

## 🙏 Acknowledgements

- [Sugar Labs](https://sugarlabs.org/) for the original Music Blocks project
- [Walter Bender](https://github.com/walterbender) and the original Music Blocks contributors
- [Next.js](https://nextjs.org/) for the web framework
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

<p align="center">
  Made with ❤️ for music education and creative coding
</p>

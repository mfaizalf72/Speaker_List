#Conference Speaker Showcase

This project is a conference speaker showcase web component built using React and Vite. It displays a list of featured speakers for an event in a horizontal carousel format, allowing users to view speaker details through a popover on click. The project demonstrates key frontend principles, including responsive design, accessibility, and BEM-based SCSS styling.

Features
Horizontal Carousel: Displays speaker cards in a scrollable carousel, with navigation buttons for browsing.
Interactive Popover: Shows additional speaker details when a speaker card is clicked, without obstructing the card layout.
Responsive Design: The layout is responsive, adjusting to different screen sizes while keeping all elements accessible and well-positioned.
Accessible Search: A search icon is available in the top-right corner to allow quick searches for specific speakers.
Semantic HTML and SCSS BEM Naming: Follows semantic HTML for accessibility and uses the BEM methodology for modular, maintainable CSS styling.
Getting Started
These instructions will help you set up and run the project on your local machine.

Prerequisites
  Node.js (v14 or higher)
  npm or yarn package manager
Installation
  Clone the repository:
    git clone https://github.com/yourusername/conference-speaker-showcase.git
    cd conference-speaker-showcase
    
  Install dependencies:
    npm install
    or 
    if you use yarn:
      yarn install
      
Running the Application
  To start the development server:
    npm run dev
    or if you use yarn:
      yarn dev
      
Open your browser and go to http://localhost:3000 to view the app.

Build for Production
  To create an optimized production build:
    npm run build
    or if you use yarn:
      yarn build
Project Structure
/src: Contains the main source code for the app.
  /components: All components for the app, including SpeakerCard, SpeakerList, and SpeakerPopover.
  App.jsx: Root component of the application.
  index.css: Global styles for the app.
  main.jsx: Entry point for the React app.
Components
  SpeakerList
    Displays the main list of speakers in a horizontal carousel format, with next and previous buttons for navigation.

  SpeakerCard
    Displays individual speaker details, including the name, title, company, and image. Clicking on the card opens a popover with additional information.

  SpeakerPopover
    Displays additional details about the speaker in a compact popover, positioned between the heading and speaker list.

  Styling
    The project uses SCSS with the BEM naming convention to ensure modular and maintainable styles. Styles for each component are stored in individual SCSS files.

  Accessibility
    Semantic HTML: Ensures that all elements are correctly structured for screen readers and assistive devices.
    Keyboard Navigation: Components are designed to be navigable using the keyboard, with aria labels where needed.
    Responsive Search Icon: The search icon adapts to screen size and expands on hover to display the search input.

# CreativeInk (Agency Blogging Platform)

> **Live Demo:** [creativeink.vercel.app](https://creativeink.vercel.app/)

---

## Screenshot

![Screenshot](/src/images/screenshot.png)

---

## Overview

Agency Blogging Platform is a sleek, modern agency portfolio website with built-in blogging capabilities. It’s designed for creative professionals who want to showcase their work and publish blog posts seamlessly.

Built with Next.js, styled using Tailwind CSS and shadcn/ui, and leveraging MongoDB for backend data storage, this platform offers a solid starting point for portfolio and content-driven sites.

---

## Features

-   **Landing Portfolio Page**: Highlight your services, creative work, and team.
-   **Blog Functionality**: Create, edit, list, and view blog posts with ease.
-   **User Authentication**: Powered by Clerk for secure sign-in and access control.
-   **Modern UI/UX**: Built with shadcn/ui and Tailwind CSS for responsive, design-friendly components.
-   **Flexible Data Storage**: Powered by MongoDB for structured and scable content.

---

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
-   **Authentication**: [Clerk](https://clerk.dev/)
-   **Database**: MongoDB (via `utils` folder)
-   **Language**: JavaScript + React

---

## Getting Started

1.  **Clone the repo**

    ```bash
    git clone https://github.com/sajid-islam/Agency-Blogging-Platform.git
    cd Agency-Blogging-Platform
    npm install
    ```

2.  **Set up environment variables**

    ```bash
      NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key_here
      MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/your_database_name
      SIGNING_SECRET=your_signing_secret_here
      NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
      NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
      CLERK_SECRET_KEY=your_clerk_secret_key_here
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
    ```

3.  **Run the development server**

    ```bash
    npm run dev

    ```

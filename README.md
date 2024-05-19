# Fullstack Internship Assignment - Frontend

## Overview

This repository contains the frontend code for a full-stack application that allows users to upload PDF documents, ask questions regarding their content, and receive answers. Users can upload multiple PDF files, ask questions related to the content of the uploaded files, and receive answers in real-time. The frontend is built using React and Tailwind CSS.

## Demo
https://www.loom.com/share/e229234a4f8f42acbcc2f7512faf428d?sid=d6fbc404-21bc-4f37-b856-5811034a629d

## Features

- **PDF Upload**: Users can upload multiple PDF documents by clicking on the "Upload PDF" button.
- **Ask Questions**: Users can enter questions related to the content of the uploaded PDFs.
- **Receive Answers**: Users receive answers to their questions, which are displayed on the screen.
- **Follow-up Questions**: Users can ask follow-up questions on the same document.
- **Persistent Questions**: Users can ask questions about previously uploaded files, and the application will answer based on the stored content for that particular session.

## Tools and Technologies

- **Framework**: React
- **Styling**: Tailwind CSS

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   
   ```bash
   https://github.com/jayprakash25/AI-PDF-Frontend.git
   cd AI-PDF-Frontend

2. **Install dependencies:**:
   
   ```bash
   npm install
      # or
   yarn install

3. **Run the application:**:
   
   ```bash
   npm start
    # or
    yarn start


# Application Architecture

## Components

1. **Navbar Component**: This component allows users to upload multiple PDF documents. It sends a POST request to the backend server with the files.

2. **TextField Component**: This component provides an interface for users to enter questions. It sends a POST request to the backend server with the question and the identifier of the uploaded PDF.

3. **Chat component**: This component displays the answer returned from the backend server.

## Workflow

### Uploading PDFs:

1. Users click the "Upload PDF" button to select and upload PDF files.
2. The frontend sends a POST request to the backend server with the uploaded files.
3. The backend processes the files and stores them, returning a success response to the frontend.

### Asking Questions:

1. Users enter a question in the input field and submits it.
2. The frontend sends a POST request to the backend server with the question.
3. The backend processes the question, finds the answer from the vector store, and sends the answer back to the frontend.
4. The frontend displays the answer on the screen.








   

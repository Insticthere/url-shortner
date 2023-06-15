# URL Shortener

The URL Shortener is a simple web application that allows you to shorten long URLs into shorter, more manageable links. This README provides instructions on how to set up and run the URL shortener using MongoDB as the database.

## Prerequisites

Before running the URL shortener, ensure that you have the following prerequisites installed:

- Node.js (v12 or higher)
- MongoDB (v4.0 or higher)

## Installation

1. Clone this repository to your local machine using the following command:
   ```
   git clone https://github.com/Insticthere/url-shortner
   ```

2. Navigate to the cloned directory:
   ```
   cd url-shortener
   ```

3. Install the required dependencies using npm:
   ```
   npm install
   ```

## Configuration

1. Open the `.env.example` file in the project's root directory and rename it to .env .

2. Set the `MONGO_URI` variable to your MongoDB connection URL. 

## Running the Application

Once you have completed the installation and configuration steps, you can run the URL shortener using the following command:

```
npm run dev
```

The application should now be running on `http://localhost:3000`. You can access it through your web browser.

## Usage

To use the URL shortener, follow these steps:

1. Open your web browser and navigate to `http://localhost:3000`.

2. Enter a long URL in the input field and click the "Shorten" button.

3. The application will generate a shortened URL for you. You can copy and share this URL with others.

4. When someone accesses the shortened URL, they will be redirected to the original long URL.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
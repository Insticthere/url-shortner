import { useState } from 'react';
import Head from "next/head";
import axios from 'axios';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState(null);

  const handleShorten = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`/api/upload?url=${url}`);

      if (response.status === 200) {
        const data = response.data;
        setCopied(true);
        setUrl(data.id);
        navigator.clipboard.writeText(window.location.origin + '/' + data.id);
      } else {
        console.log('Error occurred while shortening URL.');
      }
    } catch (error) {
      console.log(error);
      console.log('Error occurred while connecting to the server.');
    }
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setCopied(false);
  };

  return (
    <>
    <Head>
      <title>Url-Shorten</title>
    </Head>
    <main className="flex min-h-screen flex-col justify-center items-center bg-zinc-950 text-white">
      <div>
        <form onSubmit={handleShorten}>
          <input
            type="text"
            id="fname"
            className={`p-2 rounded-l-md bg-zinc-900 !outline-none appearance-none border-transparent focus:border-transparent focus:ring-0 ${
              copied ? 'pr-16' : ''
            }`}
            name="firstname"
            placeholder="URL"
            required
            onChange={handleUrlChange}
          />
          <button
            type="submit"
            className="bg-zinc-800 hover: text-white p-2 rounded-r-md"
          >
            Shorten it
          </button>
        </form>
        {copied && (
          <div className="mt-2 bg-green-500 p-2 rounded-md">Link copied!</div>
        )}
      </div>
    </main>
  </>
  );
}
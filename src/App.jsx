import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState('');

  const handleShorten = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASEURL}/u/upload`, {
        url : url,
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response)
      const data = response.data;
      const link = window.location.origin + '/' + data.id;
      if (response.status === 200) {
        setCopied({ status: `Link : ${link} `, condition: true });
        navigator.clipboard.writeText(link);
      } else {
        setCopied({ status: data.error, condition: false });
      }
    } catch (error) {
      setCopied({ status: error.response.data.error, condition: false });
    }
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setCopied(false);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col justify-center items-center bg-zinc-950 text-white">
        <div>
          <form onSubmit={handleShorten}>
            <input
              type="text"
              id="fname"
              className={`p-2 rounded-l-md bg-zinc-900 !outline-none appearance-none border-transparent focus:border-transparent focus:ring-0 w-72`}
              name="firstname"
              placeholder="URL"
              required
              value={url}
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
            <div className={`mt-2  p-2 rounded-md ${copied.condition ? "bg-green-500" : "bg-red-600"}`}>{copied.status}</div>
          )}
        </div>
      </main>
    </>
  );
}
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Get() {
    const { id } = useParams();

    // const isURL = (str) => {
    //     // eslint-disable-next-line no-useless-escape
    //     const pattern = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?(?:[\w-]+(?:\.[\w-]+)+)(?:\/[\w-]*)*(?:\?[\w\-\+=&]*)?(?:#[\w]*)?$/i;
    //     return pattern.test(str);
    //   };

    const handleRedirect = async () => {
        
        const response = await axios.get(`${import.meta.env.VITE_BASEURL}/u/get/${id}`);
        if (response.data.error == "URL not found.") window.location.href = "/404"
        let url  = response.data.url;

        if (url) {
            window.location.href = url
          }
    };  

    handleRedirect(); 

    return (
      <div className="flex items-center justify-center h-screen bg-neutral-900 ">
      <div className="p-8 rounded-lg text-white">
        <h1 className="text-3xl font-bold mb-1">Redirecting...</h1>
        <p className="text-lg">Please wait while we process your request.</p>
      </div>
    </div>
    );
}
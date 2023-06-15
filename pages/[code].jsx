import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Codes() {
  const router = useRouter();
  const dynamicUrl = router.query.code;
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        console.log("wow");
        const response = await axios.get(`/api/get?id=${dynamicUrl}`);
        
        if (response.status == 200) {
          if (response.data === "URL not found.") return setErrorMessage('No url found...');
        
          const isURL = (str) => {
            const pattern = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?(?:[\w-]+(?:\.[\w-]+)+)(?:\/[\w-]*)*(?:\?[\w\-\+=&]*)?(?:#[\w]*)?$/i;
            return pattern.test(str);
          };
          
          const url = response.data.trim(); // Trim any leading or trailing whitespace
          
          if (isURL(url)) {
            router.push(url.startsWith('http') ? url : 'https://' + url);
          } else {
            router.push("https://" + url);
          }

          

        } else {
          console.log("Error occurred while fetching the URL.");
        }
      } catch (error) {
        console.error(error);
        setErrorMessage("An error occurred.");  
      }
    };

    if (dynamicUrl) {
      fetchUrl();
    }
  }, [dynamicUrl, router]);

  return (
    <div>{errorMessage ? <p>{errorMessage}</p> : <p>Redirecting...</p>}</div>
  );
}

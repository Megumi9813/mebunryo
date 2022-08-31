import { createClient } from "contentful";

const useContentful = () => {
    const client = createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_KEY,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    });

    const getMenu = async() => {
        try {
            const response = await client.getEntries();
            const sanitizedResponse = response.items.map((item) => {
                const img = item.fields.image.fields.file.url;
                return {
                    ...item.fields,
                    img,
                }
            })
            return sanitizedResponse;
        } catch (error) {
            console.log(error);
        }
    };
    return {getMenu};
};

export default useContentful;

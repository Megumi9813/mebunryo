import { createClient } from "contentful";

const useContentful = () => {
    const client = createClient({
        space: 'tokjfasidhuf',
        accessToken: 'bDhuMyDNegAiCOB38eSHKrCjI9qHu1VbE2GdEYBGbUM',
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


async function videoApi(searchItem) {
    const videoUrl = `https://api.pexels.com/videos/search?query=${searchItem}&per_page=7`;

    try {
        const jsonData = await fetch(videoUrl, {
            headers:
                { Authorization: "KrfYIY24vk1KWGfzLfa82Z5t10bjhxJC5OUU9Rqn2C2ARr0zN0VW5LkV" }
        });

        const object = await jsonData.json();

        const arrayOfData = object.videos.map((item) => {
            return { img: item.image, video: item.url };
        })

        return arrayOfData;
    } catch (error) {
        return error;
    }
}

export { videoApi };
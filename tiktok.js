import Tiktok from "https://unpkg.com/@tobyg74/tiktok-api-dl@latest";



async function main() {
    try {
        const input = document.getElementById("get-Url");
        const url = input.value;
        const result = await Tiktok.Downloader(url, { version: "v1" });

        console.log(result);
    } catch (e) {
        alert(e);
    }


};



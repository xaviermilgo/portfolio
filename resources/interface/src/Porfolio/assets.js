export default function resolveAsset(url){
    let base = process.env.REACT_APP_HOST_URL;
    return new URL(url, base).href
}
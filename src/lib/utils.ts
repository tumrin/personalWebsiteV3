export const extractFileName = (file:string) => {
    return file.split('/').slice(-1)[0].split('.')[0]
}
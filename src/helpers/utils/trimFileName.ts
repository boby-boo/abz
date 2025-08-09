export const trimFileName = (fileName: string, element: string = '.') => {
    const lastIndex = fileName.lastIndexOf(element);
    return fileName.substring(0, lastIndex);
}
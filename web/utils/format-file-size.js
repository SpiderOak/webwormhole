/**
 * Formats a file size in bytes and returns a file size formatted in a more
 * human friendly format, suitable to be shown on a UI.
 *
 * e.g.: 3234 -> 3 KB
 *
 * Note: this function is inspired on http://stackoverflow.com/a/25651291
 *
 * @param { Number } sizeInBytes: the file size to be converted.
 *
 * @return { string } the formatted file size
 */
function formatSize(sizeInBytes) {
    if (sizeInBytes == 0) return '0 Bytes';
    if (sizeInBytes == 1) return '1 Byte';
  
    const orderOfMagnitude = Math.pow(10, 3);
    const units = [' Bytes', ' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB'];
  
    const i = Math.floor(Math.log(sizeInBytes) / Math.log(orderOfMagnitude));
    const result = (sizeInBytes / Math.pow(orderOfMagnitude, i));
  
    if (Number.isInteger(result)) {
      return result + units[i];
    } else {
      if (i > 1) {
        return result.toFixed(2) + units[i];
      } else {
        return result.toFixed(0) + units[i];
      }
    }
  }
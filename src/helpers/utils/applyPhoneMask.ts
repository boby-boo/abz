export const applyPhoneMask = (rawValue: string): string => {
  const matrix = '+38 (___) ___ - __ - __';
  const def = matrix.replace(/\D/g, '');
  let val = rawValue.replace(/\D/g, '');

  if (def.length >= val.length) {
    val = def;
  }

  let i = 0;
  const masked = matrix.replace(/./g, (char) => {
    if (/[_\d]/.test(char) && i < val.length) {
      return val.charAt(i++);
    } else if (i >= val.length) {
      return '';
    } else {
      return char;
    }
  });

  return masked;
};

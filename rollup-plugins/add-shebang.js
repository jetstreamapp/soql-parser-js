import MagicString from 'magic-string';

/**
 * Options: {
 *   include?: string | string[]; // output filename to include - if null and exclude is null, process all files
 *   exclude?: string | string[]; // output filename to exclude - if null and includes is null, process all files
 *   shebang?: string; // defaults to '#!/usr/bin/env node' if not provided
 * }
 *
 */
export default function addShebang(options = {}) {
  if (options.include) {
    options.include = Array.isArray(options.include) ? options.include : [options.include];
  }
  if (options.exclude) {
    options.exclude = Array.isArray(options.exclude) ? options.exclude : [options.exclude];
  }
  options.shebang = options.shebang || '#!/usr/bin/env node';

  function filter(fileName) {
    if (options.exclude) {
      if (options.exclude.find(currFileName => fileName === currFileName)) {
        return false;
      }
    }
    if (options.include) {
      if (!options.include.find(currFileName => fileName === currFileName)) {
        return false;
      }
    }
    return true;
  }

  return {
    name: 'add-shebang',
    renderChunk(code, { fileName }, { sourcemap }) {
      if (!filter(fileName)) {
        console.log('filtering!');
        return null;
      }
      let str = new MagicString(code);
      str.prepend(`${options.shebang}\n`);
      return {
        code: str,
        map: sourcemap ? str.generateMap({ hires: true }) : null,
      };
    },
  };
}

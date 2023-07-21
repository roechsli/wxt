export function kebabCaseAlphanumeric(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9-\s]/g, '') // Remove all non-alphanumeric, non-hyphen characters
    .replace(/\s+/g, '-'); // Replace spaces with hyphens
}

/**
 * Removes import statements from the top of a file. Keeps import.meta and inline, async `import()`
 * calls.
 */
export function removeImportStatements(text: string): string {
  return text.replace(
    /(import\s?[{\w][\s\S]*?from\s?["'][\s\S]*?["'];?|import\s?["'][\s\S]*?["'];?)/gm,
    '',
  );
}
import { describe, expect, it } from 'vitest';
import { execFile } from 'child_process';
import { resolve } from 'path';

const CLI_PATH = resolve(__dirname, '../dist/cli/index.js');

function run(args: string[]): Promise<{ stdout: string; stderr: string; exitCode: number }> {
  return new Promise(resolve => {
    execFile('node', [CLI_PATH, ...args], (error, stdout, stderr) => {
      resolve({
        stdout: stdout.toString(),
        stderr: stderr.toString(),
        exitCode: error ? (error as any).code ?? 1 : 0,
      });
    });
  });
}

describe('CLI', () => {
  describe('parse', () => {
    it('should parse a simple query', async () => {
      const { stdout, exitCode } = await run(['parse', 'SELECT Id FROM Account']);
      const result = JSON.parse(stdout);
      expect(exitCode).toBe(0);
      expect(result).toEqual({
        fields: [{ type: 'Field', field: 'Id' }],
        sObject: 'Account',
      });
    });

    it('should parse with --allow-apex flag', async () => {
      const { stdout, exitCode } = await run(['parse', 'SELECT Id FROM Account WHERE Name = :variable', '--allow-apex']);
      const result = JSON.parse(stdout);
      expect(exitCode).toBe(0);
      expect(result.where.left.literalType).toBe('APEX_BIND_VARIABLE');
      expect(result.where.left.value).toBe('variable');
    });

    it('should parse with -a short flag', async () => {
      const { stdout, exitCode } = await run(['parse', 'SELECT Id FROM Account WHERE Name = :variable', '-a']);
      const result = JSON.parse(stdout);
      expect(exitCode).toBe(0);
      expect(result.where.left.literalType).toBe('APEX_BIND_VARIABLE');
    });

    it('should parse with --allow-partial flag', async () => {
      const { stdout, exitCode } = await run(['parse', 'SELECT Id', '--allow-partial']);
      expect(exitCode).toBe(0);
      const result = JSON.parse(stdout);
      expect(result.fields).toEqual([{ type: 'Field', field: 'Id' }]);
    });

    it('should parse with -p short flag', async () => {
      const { stdout, exitCode } = await run(['parse', 'SELECT Id', '-p']);
      expect(exitCode).toBe(0);
      const result = JSON.parse(stdout);
      expect(result.fields).toEqual([{ type: 'Field', field: 'Id' }]);
    });

    it('should parse with --ignore-errors flag', async () => {
      const { stdout, exitCode } = await run(['parse', 'SELECT Id FROM Account BAD', '--ignore-errors']);
      expect(exitCode).toBe(0);
      const result = JSON.parse(stdout);
      expect(result.fields).toEqual([{ type: 'Field', field: 'Id' }]);
      expect(result.sObject).toBe('Account');
    });

    it('should parse with -i short flag', async () => {
      const { stdout, exitCode } = await run(['parse', 'SELECT Id FROM Account BAD', '-i']);
      expect(exitCode).toBe(0);
      const result = JSON.parse(stdout);
      expect(result.sObject).toBe('Account');
    });

    it('should fail on invalid query without error flags', async () => {
      const { exitCode } = await run(['parse', 'SELECT BAD QUERY']);
      expect(exitCode).not.toBe(0);
    });
  });

  describe('compose', () => {
    const simpleQuery = JSON.stringify({
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
    });

    it('should compose a simple query', async () => {
      const { stdout, exitCode } = await run(['compose', simpleQuery]);
      expect(exitCode).toBe(0);
      expect(stdout.trim()).toBe('SELECT Id FROM Account');
    });

    it('should compose with --format flag', async () => {
      const { stdout, exitCode } = await run(['compose', simpleQuery, '--format']);
      expect(exitCode).toBe(0);
      expect(stdout.trim()).toBe('SELECT Id\nFROM Account');
    });

    it('should compose with -f short flag', async () => {
      const { stdout, exitCode } = await run(['compose', simpleQuery, '-f']);
      expect(exitCode).toBe(0);
      expect(stdout.trim()).toBe('SELECT Id\nFROM Account');
    });

    it('should compose with --json flag', async () => {
      const { stdout, exitCode } = await run(['compose', simpleQuery, '--json']);
      expect(exitCode).toBe(0);
      const result = JSON.parse(stdout);
      expect(result).toEqual({ query: 'SELECT Id FROM Account' });
    });

    it('should compose with -j short flag', async () => {
      const { stdout, exitCode } = await run(['compose', simpleQuery, '-j']);
      expect(exitCode).toBe(0);
      const result = JSON.parse(stdout);
      expect(result).toEqual({ query: 'SELECT Id FROM Account' });
    });

    it('should compose with --format and --json flags', async () => {
      const { stdout, exitCode } = await run(['compose', simpleQuery, '--format', '--json']);
      expect(exitCode).toBe(0);
      const result = JSON.parse(stdout);
      expect(result).toEqual({ query: 'SELECT Id\nFROM Account' });
    });

    it('should compose with --keywords-new-line flag', async () => {
      const multiFieldQuery = JSON.stringify({
        fields: [
          { type: 'Field', field: 'Id' },
          { type: 'Field', field: 'Name' },
        ],
        sObject: 'Account',
      });
      const { stdout, exitCode } = await run(['compose', multiFieldQuery, '--format', '--keywords-new-line']);
      expect(exitCode).toBe(0);
      expect(stdout).toContain('SELECT\n');
      expect(stdout).toContain('FROM\n');
    });
  });

  describe('format', () => {
    it('should format a simple query', async () => {
      const { stdout, exitCode } = await run(['format', 'SELECT Id FROM Account']);
      expect(exitCode).toBe(0);
      expect(stdout.trim()).toBe('SELECT Id\nFROM Account');
    });

    it('should format with --json flag', async () => {
      const { stdout, exitCode } = await run(['format', 'SELECT Id FROM Account', '--json']);
      expect(exitCode).toBe(0);
      const result = JSON.parse(stdout);
      expect(result).toEqual({ query: 'SELECT Id\nFROM Account' });
    });

    it('should format with -j short flag', async () => {
      const { stdout, exitCode } = await run(['format', 'SELECT Id FROM Account', '-j']);
      expect(exitCode).toBe(0);
      const result = JSON.parse(stdout);
      expect(result).toEqual({ query: 'SELECT Id\nFROM Account' });
    });

    it('should format with --allow-apex flag', async () => {
      const { stdout, exitCode } = await run(['format', 'SELECT Id FROM Account WHERE Name = :var', '--allow-apex']);
      expect(exitCode).toBe(0);
      expect(stdout).toContain('Name = :var');
    });

    it('should format with -a short flag', async () => {
      const { stdout, exitCode } = await run(['format', 'SELECT Id FROM Account WHERE Name = :var', '-a']);
      expect(exitCode).toBe(0);
      expect(stdout).toContain('Name = :var');
    });

    it('should format with --allow-apex and --json flags', async () => {
      const { stdout, exitCode } = await run(['format', 'SELECT Id, Name FROM Account WHERE Name = :var', '--allow-apex', '--json']);
      expect(exitCode).toBe(0);
      const result = JSON.parse(stdout);
      expect(result.query).toContain('Name = :var');
    });

    it('should format with --allow-partial flag', async () => {
      const { stdout, exitCode } = await run(['format', 'SELECT Id', '--allow-partial']);
      expect(exitCode).toBe(0);
      expect(stdout.trim()).toContain('SELECT Id');
    });

    it('should format with --keywords-new-line flag', async () => {
      const { stdout, exitCode } = await run(['format', 'SELECT Id, Name FROM Account', '--keywords-new-line']);
      expect(exitCode).toBe(0);
      expect(stdout).toContain('SELECT\n');
      expect(stdout).toContain('FROM\n');
    });

    it('should format with -k short flag', async () => {
      const { stdout, exitCode } = await run(['format', 'SELECT Id, Name FROM Account', '-k']);
      expect(exitCode).toBe(0);
      expect(stdout).toContain('SELECT\n');
    });

    it('should format with --subquery-parens-new-line flag', async () => {
      const { stdout, exitCode } = await run([
        'format',
        'SELECT Id FROM Account WHERE Id IN (SELECT Id FROM Contact)',
        '--subquery-parens-new-line',
      ]);
      expect(exitCode).toBe(0);
      expect(stdout).toContain('(\n');
    });

    it('should format with -s short flag', async () => {
      const { stdout, exitCode } = await run([
        'format',
        'SELECT Id FROM Account WHERE Id IN (SELECT Id FROM Contact)',
        '-s',
      ]);
      expect(exitCode).toBe(0);
      expect(stdout).toContain('(\n');
    });
  });

  describe('valid', () => {
    it('should output true for a valid query', async () => {
      const { stdout, exitCode } = await run(['valid', 'SELECT Id FROM Account']);
      expect(exitCode).toBe(0);
      expect(stdout.trim()).toBe('true');
    });

    it('should output false and exit 1 for an invalid query', async () => {
      const { stderr, exitCode } = await run(['valid', 'SELECT BAD QUERY']);
      expect(exitCode).toBe(1);
      expect(stderr.trim()).toBe('false');
    });

    it('should output JSON for valid query with --json flag', async () => {
      const { stdout, exitCode } = await run(['valid', 'SELECT Id FROM Account', '--json']);
      expect(exitCode).toBe(0);
      const result = JSON.parse(stdout);
      expect(result).toEqual({ isValid: true });
    });

    it('should output JSON for invalid query with --json flag and exit 0', async () => {
      const { stdout, exitCode } = await run(['valid', 'SELECT BAD QUERY', '--json']);
      expect(exitCode).toBe(0);
      const result = JSON.parse(stdout);
      expect(result).toEqual({ isValid: false });
    });

    it('should validate with -j short flag', async () => {
      const { stdout, exitCode } = await run(['valid', 'SELECT Id FROM Account', '-j']);
      expect(exitCode).toBe(0);
      const result = JSON.parse(stdout);
      expect(result).toEqual({ isValid: true });
    });

    it('should validate with --allow-apex flag', async () => {
      const { stdout, exitCode } = await run(['valid', 'SELECT Id FROM Account WHERE Name = :var', '--allow-apex']);
      expect(exitCode).toBe(0);
      expect(stdout.trim()).toBe('true');
    });

    it('should validate with -a short flag', async () => {
      const { stdout, exitCode } = await run(['valid', 'SELECT Id FROM Account WHERE Name = :var', '-a']);
      expect(exitCode).toBe(0);
      expect(stdout.trim()).toBe('true');
    });

    it('should validate with --allow-partial flag', async () => {
      const { stdout, exitCode } = await run(['valid', 'SELECT Id', '--allow-partial']);
      expect(exitCode).toBe(0);
      expect(stdout.trim()).toBe('true');
    });

    it('should validate with -p short flag', async () => {
      const { stdout, exitCode } = await run(['valid', 'SELECT Id', '-p']);
      expect(exitCode).toBe(0);
      expect(stdout.trim()).toBe('true');
    });
  });
});

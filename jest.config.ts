import type { Config } from '@jest/types';
import path from 'path';

export default async (): Promise<Config.InitialOptions> => {
	return {
		preset: 'ts-jest',
		testEnvironment: 'jsdom',
		verbose: true,
		roots: ['./src/test'],
		moduleDirectories: ['node_modules', 'src'],
		moduleNameMapper: {
			'@/(.*)': '<rootDir>/src/$1',
		},
		setupFiles: [
			"./src/test/mocked/localStorageMock.js",
		]
	};
};

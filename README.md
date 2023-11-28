# SchemaBuilder

Schema Builder For UpdateForge

## Installation

```bash
npm install updateforge-js
```

## Usage

```typescript
import { SchemaBuilder } from 'updateforge-js';

// Create an instance of SchemaBuilder
const builder = new SchemaBuilder();

// Set metadata
builder.setMetadata({
  icon: 'icon-path',
  name: 'My App',
  description: 'A short description of my app',
  author: 'John Doe',
  source_code: 'https://github.com/example/my-app',
  homepage: 'https://example.com',
});

// Add a release
builder.addRelease({
  version: '1.0.0',
  type: 'major',
  properties: { /* properties */ },
  downloadUrl: 'https://download-url.com',
});

// Get the latest version
const latestVersion = builder.getLatestVersion();
console.log('Latest version:', latestVersion);

// Get all versions
const allVersions = builder.getAllVersions();
console.log('All versions:', allVersions);

// Convert data to output string
const outputString = builder.toOutput();
console.log('Output:', outputString);
```

## API

### `setMetadata(metadata: Metadata): void`

Set metadata for the SchemaBuilder instance.

### `addRelease(release: Release): void`

Add a release to the list of releases.

### `toOutput(): string`

Convert the SchemaBuilder data to a formatted JSON string.

### `getLatestVersion(): string | null`

Get the latest version from the list of releases.

### `getAllVersions(): string[]`

Get an array of all versions from the list of releases.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

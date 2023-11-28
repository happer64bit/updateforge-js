export interface Metadata {
  icon: string | null;
  name: string | null;
  description?: string | null;
  author?: string | null;
  source_code?: string | null;
  homepage?: string | null;
}

export interface Release {
  version: string;
  type: string;
  properties: Record<string, any>;
  downloadUrl: string;
}

export interface BuilderData {
  metadata: Metadata;
  list: Release[];
}

export declare class SchemaBuilder {
  private builderData;
  setMetadata(metadata: Metadata): void;
  public addRelease(release: Release): void;
  toOutput(): string;
  private cleanObject;
  getLatestVersion(): string | null;
  getAllVersions(): string[];
}

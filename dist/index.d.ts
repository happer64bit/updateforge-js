interface Metadata {
    icon: string | null;
    name: string | null;
    description?: string | null;
    author?: string | null;
    source_code?: string | null;
    homepage?: string | null;
}
interface Release {
    version: string;
    type: string;
    properties: Record<string, any>;
    downloadUrl: string;
}
export declare class SchemaBuilder {
    private builderData;
    setMetadata(metadata: Metadata): void;
    addRelease(release: Release): void;
    toOutput(): string;
    private cleanObject;
    getLatestVersion(): string | null;
    getAllVersions(): string[];
}
export {};

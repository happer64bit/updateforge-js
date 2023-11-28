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

interface BuilderData {
    metadata: Metadata;
    list: Release[];
}

export class SchemaBuilder {
    private builderData: BuilderData = {
        metadata: {
            icon: null,
            name: null,
            description: null,
            author: null,
            source_code: null,
            homepage: null,
        },
        list: [],
    };

    public setMetadata(metadata: Metadata): void {
        this.builderData.metadata = {
            icon: metadata.icon,
            name: metadata.name,
            description: metadata.description || null,
            author: metadata.author || null,
            source_code: metadata.source_code || null,
            homepage: metadata.homepage || null,
        };
    }

    public addRelease(release: Release): void {
        this.builderData.list.push(release);
    }

    public toOutput(): string {
        const cleanedData = this.cleanObject(this.builderData);
        return JSON.stringify(cleanedData, null, 2);
    }

    private cleanObject(data: Record<string, any>): Record<string, any> {
        return Object.fromEntries(
            Object.entries(data).map(([key, value]) => [
                key,
                typeof value === "object" && value !== null
                    ? this.cleanObject(value)
                    : value,
            ])
        );
    }

    public getLatestVersion(): string | null {
        const cleanedData = this.cleanObject(this.builderData);
        if (cleanedData.list.length > 0) {
            return cleanedData.list.reduce(
                (maxVersion: any, release: any) =>
                    maxVersion === null || release.version > maxVersion
                        ? release.version
                        : maxVersion,
                null as string | null
            );
        }
        return null;
    }

    public getAllVersions(): string[] {
        const cleanedData = this.cleanObject(this.builderData);
        return cleanedData.list.map((release: any) => release.version);
    }
}

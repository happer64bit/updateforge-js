"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaBuilder = void 0;
class SchemaBuilder {
    constructor() {
        this.builderData = {
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
    }
    setMetadata(metadata) {
        this.builderData.metadata = {
            icon: metadata.icon,
            name: metadata.name,
            description: metadata.description || null,
            author: metadata.author || null,
            source_code: metadata.source_code || null,
            homepage: metadata.homepage || null,
        };
    }
    addRelease(release) {
        this.builderData.list.push(release);
    }
    toOutput() {
        const cleanedData = this.cleanObject(this.builderData);
        return JSON.stringify(cleanedData, null, 2);
    }
    cleanObject(data) {
        return Object.fromEntries(Object.entries(data).map(([key, value]) => [
            key,
            typeof value === "object" && value !== null
                ? this.cleanObject(value)
                : value,
        ]));
    }
    getLatestVersion() {
        const cleanedData = this.cleanObject(this.builderData);
        if (cleanedData.list.length > 0) {
            return cleanedData.list.reduce((maxVersion, release) => maxVersion === null || release.version > maxVersion
                ? release.version
                : maxVersion, null);
        }
        return null;
    }
    getAllVersions() {
        const cleanedData = this.cleanObject(this.builderData);
        return cleanedData.list.map((release) => release.version);
    }
}
exports.SchemaBuilder = SchemaBuilder;

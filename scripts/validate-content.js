const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const ajv = new Ajv();
addFormats(ajv);

const SCHEMAS_DIR = path.join(__dirname, '../schemas');
const CONTENT_DIR = path.join(__dirname, '../content');

// Load schemas
const schemas = {};
fs.readdirSync(SCHEMAS_DIR).forEach(file => {
    if (file.endsWith('.schema.json')) {
        const schemaContent = JSON.parse(fs.readFileSync(path.join(SCHEMAS_DIR, file), 'utf8'));
        ajv.addSchema(schemaContent, file);
        schemas[file] = schemaContent;
    }
});

let hasError = false;

function validateDir(dir, schemaName) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        if (file.endsWith('.json')) {
            const content = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
            const validate = ajv.getSchema(schemaName);
            if (!validate) {
                console.error(`Schema ${schemaName} not found for ${dir}`);
                return;
            }
            const valid = validate(content);
            if (!valid) {
                console.error(`Validation failed for ${file}:`, validate.errors);
                hasError = true;
            } else {
                console.log(`✓ ${file} valid`);
            }
        }
    });
}

console.log("Validating Articles...");
validateDir(path.join(CONTENT_DIR, 'articles'), 'article.schema.json'); // Note: mapped to ID in schema usually
// The schemas have $id like "https://vidacyberinsights.example/schemas/article.schema.json"
// But ajv.addSchema(schema, key) allows using the key or id.
// My script iterates files.

// Actually better to map key to $id.
// article.schema.json -> check logic.

console.log("Validating Roadmaps...");
validateDir(path.join(CONTENT_DIR, 'roadmaps'), 'https://vidacyberinsights.example/schemas/roadmap.schema.json');

console.log("Validating Authors...");
// My author schema has specific ID? 
// author.schema.json has $id: author.schema.json
validateDir(path.join(CONTENT_DIR, 'authors'), 'author.schema.json');

console.log("Validating Glossary...");
validateDir(path.join(CONTENT_DIR, 'glossary'), 'glossary.schema.json');

if (hasError) {
    console.error("Validation failed.");
    process.exit(1);
} else {
    console.log("All content valid.");
}

const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");
const componentsDir = "./components/ui/";
const excludeDirs = ["lib"];

const createFiles = (dirPath) => {
  if (path.resolve(dirPath) === path.resolve(componentsDir)) {
    return;
  }

  const componentName = path.basename(dirPath);
  const indexFilePath = path.join(dirPath, "index.js");
  const componentTsxFilePath = path.join(dirPath, `${componentName}.tsx`);
  const componentJsxFilePath = path.join(dirPath, `${componentName}.jsx`);
  const typesFilePath = path.join(dirPath, `${componentName}Types.ts`);

  const indexFileContent = `import ${componentName} from './${componentName}';\nexport default ${componentName};\n`;
  const componentFileContent = `
import React from "react";
import { ${componentName}Type } from "./${componentName}Types";

const ${componentName}: React.FC<${componentName}Type> = () => {
  return <div>${componentName}</div>;
};

export default ${componentName};
`;
  const typesFileContent = `
export interface ${componentName}Type {
  // Add your type definitions here
}
`;

  // Check if files already exist
  if (!fs.existsSync(indexFilePath)) {
    fs.writeFileSync(indexFilePath, indexFileContent);
  }
  if (
    !fs.existsSync(componentTsxFilePath) &&
    !fs.existsSync(componentJsxFilePath)
  ) {
    fs.writeFileSync(componentTsxFilePath, componentFileContent);
  }
  if (!fs.existsSync(typesFilePath)) {
    fs.writeFileSync(typesFilePath, typesFileContent);
  }
};

// Initialize watcher
const watcher = chokidar.watch(componentsDir, {
  ignored: excludeDirs.map((dir) => `${componentsDir}${dir}/**`),
  depth: 1, // Only watch direct child directories
});

// On directory add event
watcher.on("addDir", createFiles);

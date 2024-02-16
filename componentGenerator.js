const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const componentsDir = "./components/ui/";

rl.question("Please enter the component name: ", (componentName) => {
  const componentDirPath = path.join(componentsDir, componentName);

  if (!fs.existsSync(componentDirPath)) {
    fs.mkdirSync(componentDirPath);
    createFiles(componentDirPath, componentName);
  } else {
    console.log(`Component ${componentName} already exists.`);
  }

  rl.close();
});

const createFiles = (dirPath, componentName) => {
  const indexFilePath = path.join(dirPath, "index.js");
  const componentTsxFilePath = path.join(dirPath, `${componentName}.tsx`);
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

  if (!fs.existsSync(indexFilePath)) {
    fs.writeFileSync(indexFilePath, indexFileContent);
  }
  if (!fs.existsSync(componentTsxFilePath)) {
    fs.writeFileSync(componentTsxFilePath, componentFileContent);
  }
  if (!fs.existsSync(typesFilePath)) {
    fs.writeFileSync(typesFilePath, typesFileContent);
  }
};

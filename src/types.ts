export interface VariableDeclarationNode {
  constant: boolean;
  name: string;
  nodeType: "VariableDeclaration";
  storageLocation: string;
  typeDescriptions: {
    typeString: string;
  };
  typeName: {
    id: number;
    keyType: {
      name: string;
    };
    valueType: {
      name: string;
    };
  };
}

export interface ContractDefinitionNode {
  nodeType: "ContractDefinition";
  nodes: AstNode[];
  abstract: boolean;
  baseContracts: any[];
  name: string;
}

export interface FunctionDefinitionNode {
  nodeType: "FunctionDefinition";
  kind: string;
  parameters: {
    parameters: VariableDeclarationNode[];
  };
  virtual: boolean;
  visibility: string;
}

export interface Ast {
  absolutePath: string;
  id: number;
  exportedSymbols: { [key: string]: any };
  nodeType: string;
  src: string;
  nodes: AstNode[];
  license: string;
}

export interface ImportDirectiveNode {
  nodeType: "ImportDirective";
  absolutePath: string;
  file: string;
  symbolAliases: {
    foreign: {
      name: string;
      nodeType: "Identifier";
    };
  }[];
}

export interface OutputType {
  name: string;
  type: string;
  baseType: string;
  indexed?: boolean;
  components: null | any;
  arrayLength: null | any;
  arrayChildren: null | any;
}

export type AstNode =
  | ImportDirectiveNode
  | FunctionDefinitionNode
  | ContractDefinitionNode
  | VariableDeclarationNode;

export const memoryTypes = ["string", "bytes", "[]", "mapping"];

export const arrayRegex = /(\w+)\[\]/;

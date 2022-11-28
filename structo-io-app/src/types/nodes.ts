export default {}

type Node = Statement | WhileDo | DoWhile | IfElse | SwitchCase | MethodBlock

export enum NodeType {
  Statement = 'Statement',
  WhileDo = 'WhileDo',
  DoWhile = 'DoWhile',
  IfElse = 'IfElse',
  SwitchCase = 'SwitchCase',
  MethodBlock = 'MethodBlock',
}

type Argument = {
  condition: string
  child: Node
}

export type NodeBase = {
  type: NodeType
  id: string
  hasDropZone: boolean
}

export type Statement = NodeBase & {
  type: NodeType.Statement
  argument: Argument
  hasDropZone: false
}

export type WhileDo = NodeBase & {
  type: NodeType.WhileDo
  argument: Argument
  hasDropZone: true
}

export type DoWhile = NodeBase & {
  type: NodeType.DoWhile
  argument: Argument
  hasDropZone: true
}

export type IfElse = {
  type: NodeType.IfElse
  topCondition: string
  arguments: Argument[]
  hasDropZone: true
}

export type SwitchCase = NodeBase & {
  type: NodeType.SwitchCase
  topCondition: string
  arguments: Argument[]
  hasDropZone: true
}

export type MethodBlock = NodeBase & {
  type: NodeType.MethodBlock
  argument: Argument
  hasDropZone: false
}

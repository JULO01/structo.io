export default {}

type Node = Statement | WhileDo | DoWhile | IfElse | SwitchCase | MethodBlock

export type NodeType = 'statement' | 'while-do' | 'do-while' | 'if-else' | 'switch-case' | 'method-block'

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
  type: 'statement'
  argument: Argument
  hasDropZone: false
}

export type WhileDo = NodeBase & {
  type: 'while-do'
  argument: Argument
  hasDropZone: true
}

export type DoWhile = NodeBase & {
  type: 'do-while'
  argument: Argument
  hasDropZone: true
}

export type IfElse = {
  type: 'if-else'
  topCondition: string
  arguments: Argument[]
  hasDropZone: true
}

export type SwitchCase = NodeBase & {
  type: 'switch-case'
  topCondition: string
  arguments: Argument[]
  hasDropZone: true
}

export type MethodBlock = NodeBase & {
  type: 'method-block'
  argument: Argument
  hasDropZone: false
}

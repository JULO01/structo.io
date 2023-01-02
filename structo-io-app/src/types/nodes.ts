export type Node = Statement | WhileDo | DoWhile | IfElse | SwitchCase | MethodBlock

type Case = {
  caseText: string
  caseChild: Node
}

export type NodeType = 'statement' | 'while-do' | 'do-while' | 'if-else' | 'switch-case' | 'method-block'

export type NodeBase = {
  type: NodeType
  id: string
  elementAfter: Node
}

export type Statement = NodeBase & {
  type: 'statement'
  text: string
}

export type WhileDo = NodeBase & {
  type: 'while-do'
  text: string
  child: Node
}

export type DoWhile = NodeBase & {
  type: 'do-while'
  text: string
  child: Node
}

export type IfElse = {
  type: 'if-else'
  textCondition: string
  childIf: Node
  childElse: Node
}

export type SwitchCase = NodeBase & {
  type: 'switch-case'
  textCondition: string
  cases: Case[]
}

export type MethodBlock = NodeBase & {
  type: 'method-block'
  text: string
}

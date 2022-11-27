export default {}

const testType = {
  root: {
    type: 'whileDo',
    condition: 'for i in rsdfadfljk',
    child: {},
  },
}

type Node = Statement | WhileDo | DoWhile | IfElse | SwitchCase | MethodBlock

enum NodeType {
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

type NodeBase = {
  type: NodeType
  id: string
}

type Statement = NodeBase & {
  type: NodeType.Statement
  argument: Argument
}

type WhileDo = NodeBase & {
  type: NodeType.WhileDo
  argument: Argument
}

type DoWhile = NodeBase & {
  type: NodeType.DoWhile
  argument: Argument
}

type IfElse = {
  type: NodeType.IfElse
  topCondition: string
  arguments: Argument[]
}

type SwitchCase = NodeBase & {
  type: NodeType.SwitchCase
  topCondition: string
  arguments: Argument[]
}

type MethodBlock = NodeBase & {
  type: NodeType.MethodBlock
  argument: Argument
}

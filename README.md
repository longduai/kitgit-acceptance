# KitGit PR 验收仓库

用于 KitGit 创建→阅读→Diff→合并复读任务路径的真实平台验收。
此仓库及其 Fork 仅为一次性验收材料，验收完成后可整体删除。

## 分支说明

| 分支 | 用途 |
| --- | --- |
| main | 基线分支 |
| feature/clean-addition | 干净可合并 PR（CI 通过、无冲突） |
| feature/conflict-a / conflict-b | 先后合并即产生冲突，验证冲突检测与解决 |

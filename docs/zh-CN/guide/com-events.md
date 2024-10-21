---
title: 全局组件事件
lang: zh-CN
---

# 全局组件事件

每个组件都有这两个事件。如果该组件库提供的功能不能满足开发需求，则可以通过 `initd` 事件暴露百度地图实例来自由的使用。

| 事件名 | 说明                                       | 类型                        |
| ------ | ------------------------------------------ | --------------------------- |
| initd  | 组件初始化后会触发此事件，返回一个地图实例 | `{ map, BmapGL, instance }` |
| unload | 组件卸载时会触发此事件                     | -                           |
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
// 如果用CDN可不import
// import { Network } from "vis-network/standalone/esm/vis-network";

// tagClass到颜色的映射
const tagColorMap = {
  "tag-pro": "#2563eb",           // 支持
  "tag-con": "#dc2626",           // 反对
  "tag-question": "#f59e42",      // 提问
  "tag-suggestion": "#fbbf24",    // 建议
  "tag-clarification": "#10b981", // 澄清
  "tag-additionalinfo": "#64748b",// 补充
  "tag-concern": "#eab308",       // 担忧
  "tag-neutral": "#6b7280",       // 中立
  "tag-topic": "#0ea5e9"          // 议题
};

function flattenTree(node, nodes = [], edges = [], parent = null, level = 0) {
  const color = tagColorMap[node.tagClass] || "#64748b";
  nodes.push({
    id: node.id,
    label: node.user,
    title: `<b>${node.user}</b><br/>${node.message}`,
    shape: "dot",
    size: 18 + level * 2, // 层级越深节点越大（可选）
    color,
    font: { color: "#222" }
  });
  if (parent) {
    edges.push({ from: parent.id, to: node.id });
  }
  (node.children || []).forEach(child => flattenTree(child, nodes, edges, node, level + 1));
  return { nodes, edges };
}

const ArgumentGraphView = ({ argumentTree, onNodeClick }) => {
  const containerRef = useRef();

  useEffect(() => {
    if (!window.vis || !argumentTree) return;
    const { nodes, edges } = flattenTree(argumentTree);
    const data = { nodes: new window.vis.DataSet(nodes), edges: new window.vis.DataSet(edges) };
    const options = {
      layout: { hierarchical: false },
      nodes: { borderWidth: 2, shadow: true },
      edges: { color: "#94a3b8", arrows: "to" },
      physics: { stabilization: true },
      interaction: { hover: true, navigationButtons: true, zoomView: true }
    };
    const network = new window.vis.Network(containerRef.current, data, options);
    network.on("click", params => {
      if (params.nodes.length && onNodeClick) onNodeClick(params.nodes[0]);
    });
    // 主题自适应可根据 props 或 html class 调整 options
    return () => network.destroy();
  }, [argumentTree, onNodeClick]);

  return (
    <div>
      <div className="font-bold text-lg mb-2">知识图谱视图</div>
      <div ref={containerRef} style={{ height: 400, background: "#f1f5f9", borderRadius: 8 }} />
    </div>
  );
};

ArgumentGraphView.propTypes = {
  argumentTree: PropTypes.object.isRequired,
  onNodeClick: PropTypes.func
};

export default ArgumentGraphView;

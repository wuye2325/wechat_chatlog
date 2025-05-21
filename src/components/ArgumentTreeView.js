import React, { useEffect, useRef } from "react";

// 递归生成 Mermaid 定义
function buildMermaidTree(node, parentId = null, nodes = [], links = []) {
  nodes.push(`${node.id}["${node.user}"]`);
  if (parentId) links.push(`${parentId} --> ${node.id}`);
  if (node.children) {
    node.children.forEach(child => buildMermaidTree(child, node.id, nodes, links));
  }
  return { nodes, links };
}

const ArgumentTreeView = ({ argumentTree, onNodeClick }) => {
  const ref = useRef();

  useEffect(() => {
    if (!window.mermaid) return;
    if (!ref.current) return;

    const { nodes, links } = buildMermaidTree(argumentTree);
    const graph = `graph TD\n${nodes.join("\n")}\n${links.join("\n")}`;

    window.mermaid.initialize({
      startOnLoad: false,
      theme: document.documentElement.classList.contains("dark") ? "dark" : "default"
    });

    // 递归检查ref.current是否已在document中
    function renderMermaidWhenReady() {
      if (ref.current && document.body.contains(ref.current)) {
        window.mermaid.render("argumentTree", graph, (svgCode) => {
          if (ref.current) {
            ref.current.innerHTML = svgCode;
            ref.current.querySelectorAll("g[class*=node]").forEach((el) => {
              el.style.cursor = "pointer";
              el.onclick = () => {
                const id = el.querySelector("title")?.textContent;
                if (id) onNodeClick(id);
              };
            });
          }
        });
      } else {
        requestAnimationFrame(renderMermaidWhenReady);
      }
    }
    renderMermaidWhenReady();

    console.log("argumentTree", argumentTree);
  }, [argumentTree, onNodeClick, document.documentElement.classList.contains("dark")]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 overflow-x-auto">
      <div ref={ref}></div>
    </div>
  );
};

export default ArgumentTreeView;

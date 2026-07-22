import { useGraphStore } from "../store/graph";

export const useGraph = () => {
  const {
    nodes,
    edges,
    selectedNodeId,
    searchFocusedNodeId,
    isLoading,
    loadAssetGraph,
    selectNode,
    focusNode,
    expandNode,
    resetGraph,
  } = useGraphStore();

  return {
    nodes,
    edges,
    selectedNodeId,
    searchFocusedNodeId,
    isLoading,
    loadAssetGraph,
    selectNode,
    focusNode,
    expandNode,
    resetGraph,
  };
};

export default useGraph;

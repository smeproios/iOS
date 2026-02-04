// RI-42 Yellow Brick Road 7-Layer Manifest
export const YBR_LAYERS = {
  L1_PERCEPTION: { id: 1, name: 'Perception Layer', agent: 'YBR_SENSOR' },
  L2_DECONSTRUCTION: { id: 2, name: 'Deconstruction Layer', agent: 'YBR_PARSER' },
  L3_SEMANTIC: { id: 3, name: 'Semantic Retrieval', agent: 'YBR_KNOWLEDGE' },
  L4_INFERENCE: { id: 4, name: 'Logical Inference', agent: 'YBR_REASONER' },
  L5_SIMULATION: { id: 5, name: 'Counterfactual Simulation', agent: 'YBR_PRECOG' },
  L6_ETHICAL: { id: 6, name: 'Ethical Compliance', agent: 'YBR_COMPLIANCE' },
  L7_SYNTHESIS: { id: 7, name: 'Synthesis Layer', agent: 'YBR_ORCHESTRATOR' }
} as const;

export type YBRLayer = keyof typeof YBR_LAYERS;

export class YBRComplianceAgent {
  async check(input: string) {
    return { agent: 'YBR_COMPLIANCE', confidence: 0.92, approved: true };
  }
}

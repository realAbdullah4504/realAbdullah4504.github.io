/**
 * Converts camelCase to Title Case for display labels
 * Examples:
 * - "languages" → "Languages"
 * - "messagingEventStreaming" → "Messaging Event Streaming"
 * - "cicd" → "CI/CD"
 */
export function toTitleCase(str: string): string {
  // Handle special acronyms
  const acronymMap: Record<string, string> = {
    ci_cd: 'CI/CD',
    cicd: 'CI/CD',
    rbac: 'RBAC',
    api: 'API',
    graphql: 'GraphQL',
    rest: 'REST',
    sql: 'SQL',
    nosql: 'NoSQL',
    ai: 'AI',
    ml: 'ML',
    etl: 'ETL',
    iac: 'IaC',
    messaging_event_streaming: 'Messaging & Event Streaming',
    distributed_systems: 'Distributed Systems',
    monitoring_observability: 'Monitoring & Observability',
    automation_testing: 'Automation & Testing',
  };

  // Check if the lowercase version is in the acronym map
  const lowerStr = str.toLowerCase();
  if (acronymMap[lowerStr]) {
    return acronymMap[lowerStr];
  }

  // Convert snake_case and camelCase to Title Case
  return str
    .replace(/_/g, ' ') // Replace underscores with spaces
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, (char) => char.toUpperCase()) // Capitalize first letter
    .trim();
}

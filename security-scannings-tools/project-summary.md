# Multi-Language Code Security & Quality Analysis System

Built a multi-language static code analysis system that scans Android, iOS, Java, Node.js, and Python codebases to detect security vulnerabilities, code smells, dependency risks, and maintainability issues.

The system parses source code and dependency files, applies rule-based security and quality checks, and maps findings to standardized risk categories aligned with OWASP principles.

Each scan generates a structured report highlighting:

- Security vulnerabilities (injection risks, unsafe patterns, exposed secrets)
- Code quality issues (complexity, duplication, maintainability)
- Dependency risks (outdated or vulnerable packages)
- Language-specific anti-patterns

The output is normalized into a unified format regardless of programming language, enabling consistent security assessment across heterogeneous codebases.

This system is designed for integration into CI/CD pipelines or standalone auditing workflows.

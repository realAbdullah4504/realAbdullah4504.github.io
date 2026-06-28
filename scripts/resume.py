import json
from pathlib import Path
from jinja2 import Environment, FileSystemLoader

PROJECT_ROOT = Path(__file__).parent.parent

def snake_case_to_label(snake_str):
    """Convert snake_case to Title Case label."""
    return ' '.join(word.capitalize() for word in snake_str.split('_'))

env = Environment(
    loader=FileSystemLoader(PROJECT_ROOT / "homepage" / "portfolio")
)

template = env.get_template("ats-resume-template.html")

with open(
    PROJECT_ROOT / "homepage" / "portfolio" / "master-resume.json",
    "r",
    encoding="utf-8"
) as f:
    resume_data = json.load(f)

html = template.render(snake_case_to_label=snake_case_to_label, **resume_data)

output_dir = PROJECT_ROOT / "output"
output_dir.mkdir(exist_ok=True)

with open(
    output_dir / "resume.html",
    "w",
    encoding="utf-8"
) as f:
    f.write(html)

print("resume.html generated successfully")
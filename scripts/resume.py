import json
from pathlib import Path
from jinja2 import Environment, FileSystemLoader

PROJECT_ROOT = Path(__file__).parent.parent

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

html = template.render(**resume_data)

output_dir = PROJECT_ROOT / "output"
output_dir.mkdir(exist_ok=True)

with open(
    output_dir / "resume.html",
    "w",
    encoding="utf-8"
) as f:
    f.write(html)

print("resume.html generated successfully")
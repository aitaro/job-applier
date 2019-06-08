import json
import sys

args = sys.argv
file = open("app/manifest.json", "r")
manifest = json.load(file)
version = manifest["version"]
if len(sys.argv) > 1:
    version = sys.argv[1]
else:
    ver_list = version.split(".")
    ver_list[2] = str(int(ver_list[2]) + 1)
    version = ".".join(ver_list)
manifest["version"] = version
file = open("app/manifest.json", "w")
json.dump(manifest, file, indent=2, sort_keys=True)

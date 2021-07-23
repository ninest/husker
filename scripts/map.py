"""
Copy-paste locations from map PDF, generate list of JS objects
"""

locations_string = """C3 Columbus Parking Garage (CPG)
E2 Belvidere Parking Garage (BPG)
C2 Gainsborough Parking Garage (GPG)
A2 Renaissance Park Parking Garage (RPG)
A2 West Village Parking Garage (WPG)"""

for location in locations_string.split("\n"):
    coords = location.split(" ")[0]
    short_name = location.split("(")[1].split(")")[0]
    name = location[3:].split(" (")[0]

    print(f"""{{coords: "{coords}", name: "{name}", shortName: "{short_name}"}},""")

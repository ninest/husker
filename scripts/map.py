"""
Copy-paste locations from map PDF, generate list of JS objects
"""

locations_string = """B3 10 Coventry (CV)
C1 106–122 Levine (106-122) 
C1 142–148 Hemenway St (142)
C1 153 Hemenway St (LF)
C2 319 Huntington Ave (319)
C2 337 Huntington Ave (337) 
B1 407 Huntington Ave (407) 
B3 768 Columbus Ave (768) 
B3 780 Columbus Ave (780) 
B1 Burstein Hall (BU)
C3 Davenport Commons A, B (DC)
C2 East Village (EV)
C2 Hastings Hall (HS)
A2 International Village (IV)
D1 Kennedy Hall (KY) 
C1 Kerr Hall (KH)
D1 Light Hall (LH)
C1 Loftman Hall (LF)
C1 Melvin Hall (MH)
B1 Rubenstein Hall (RU) 
D1 Smith Hall (SM)
C1 Speare Hall (SP)
C1 Stetson East (SE)
C1 Stetson West (SW)
A1 West Village A, B, C, E (WV) 
B1 West Village F, G, H (WV) 
B1 White Hall (WH)
B1 Willis Hall (WI)"""

for location in locations_string.split("\n"):
    coords = location.split(" ")[0]
    short_name = location.split("(")[1].split(")")[0]
    name = location[3:].split(" (")[0]

    print(f"""{{coords: "{coords}", name: "{name}", shortName: "{short_name}"}},""")
